var Hero = require('../models/hero.js');

exports.create = function(heroName, callback) {
  Hero.create(heroName, callback);
};

exports.findAll = function(callback) {
  Hero.find({}, callback);
};

exports.findById = function(id, callback) {
  Hero.findById(id, callback);
};

exports.findByName = function(name, callback) {
  Hero.findOne({'name': name}, callback)
}

exports.deleteById = function(id, callback) {
  Hero.findByIdAndRemove(id, callback);
}

exports.deleteByName = function(name, callback) {
  Hero.findOneAndRemove({'name': name}, callback);
}

exports.updateByName = function(name, updatedProps, callback) {
  Hero.findOneAndUpdate({'name': name}, updatedProps, {new: true}, callback);
}