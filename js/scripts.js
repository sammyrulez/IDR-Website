function send_signinForm_data(){
    $.ajax({
        type : 'POST',
        url : 'https://script.google.com/macros/s/AKfycbxUxHIBkClK-Ko8d_dsz_hFwBoBVOvOiD1jY-Q0kUXPTH3R5DYskS-hl7GmeSTibjyG/exec',
        data : $('#signinForm').serialize() 
    }).done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
}

