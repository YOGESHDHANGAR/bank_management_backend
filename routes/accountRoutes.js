const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.post("/", accountController.createAccount);
router.get("/", accountController.getAllAccounts);
router.get("/:id", accountController.getAccountDetails);
router.put("/:id", accountController.updateAccountBalance);
router.delete("/:id", accountController.deleteAccount);

module.exports = router;
