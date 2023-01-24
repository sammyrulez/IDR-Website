(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



function send_signinForm_data() {
  $("#fieldset1").children().attr("disabled", "disabled");
  $.ajax({
    type: "POST",
    url: "https://script.google.com/macros/s/AKfycbxUxHIBkClK-Ko8d_dsz_hFwBoBVOvOiD1jY-Q0kUXPTH3R5DYskS-hl7GmeSTibjyG/exec",
    data: $("#signinForm").serialize(),
  })
    .done(function () {
      var myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      myModal.show();
    })
    .fail(function () {
      alert("error");
    }); 
}
