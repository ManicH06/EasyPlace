import multer from "multer";
import fs from "fs";
import path from "path";

// setup files destination folder
const uploadPath = path.join(__dirname, "../../public/uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

// setup multer
const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Type de fichier non autorisé. Autorisés: PDF, JPG, PNG."));
    }
  },
});

// setup fields
export default uploader.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
]);
