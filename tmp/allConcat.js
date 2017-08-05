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
