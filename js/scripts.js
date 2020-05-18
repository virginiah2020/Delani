$(document).ready(function(){
    $("#design,#development,#product").hide();
    $("#design-image").click(function(){
      $("#design").toggle();
      
    });

      $("#development-image").click(function(){
        $("#development").toggle();
        
  });
     
       $("#product-image").click(function(){
        $("#product").toggle();  
    });
    });

    $("button").click(function (omonge) {
        var client = document.getElementById('nameDetail').value;
        alert(' Hello' + ' client ' + client + ' we have received your message . ' + ' Reach out to us anytime');
        wamuyu.preventDefault();
      });
    
      $("button").on('click', function () {
        $('form').each(function () {
          this.reset();
        });
      });