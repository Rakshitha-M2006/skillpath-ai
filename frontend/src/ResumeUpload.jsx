import { useState } from 'react';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore'; // Changed updateDoc to setDoc for safety

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
      setUploadedUrl(null);
    } else {
      setError('Please upload a valid PDF file.');
      e.target.value = null;
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('No file selected.');
      return;
    }
    if (!auth.currentUser) {
      setError('User not authenticated. Please log in again.');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('public_id', `${auth.currentUser.uid}_resume`);

      // FIXED: Added '/image/upload' which is required by Cloudinary for unsigned API hits
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || 'Upload failed to Cloudinary.');
      }

      const data = await response.json();
      const url = data.secure_url;

      // FIXED: Using setDoc with merge: true so it doesn't fail if the user document hasn't been created yet
      await setDoc(doc(db, 'users', auth.currentUser.uid), { 
        resumeUrl: url,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      setUploadedUrl(url);
    } catch (err) {
      console.error("Upload error sequence:", err);
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '2px dashed #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ marginBottom: '10px' }}>Upload Your Resume</h3>
      <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
        We will securely extract your current skills to generate your roadmap. (PDF only)
      </p>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ display: 'block', margin: '0 auto 15px auto' }}
      />

      {file && !uploadedUrl && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          style={{ padding: '8px 20px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {uploading ? 'Uploading...' : `Upload ${file.name}`}
        </button>
      )}

      {error && <p style={{ color: '#cc0000', marginTop: '10px' }}>{error}</p>}

      {uploadedUrl && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e6ffe6', borderRadius: '4px', display: 'inline-block' }}>
          <span style={{ color: '#006600', fontWeight: 'bold' }}>✓ Uploaded successfully</span>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;