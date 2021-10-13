const freelancersData = require("../models/freelancers");

function getFreelancer(id) {
  return freelancersData.find((freelancer) => freelancer.id === id);
}

module.exports = getFreelancer;
