const express = require("express");
const controller = require("../controllers/productsController");
const router = express.Router();

router.get("/", controller.list);
router.post("/add", controller.save);

router.get("/select/:id", controller.select);
router.post("/update/:id", controller.update);

router.get("/delete/:id", controller.delete);

module.exports = router;
