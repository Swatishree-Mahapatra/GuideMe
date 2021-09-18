const express = require("express");
const Course = require("../models/courseSchema");

const router = express.Router();

//all-courses
router.get("/all", (req, res) => {
  Course.find()
    .sort({ views: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//popular-section
router.get("/popular", (req, res) => {
  Course.find()
    .sort({ likes: -1 })
    .then((result) => {
      res.send(result);
      console.log("popular courses");
    })
    .catch((err) => {
      console.log(err);
    });
});

//single-course
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Course.findByIdAndUpdate(id, { $inc: { views: 1 } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//create-new-course
router.post("/", (req, res) => {
  console.log(req.body);
  const course = new Course(req.body);

  course
    .save()
    .then((result) => {
      res.send(result);
      console.log("New course page created");
    })
    .catch((err) => {
      console.log(err);
    });
});

//update-course
router.put("/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: `Could not Update course with id = ${id}!`,
        });
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//delete-course
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Course.findByIdAndDelete(id)
    .then((result) => {
      res.send({
        message: "course was deleted successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//like count
router.post("/:id/like", (req, res) => {
  const id = req.params.id;
  Course.findByIdAndUpdate(id, { $inc: { likes: 1 } })
    .then((result) => {
      res.send("course liked");
    })
    .catch((err) => {
      console.log(err);
    });
});

//dislike count
router.delete("/:id/like", (req, res) => {
  const id = req.params.id;

  Course.findByIdAndUpdate(id, { $inc: { likes: -1 } })
    .then((result) => {
      res.send("course disliked");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
