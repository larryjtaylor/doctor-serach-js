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
