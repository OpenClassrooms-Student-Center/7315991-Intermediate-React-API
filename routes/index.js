const express = require("express");
const router = express.Router();
const getSurvey = require("../controllers/survey");
const getFreelancers = require("../controllers/freelancers");
const getFreelancer = require("../controllers/freelancer");
const getResults = require("../controllers/results");

router.get("/survey", function (req, res) {
  const surveyData = getSurvey();
  if (!surveyData) {
    res.status(400).send("Not found.");
  } else {
    res.send({ surveyData });
  }
});

router.get("/freelancer", function (req, res) {
  const { id } = req.query;
  const freelancerData = getFreelancer(id);
  if (!freelancerData) {
    res.status(400).send("Not found.");
  } else {
    res.send({ freelancerData });
  }
});

router.get("/results", function (req, res) {
  const { a1, a2, a3, a4, a5, a6 } = req.query;
  const resultsData = getResults(a1, a2, a3, a4, a5, a6);
  if (!resultsData) {
    res.status(400).send("Not found.");
  } else {
    res.send({ resultsData });
  }
});

router.get("/freelancers", function (req, res, next) {
  const freelancersList = getFreelancers();
  res.send({ freelancersList });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "API - Intermediate React" });
});

module.exports = router;
