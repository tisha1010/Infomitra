import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle file selection
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFileInfo(null);
    setError("");
  };

  // Handle file upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setError("Please select a file to upload");

    const formData = new FormData();
    formData.append("document", file);

    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:8001/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFileInfo(response.data);
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section style={styles.uploadSection}>
      <h2 style={styles.heading}>Upload Document</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          onChange={handleFile}
          required
          style={styles.inputFile}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {fileInfo && (
        <div style={styles.fileInfo}>
          <h3>Uploaded File Info:</h3>
          <p><strong>Name:</strong> {fileInfo.filename}</p>
          <p><strong>Type:</strong> {fileInfo.mimetype}</p>
          <p><strong>Size:</strong> {fileInfo.size} bytes</p>
          {fileInfo.content && (
            <>
              <h4>Content:</h4>
              <pre>{fileInfo.content}</pre>
            </>
          )}
        </div>
      )}
    </section>
  );
};

const styles = {
  uploadSection: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputFile: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#1976D2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  fileInfo: {
    marginTop: "20px",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
};

export default Upload;




// //////////////////////////////
// import React, { useState } from 'react';
// import Tesseract from 'tesseract.js';
// import './Upload.css'; // Optional CSS file for styling

// const UploadSection = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [analysis, setAnalysis] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const analyzeDocument = async () => {
//     if (!selectedFile) {
//       setError('Please select a file to upload.');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setExtractedText('');
//     setAnalysis('');

//     try {
//       const { data: { text } } = await Tesseract.recognize(
//         selectedFile,
//         'eng', // Language: English; add 'guj' for Gujarati if needed
//         { logger: (m) => console.log(m) }
//       );

//       setExtractedText(text);

//       // Simple analysis: Detect common fields (e.g., Name, Date, Address) and explain
//       const fields = analyzeFields(text);
//       setAnalysis(generateExplanation(fields));
//     } catch (err) {
//       setError('Error analyzing the document: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const analyzeFields = (text) => {
//     const fields = [];
//     if (text.toLowerCase().includes('name')) fields.push('Name');
//     if (text.toLowerCase().includes('date') || text.toLowerCase().includes('dob')) fields.push('Date of Birth');
//     if (text.toLowerCase().includes('address')) fields.push('Address');
//     if (text.toLowerCase().includes('aadhaar') || text.toLowerCase().includes('aadh ar')) fields.push('Aadhaar Number');
//     if (text.toLowerCase().includes('pan')) fields.push('PAN Number');
//     // Add more field detections as needed
//     return fields;
//   };

//   const generateExplanation = (fields) => {
//     if (fields.length === 0) return 'No recognizable fields found. Please upload a clearer document.';

//     let explanation = 'Document Analysis:\n';
//     explanation += 'This document appears to be a form requiring the following fields:\n\n';

//     fields.forEach((field) => {
//       explanation += `${field}: Required for identification. Provide your full name as per official records.\n`;
//       // Add specific explanations for each field
//       if (field === 'Date of Birth') explanation = explanation.replace('full name', 'date in DD/MM/YYYY format');
//       if (field === 'Address') explanation = explanation.replace('full name', 'complete residential address');
//       if (field === 'Aadhaar Number') explanation = explanation.replace('full name', '12-digit Aadhaar number');
//       if (field === 'PAN Number') explanation = explanation.replace('full name', '10-character PAN number');
//     });

//     return explanation;
//   };

//   return (
//     <div className="upload-section">
//       <h2>Upload Document for Analysis</h2>
//       <input type="file" accept="image/*, .pdf" onChange={handleFileChange} />
//       <button onClick={analyzeDocument} disabled={loading}>Analyze Document</button>
//       {loading && <p>Analyzing...</p>}
//       {error && <p className="error">{error}</p>}
//       {extractedText && (
//         <div className="result">
//           <h3>Extracted Text</h3>
//           <pre>{extractedText}</pre>
//         </div>
//       )}
//       {analysis && (
//         <div className="result">
//           <h3>Document Explanation</h3>
//           <pre>{analysis}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadSection;  




//////
// import React, { useState } from 'react';
// import Tesseract from 'tesseract.js';
// import './Upload.css'; // Optional CSS file for styling

// const UploadSection = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [extractedText, setExtractedText] = useState('');
//   const [analysis, setAnalysis] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [filePreview, setFilePreview] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setError('');
   
//     if (file) {
//       // Preview for images
//       if (file.type.startsWith('image/')) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setFilePreview(reader.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setFilePreview(null);
//       }
//     }
//   };

//   const analyzeDocument = async () => {
//     if (!selectedFile) {
//       setError('Please select a file to upload.');
//       return;
//     }

//     // Check file type
//     if (!selectedFile.type.startsWith('image/') && !selectedFile.name.endsWith('.pdf')) {
//       setError('Only images (JPG, PNG) or PDFs are supported. For PDFs, convert to image or use pdf.js.');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setExtractedText('');
//     setAnalysis('');
//     setFilePreview(null);

