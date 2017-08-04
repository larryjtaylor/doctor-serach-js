(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "e8d384499ca5029755d6049e0290681c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
}
var medicalIssue = $('#symptom').val();

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     console.log(medicalIssue);

      // console.log(result.data[0]);
      // console.log(result.data[0].profile.first_name + " " + result.data[0].profile.last_name + ", " + result.data[0].profile.title);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#symptom').val();

    var doctorData = result.data[0].profile.first_name + " " + result.data[0].profile.last_name + ", " + result.data[0].profile.title;

    var displayDoctor = function(doctorData){
      $('#result').append("<li>" + doctorData + "</li>");
    };
  });
  
  currentDoctorObject.getDoctor(first_name, last_name, title);
});

},{"./../js/doctor.js":2}]},{},[3]);
