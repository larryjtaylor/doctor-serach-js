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
  .fail(function(error){
    console.log("fail");
  });
};

exports.doctorModule = Doctor;