//     try {
//       // Tesseract options for better handling
//       const { data: { text } } = await Tesseract.recognize(
//         selectedFile,
//         'eng', // Language: English; add 'guj' for Gujarati if needed
//         {
//           logger: (m) => console.log(m), // Debug logging
//           workerPath: 'https://unpkg.com/tesseract.js@2.1.0/dist/worker.min.js', // Ensure worker loads
//           corePath: 'https://unpkg.com/tesseract.js-core@2.1.0/tesseract-core.wasm.js',
//           langPath: 'https://tessdata.projectnaptha.com/4.0.0',
//         }
//       );

//       if (!text.trim()) {
//         setError('No text detected. Try a clearer image or different file.');
//         return;
//       }

//       setExtractedText(text);

//       // Enhanced analysis: Detect document type and required fields
//       const { documentType, fields } = analyzeFields(text);
//       setAnalysis(generateExplanation(documentType, fields));
//     } catch (err) {
//       console.error('Tesseract Error:', err); // Log full error
//       setError(`Error analyzing the document: ${err.message || 'Unknown error. Check console for details.'}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const analyzeFields = (text) => {
//     const lowerText = text.toLowerCase();
//     let documentType = 'General Form';
//     const fields = [];

//     // Detect document type
//     if (lowerText.includes('aadhaar') || lowerText.includes('uidai')) {
//       documentType = 'Aadhaar Card Form';
//       fields.push('Name', 'Date of Birth', 'Address', 'Aadhaar Number');
//     } else if (lowerText.includes('pan') || lowerText.includes('income tax')) {
//       documentType = 'PAN Card Form';
//       fields.push('Name', 'Date of Birth', 'Address', 'PAN Number');
//     } else if (lowerText.includes('passport')) {
//       documentType = 'Passport Form';
//       fields.push('Name', 'Date of Birth', 'Address', 'Nationality');
//     } else if (lowerText.includes('income') || lowerText.includes('salary')) {
//       documentType = 'Income Certificate Form';
//       fields.push('Name', 'Annual Income', 'Employer Details');
//     } else {
//       // Generic field detection
//       if (lowerText.includes('name')) fields.push('Name');
//       if (lowerText.includes('date') || lowerText.includes('dob')) fields.push('Date of Birth');
//       if (lowerText.includes('address')) fields.push('Address');
//       if (lowerText.includes('aadhaar') || lowerText.includes('aadh ar')) fields.push('Aadhaar Number');
//       if (lowerText.includes('pan')) fields.push('PAN Number');
//     }

//     return { documentType, fields };
//   };

//   const generateExplanation = (documentType, fields) => {
//     let explanation = `Document Type Detected: ${documentType}\n\n`;
//     explanation += 'Required Fields and Data Needed:\n';

//     const fieldExplanations = {
//       'Name': 'Full name as per official ID (e.g., Aadhaar). Must match exactly with supporting documents.',
//       'Date of Birth': 'DD/MM/YYYY format from birth certificate or Aadhaar. Used for age verification.',
//       'Address': 'Complete residential address with pin code. Proof like electricity bill or ration card required.',
//       'Aadhaar Number': '12-digit Aadhaar number. Submit Aadhaar card copy for verification.',
//       'PAN Number': '10-character PAN (e.g., ABCDE1234F). Submit PAN card copy.',
//       'Annual Income': 'Yearly family income in INR. Submit salary slip, Form 16, or employer certificate.',
//       'Employer Details': 'Company name, salary certificate. For self-employed, ITR or affidavit.',
//       'Nationality': 'Indian citizenship proof (e.g., birth certificate or passport).',
//     };

//     fields.forEach((field) => {
//       explanation += `- ${field}: ${fieldExplanations[field] || 'Provide accurate information matching official records.'}\n`;
//     });

//     explanation += `\nGeneral Description: This document is essential for ${documentType.toLowerCase()}. It requires verification of personal details to ensure eligibility. Upload supporting documents (e.g., Aadhaar, birth certificate) during application. For more, visit official portals like Digital Gujarat.`;

//     return explanation;
//   };

//   return (
//     <div className="upload-section">
//       <h2>Upload Document for Analysis</h2>
//       <p className="upload-instructions">Upload an image or PDF of a form to analyze required fields and get explanations.</p>
//       <div className="file-input-wrapper">
//         <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
//         {filePreview && (
//           <div className="file-preview">
//             <img src={filePreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
//           </div>
//         )}
//       </div>
//       <button onClick={analyzeDocument} disabled={loading || !selectedFile} className="analyze-btn">
//         {loading ? 'Analyzing...' : 'Analyze Document'}
//       </button>
//       {error && <p className="error">{error}</p>}
//       {extractedText && (
//         <div className="result">
//           <h3>Extracted Text</h3>
//           <pre className="extracted-text">{extractedText}</pre>
//         </div>
//       )}
//       {analysis && (
//         <div className="result">
//           <h3>Document Explanation</h3>
//           <pre className="analysis-text">{analysis}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadSection;


