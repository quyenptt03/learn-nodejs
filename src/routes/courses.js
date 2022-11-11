const express = require("express");
const bp = require("body-parser");

const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);
router.get("/:id/edit", courseController.edit);
router.delete("/:id", courseController.delete);
router.put("/:id", courseController.update);

module.exports = router;
