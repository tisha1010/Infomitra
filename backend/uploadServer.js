import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
app.use(cors());

// Set storage for uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/"); // folder where files will be stored
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Create uploads folder if it doesn't exist
import fs from "fs";
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

// Upload API
app.post("/upload", upload.single("document"), (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    // Here you can process the file to "read what it is"
    // For now, we just return the filename and mimetype
    res.json({
      message: "File uploaded successfully",
      filename: file.filename,
      mimetype: file.mimetype,
      size: file.size,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

app.listen(8001, () => console.log("Upload server running on port 8001"));




////////////////////////////
// // uploadServer.js
// import express from "express";
// import cors from "cors";
// import multer from "multer";
// import path from "path";
// import fs from "fs";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import mammoth from "mammoth";
// import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.js"; // pdfjs-dist (use legacy build for Node)

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connect
// const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/infomitra";
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ensure uploads folder exists
// const UPLOAD_DIR = "uploads";
// if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// // Multer disk storage (keeps file on disk so you have a copy)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, UPLOAD_DIR),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

// // Schema — saves to your existing collection `upload_info`
// const fileSchema = new mongoose.Schema({
//   filename: String,
//   originalname: String,
//   mimetype: String,
//   size: Number,
//   content: String,
//   uploaded_at: { type: Date, default: Date.now },
// }, { collection: "upload_info" });

// const File = mongoose.model("File", fileSchema);

// // helper: extract text from PDF using pdfjs-dist
// async function extractTextFromPDF(filePath) {
//   const data = new Uint8Array(fs.readFileSync(filePath));
//   const loadingTask = pdfjsLib.getDocument({ data });
//   const pdf = await loadingTask.promise;
//   let fullText = "";
//   for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//     const page = await pdf.getPage(pageNum);
//     const textContent = await page.getTextContent();
//     const strings = textContent.items.map(item => {
//       // item has .str in most cases
//       return item.str || "";
//     });
//     fullText += strings.join(" ") + "\n\n";
//   }
//   return fullText.trim();
// }

// // Upload route
// app.post("/upload", upload.single("document"), async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) return res.status(400).json({ error: "No file uploaded" });

//     let textContent = "";

//     // Determine extraction method by mimetype / extension
//     const mime = file.mimetype || "";
//     const ext = path.extname(file.originalname).toLowerCase();

//     if (mime === "application/pdf" || ext === ".pdf") {
//       try {
//         textContent = await extractTextFromPDF(file.path);
//         if (!textContent || textContent.trim().length === 0) {
//           textContent = "No selectable text found in PDF (might be a scanned image PDF).";
//         }
//       } catch (err) {
//         console.error("PDF extraction error:", err);
//         textContent = "Failed to extract text from PDF.";
//       }
//     } else if (
//       mime === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
//       ext === ".docx"
//     ) {
//       try {
//         const buffer = fs.readFileSync(file.path);
//         const result = await mammoth.extractRawText({ buffer });
//         textContent = result.value || "";
//       } catch (err) {
//         console.error("DOCX extraction error:", err);
//         textContent = "Failed to extract text from DOCX.";
//       }
//     } else if (mime === "text/plain" || ext === ".txt") {
//       textContent = fs.readFileSync(file.path, "utf-8");
//     } else {
//       textContent = "File type not supported for automatic text extraction.";
//     }

//     // Save to MongoDB collection `upload_info`
//     const saved = new File({
//       filename: file.filename,
//       originalname: file.originalname,
//       mimetype: file.mimetype,
//       size: file.size,
//       content: textContent,
//     });
//     await saved.save();

//     // Optionally return file content and DB id
//     res.json({
//       message: "File uploaded & saved successfully",
//       fileId: saved._id,
//       content: textContent,
//     });
//   } catch (err) {
//     console.error("Upload error:", err);
//     res.status(500).json({ error: "Upload failed" });
//   }
// });

// // a helper route to list saved files (so frontend can show previous uploads)
// app.get("/files", async (req, res) => {
//   try {
//     const files = await File.find().sort({ uploaded_at: -1 }).limit(100);
//     res.json(files);
//   } catch (err) {
//     console.error("Error fetching files:", err);
//     res.status(500).json({ error: "Failed to fetch files" });
//   }
// });

// const PORT = process.env.UPLOAD_PORT || 8001;
// app.listen(PORT, () => console.log(`Upload server running on port ${PORT}`));


