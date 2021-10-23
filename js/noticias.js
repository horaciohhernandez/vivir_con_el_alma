const form = document.querySelector("#form-blog");
form.onsubmit = (event) => {
    event.preventDefault()

    $('#nombre-blog').prepend('<p>(${#nombre-blog})</p>')  
    $('#rounded-circle').prepend('<a><img>(${#rounded-circle})</a>')  
    $('#mensaje-blog').prepend('<p>(${#mensaje-blog})</p>') 
      
    
    form.reset()
}

 