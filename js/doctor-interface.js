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
