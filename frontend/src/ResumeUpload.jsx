import { useState } from 'react';
import { storage, db } from '../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import * as pdfjsLib from 'pdfjs-dist';

// This tells pdf.js where to find its worker file to process PDFs in the browser
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function ResumeUpload({ user }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Helper function to extract text from the PDF
  const extractText = async (pdfFile) => {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(" ");
      fullText += pageText + " ";
    }
    return fullText;
  };

  const handleUpload = async () => {
    if (!file) return setStatus("Please select a PDF first.");
    if (!user) return setStatus("Error: You must be logged in.");

    setLoading(true);
    
    try {
      // 1. Read the PDF text
      setStatus("Extracting text from PDF...");
      const extractedText = await extractText(file);

      // 2. Upload the file to Firebase Storage
      setStatus("Uploading file...");
      const fileRef = ref(storage, `resumes/${user.uid}/${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);

      // 3. Save the text and URL to Firestore
      setStatus("Saving to database...");
      const userDocRef = doc(db, 'users', user.uid);
      
      // { merge: true } ensures we update existing data without deleting their role/email
      await setDoc(userDocRef, {
        resumeUrl: downloadURL,
        resumeText: extractedText,
        updatedAt: new Date()
      }, { merge: true });

      setStatus("Success! Resume processed and saved.");
      setFile(null); // Clear the input

    } catch (error) {
      console.error(error);
      setStatus("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-6 rounded-lg shadow-sm mt-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={handleFileChange}
        className="mb-4 block"
      />
      <button 
        onClick={handleUpload}
        disabled={loading || !file}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Processing..." : "Upload & Process"}
      </button>
      
      {status && <p className="mt-4 text-sm font-medium text-gray-700">{status}</p>}
    </div>
  );
}