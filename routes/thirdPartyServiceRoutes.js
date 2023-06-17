const express = require("express");
const router = express.Router();

// Import the ThirdPartyServiceController
const thirdPartyServiceController = require("../controllers/thirdPartyServiceController");

// Define the routes
router.get("/", thirdPartyServiceController.getAllThirdPartyServices);
router.get("/:id", thirdPartyServiceController.getThirdPartyServiceById);
router.post("/", thirdPartyServiceController.createThirdPartyService);
router.put("/:id", thirdPartyServiceController.updateThirdPartyService);
router.delete("/:id", thirdPartyServiceController.deleteThirdPartyService);

// Export the router
module.exports = router;
