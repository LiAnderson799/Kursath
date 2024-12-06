//Настройки скроллинга
$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
       $('html, body').animate( { scrollTop: destination - 77}, 1100 );
     return false;
});


//Маска для телефона
(function( $ ){
  
  var $body;

  $(document).ready(function(){
    $body = $('body');

    $body
      .find('#phone').each(function(){
          $(this).mask("+7(999) 999-9999",{autoclear: false});
      });

    $body.on('keyup','#phone',function(){
      var phone = $(this),
          phoneVal = phone.val(),
          form = $(this).parents('form');

      if ( (phoneVal.indexOf("_") != -1) || phoneVal == '' ) {
        form.find('.main__btn').addClass('disabled');
      } else {
        form.find('.main__btn').removeClass('disabled');
      }
    });

  });

})( jQuery );

$('.input__code').keyup(function(){
  if($(this).val().match(/^\d{1}$/)){
    $(this).next('.input__code').focus();
  }else{
    $(this).val('');
  }
});
