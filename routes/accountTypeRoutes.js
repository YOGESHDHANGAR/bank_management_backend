const express = require("express");
const router = express.Router();
const accountTypeController = require("../controllers/accountTypeController");

router.post("/", accountTypeController.createAccountType);
router.get("/", accountTypeController.getAllAccountTypes);
router.get("/:id", accountTypeController.getAccountTypeById);
router.put("/:id", accountTypeController.updateAccountType);
router.delete("/:id", accountTypeController.deleteAccountType);

module.exports = router;
