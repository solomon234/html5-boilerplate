jQuery(document).ready(function() {
  var framePrice = 0;
  var lenStylePrice = 0;
  var progressivePrice = 0;
  var lensMaterialPrice = 0;
  var lensAddOnPrice = 0;
  var counter = 1;

  $(function() {

    $('.lensImg li .optionContainer').on('click', function() {
      if (!$(this).parent().hasClass('lensImgSelect')) {

        /*       One option is selected / all other options are unselected           */
        $(this).parent().addClass('lensImgSelect').siblings().removeClass('lensImgSelect');

        /*       Declaring Variables to calcuate data               */
        var data = $('.lensImgSelect .picText').text();
        var price = $(".lensImgSelect .optionPrice");
        /* Read in id tag name*/
        var option = $(this).parent().parent().attr('id');

        /* debugging */
        //console.log("%s is data.\n %s is price", data, price.text());

        if (price.length) {
          price = price.text().replace(/\D/g, '');
        } else {
          price = 0;
        }

        /*  Will turn to function to reduce redundancy */
        if (option == 'showFrames') {
          framePrice = parseInt(price);
          $(".frameData").text(data);
          $('#' + option).toggle().parent().next('li').toggle().find('ol').toggle('fast');
        } else if (option == 'showLStyle') {
          lenStylePrice = parseInt(price);
          $(".lensData").text(data);
          $('#' + option).toggle().parent().next('li').toggle().find('ol').toggle('fast');
        } else if (option == 'showPLT') {
          progressivePrice = parseInt(price);
          $(".progData").text(data);
          $('#' + option).toggle().parent().next('li').toggle().find('ol').toggle('fast');
        } else if (option == 'showLMaterial') {
          lensMaterialPrice = parseInt(price);
          $(".materialData").text(data);
          $('#' + option).toggle().parent().next('li').toggle().find('ol').toggle('fast');
        } else if (option == 'showLAddOn') {
          lensAddOnPrice = parseInt(price);
          $(".addOnData").text(data);
          $('#' + option).toggle().parent().next('li').toggle().find('ol').toggle('fast');
        }

        updatePrice();


        $(this).parent().removeClass('lensImgSelect');
      }
    });
  });


  /*Show option's inner content*/
  var showLStyle = $("#showLStyle");
  var fType = $("#fType");
  var lStyle = $("#lStyle");
  var steps = $(".step");
  var form = $('#sign-form');

  $('.questions li .toggle-btn').click(function() {
    /*------ toggles display field for ol tag on select ------*/
    $(this).parent().find('ol').toggle("fast");


  });

  function updatePrice() {
    var total = framePrice + lenStylePrice + progressivePrice + lensMaterialPrice + lensAddOnPrice;
    //    console.log(total);
    $("#total").text(total);
  }
  /*
    fType.click(function() {
      $("#showFrames").toggle("fast");
    });
    $("#progLTech").click(function() {
      $("#showPLT").toggle("fast");
    });
    $("#lMaterial").click(function() {
      $("#showLMaterial").toggle("fast");
    });
    $("#lAddOn").click(function() {
      $("#showLAddOn").toggle("fast");
    });
  */

  // Moves progress bar to next
  lStyle.bind("click", function() {

    jQuery.each(steps, function(i) {
      if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
        $(steps[i]).addClass('current');
        $(steps[i - 1]).removeClass('current').addClass('done');
        return false;
      }

    })
  });
  /* may need for loop to reset addclass

  fType.bind("click", function() {
    jQuery.each(steps, function(i) {
      if (jQuery(steps[i+1]).hasClass('done')) {
        jQuery(steps[i+1]).removeClass('done');
        jQuery(steps[i+1]).removeClass('current');
        jQuery(steps[i]).addClass('current').removeClass('done');
        return false;
      }
    })
  });
*/
});
