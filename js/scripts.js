function send_signinForm_data() {
  if ($("#signinForm")[0].checkValidity()) {
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
    }else{
      alert("Name and email are mandatory");
    }
}
