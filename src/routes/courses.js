const express = require("express");
const bp = require("body-parser");

const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.delete);
router.delete("/:id/force", courseController.forceDelete);
router.get("/:slug", courseController.show);

module.exports = router;
