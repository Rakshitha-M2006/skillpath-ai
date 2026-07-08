import * as pdfjsLib from 'pdfjs-dist';

// Configures the worker automatically using a secure, official CDN matching your exact version
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.1.200/pdf.worker.min.mjs`;

/**
 * Extracts all plain text content from a PDF file.
 * @param {File} file - The raw PDF file object from an input element.
 * @returns {Promise<string>} The full extracted text.
 */
export const extractTextFromPDF = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    let fullText = "";

    // Loop through every page in the PDF to grab its text content
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(" ");
      fullText += pageText + "\n";
    }

    return fullText;
  } catch (error) {
    console.error("PDF Text Extraction failed:", error);
    throw new Error("Could not read text from the PDF file.");
  }
};