function send_signinForm_data(){
    $.ajax({
        type : 'POST',
        url : 'url',
        data : $('#signinForm').serialize() 
    }).done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
}

