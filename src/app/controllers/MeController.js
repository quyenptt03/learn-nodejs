const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // GET /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/storedCourses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // GET /me/trash/courses
  trashedCourses(req, res, next) {
    Course.findDeleted()
      .then((courses) => {
        res.render("me/trashedCourses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
