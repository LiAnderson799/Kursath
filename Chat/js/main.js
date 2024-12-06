   var test = "test";
   $('.main__btn2').hide();
   var $body;
   startTimer();
   $(document).ready(function() {

       var hellopreloader = document.getElementById("hellopreloader_preload");

       function fadeOutnojquery(el) {
           el.style.opacity = 1;
           var interhellopreloader = setInterval(function() {
               el.style.opacity = el.style.opacity - 0.05;
               if (el.style.opacity <= 0.05) {
                   clearInterval(interhellopreloader);
                   hellopreloader.style.display = "none";
               }
           }, 16);
       }
       window.onload = function() { setTimeout(function() { fadeOutnojquery(hellopreloader); }, 1000); };


       $body = $('body');
       $body.find('#phone').each(function() {
           $(this).mask("+7(999) 999-9999", { autoclear: false });
       });

       $body.on('keyup', '#phone', function() {
           var phone = $(this),
               phoneVal = phone.val(),
               form = $(this).parents('form');

           if ((phoneVal.indexOf("_") != -1) || (phoneVal == '') || (!$('.agree__flex__input').is(":checked", true))) {
               form.find('.main__btn').addClass('disabled');
           } else {
               form.find('.main__btn').removeClass('disabled');
           }
       });
       $('.agree__flex__input').click(function() {
           var phone = $('#phone');
           phoneVal = phone.val();
           if ((phoneVal.indexOf("_") != -1) || (phoneVal == '') || (!$('.agree__flex__input').is(":checked", true))) {
               $('.main__btn').addClass('disabled');
           } else {
               $('.main__btn').removeClass('disabled');
           }
       });

   });



   $('.input__code').keyup(function() {
    $('.main__btn2').show();
       if ($(this).val().match(/^\d{1}$/)) {
           $(this).next('.input__code').focus();
       } else {
           $(this).val('');
       }
   });



   $('.input__code').keyup(function() {
       if ($(this).val() == '') {
           $(this).prev('.input__code').focus();
       }
   });

   $('.code2').keyup(function() {
       if ($(this).val() == '') {
           $('.code1').val('');
       }
   });

   $('.code2, .code3, .code4').click(function() {
       if ($('.code1').val() == '') {
           $('.code1').focus();
       } else {
           if ($(this).val() == '') {
               $(this).prev().focus();
           }
       }
   });


   function checkParams() {
       var code1 = $('.code1').val();
       var code2 = $('.code2').val();
       var code3 = $('.code3').val();
       var code4 = $('.code4').val();

       if (code1.length != 0 && code2.length != 0 && code3.length != 0 && code4.length != 0) {
           $('.main__btn2').removeClass('disabled');
       } else {
           $('.main__btn2').addClass('disabled');
       }
   }


   //Скроллинг 
   $(window).scroll(function() {
       if ($(this).scrollTop() > 44) {
           $('.nav').addClass('nav-fixed');
       } else {
           $('.nav').removeClass('nav-fixed');
       }
   });


   //Клики по кнопкам
   $('.test').click(function() {
       $('.main__auth').toggleClass('auth__error');
       $('.main__btn2').hide();
       $('.main__btn__icon').toggleClass('show');
       $('.main__loading').toggleClass('show');     
   });
   $('.test2').click(function() {
       $('.error__popup-wr').slideToggle();
   });


   $('.main__send__code').click(function() {
       $(this).hide();
       $('.main__btn2').show();
       $('.main__btn2').removeClass('hide-important');
       $('.seconds').text('90');
       $('.main__auth__repeat').show();
       startTimer();
   });





   //Таймер обратного отсчета
   function startTimer() {
       $('.main__auth__repeat').show();
       var _Seconds = $('.seconds').text(),
           int;
       int = setInterval(function() {
           if (_Seconds > 0) {
               _Seconds--;
               $('.seconds').text(_Seconds);
           } else {
               clearInterval(int);
               repeatShow();
               var inputs = document.querySelectorAll('input[type=number]');
               for (var i = 0; i < inputs.length; i++) {
                   inputs[i].value = '';
               };
               $('.main__btn2').addClass('disabled');
               $('.main__btn2').addClass('hide-important');
               $('.main__btn2').hide();
               $('.main__send__code').show();
           }
       }, 1000);
   }

   function repeatShow() {
       $('.main__auth__repeat').hide();
       $('.main__btn2').hide();
       $('.main__send__code').addClass('main__send__code__show');
       $('.main__ender-code span').show();
   }
  function showErrorPopup() {
     $('.error__popup-wr').slideDown();
  }
  function hideErrorPopup() {
      $('.error__popup-wr').slideUp();
  }

/*Закрытие попап*/
$('.update__btn').click(function(){
  $('.update__content').slideUp();
  $('.update__wrapp').slideUp();
});