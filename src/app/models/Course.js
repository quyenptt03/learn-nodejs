const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
const { Schema } = mongoose;

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 225 },
    slug: { type: String, maxLength: 255 },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
