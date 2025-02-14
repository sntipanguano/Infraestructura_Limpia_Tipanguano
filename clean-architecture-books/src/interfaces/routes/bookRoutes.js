const express = require("express");
const { createBookHandler, getBooksHandler } = require("../controllers/bookController");

const router = express.Router();

router.post("/", createBookHandler);
router.get("/", getBooksHandler);

module.exports = router;
