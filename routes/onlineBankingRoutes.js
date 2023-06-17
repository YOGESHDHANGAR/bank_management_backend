const express = require("express");
const router = express.Router();
const onlineBankingController = require("../controllers/onlineBankingController");

router.post("/", onlineBankingController.createOnlineBankingAccount);
router.get("/:id", onlineBankingController.getOnlineBankingAccountByCustomerId);
router.put("/:id", onlineBankingController.updateOnlineBankingAccount);
router.delete("/:id", onlineBankingController.deleteOnlineBankingAccount);

module.exports = router;
