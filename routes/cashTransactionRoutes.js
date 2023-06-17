const express = require("express");
const router = express.Router();
const cashTransactionController = require("../controllers/cashTransactionController");

router.post("/", cashTransactionController.createCashTransaction);
router.get("/", cashTransactionController.getAllCashTransactions);
router.get("/:id", cashTransactionController.getCashTransactionById);
router.put("/:id", cashTransactionController.updateCashTransaction);
router.delete("/:id", cashTransactionController.deleteCashTransaction);

module.exports = router;
