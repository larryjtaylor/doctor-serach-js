(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "e8d384499ca5029755d6049e0290681c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(doc) {
  var medicalIssue;
  var searchResults;
}

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
  this.medicalIssue = medicalIssue;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     console.log(result);
     this.searchResults = result;
     displayDoctor(result);
  })
        // displayDoctors(doctorArray)
    // })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(results){
  $('#result').empty();
  for(i = 0; i < results.data.length; i++) {
      $("#result").append("<li class='doc'>" + results.data[i].profile.first_name + " " +  results.data[i].profile.last_name + ", " + results.data[i].profile.title + "</li>");
    }
};

$(document).ready(function() {
  var findDoc = new Doctor();
  $('#doctor-search').submit(function(event) {
    event.preventDefault();

    findDoc.getDoctor($('#symptom').val(), displayDoctor);
  });
});

},{"./../js/doctor.js":2}]},{},[3]);
