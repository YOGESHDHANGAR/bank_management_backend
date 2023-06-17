const express = require("express");
const router = express.Router();
const kYCDocumentController = require("../controllers/kYCDocumentController");

router.post("/", kYCDocumentController.createKYCDocument);
router.get("/", kYCDocumentController.getAllKYCDocuments);
router.get("/:id", kYCDocumentController.getKYCDocumentById);
router.put("/:id", kYCDocumentController.updateKYCDocument);
router.delete("/:id", kYCDocumentController.deleteKYCDocument);

module.exports = router;
