var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(results){
  $('#result').empty();
  if(results.data.length > 0){
    for(i = 0; i < results.data.length; i++) {
      $("#result").append("<li class='doc'>" + results.data[i].profile.first_name + " " +  results.data[i].profile.last_name + ", " + results.data[i].profile.title + "</li>");
    }
  } else {
    $('#result').html("<h3>" + "I'm sorry, no results match your search" + "</h3");
  }
};

$(document).ready(function() {
  var findDoc = new Doctor();
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    $('.well-sm').show();

    findDoc.getDoctor($('#symptom').val(), displayDoctor);
  });
});
