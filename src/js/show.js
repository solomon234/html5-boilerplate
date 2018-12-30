jQuery(document).ready(function() {
  // Inspiration - https://codepen.io/jdniki/pen/rewxPo
  var framePrice = 0;
  var lenStylePrice = 0;
  var progressivePrice = 0;
  var lensMaterialPrice = 0;
  var lensAddOnPrice = 0;
  var counter = 1;
  var steps = $(".step");
  var form = $('#sign-form');

  $(function() {

    $('.lensImg li .optionContainer').on('click', function() {
    //  if (!$(this).parent().hasClass('lensImgSelect')) {
        /* Read in id tag name*/
        var option = $(this).closest("ol").prop("id");

        /*       One option is selected / all other options are unselected           */
        if (option != 'showLAddOn') {
          $(this).closest('li').addClass('lensImgSelect').siblings().removeClass('lensImgSelect');
        } else {
          $(this).parent().toggleClass('lensImgSelect');

        }
        /*       Declaring Variables to calcuate data               */

        var data = $(this).find('.picText').text();
        var price = $(this).find('.optionPrice');

        /* price convert */
        if (price.length && option != 'showLAddOn') {
          price = price.text().replace(/\D/g, '');
        } else if (option == 'showLAddOn') {
          data = $(this).parent().find('.picText').text();
          price = $(this).parent().find('.optionPrice');
          price = price.text().replace(/\D/g, '');

        }
        else {
          price = 0;
        }



        /*  Will turn to function to reduce redundancy */
        if (option == 'showFrames') {
          framePrice = parseInt(price);
          $(".frameData").text(data);
          $('#' + option).toggle('fast').parent().next('li').toggle('fast').find('ol').toggle('fast');
          steps.after("<div class='step current' > Lens Style </div>");
          steps = steps.nextAll(':first');
        } else if (option == 'showLStyle') {
          lenStylePrice = parseInt(price);
          $(".lensData").text(data);
          if (data == "Progressive") {
            $('#' + option).toggle('fast').parent().next('li').toggle('fast').find('ol').toggle('fast');
            steps.after("<div class='step current' > Progressive </div>");
            steps = steps.nextAll(':first');
          } else {
            $('#' + option).toggle('fast').parent().next('li').next('li').toggle('fast').find('ol').toggle('fast');
            steps.after("<div class='step current' > Lens Material </div>");
            steps = steps.nextAll(':first');
          }
        } else if (option == 'showPLT') {
          progressivePrice = parseInt(price);
          $(".progData").text(data);
          $('#' + option).toggle('fast').parent().next('li').toggle('fast').find('ol').toggle('fast');
          steps.after("<div class='step current' > Lens Material </div>");
          steps = steps.nextAll(':first');
        } else if (option == 'showLMaterial') {
          lensMaterialPrice = parseInt(price);
          $(".materialData").text(data);
          $('#' + option).toggle('fast').parent().next('li').toggle('fast').find('ol').toggle('fast');
          steps.after("<div class='step current' > Add-On </div>");
          steps = steps.nextAll(':first');
        } else if (option == 'showLAddOn') {
          // Multiple add-ons selection
          lensAddOnPrice += parseInt(price);
          $(".addOnData").text(data);
          //$('#' + option).toggle().parent().next('li').toggle().find('ol').toggle('fast');
          steps = steps.nextAll(':first').addClass('current');

        }

        updatePrice();



//      }
    });
  });


  /*Show option's inner content*/


  $('.questions li .toggle-btn').click(function() {
    /*------ toggles display field for ol tag on select ------*/
    $(this).parent().find('ol').toggle("fast");

  });

  function updatePrice() {
    var total = framePrice + lenStylePrice + progressivePrice + lensMaterialPrice + lensAddOnPrice;
    //    console.log(total);
    $("#total").text(total);
  }


  // Moves progress bar to next
  //
  // jQuery.each(steps, function(i) {
  //   if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
  //     $(steps[i]).addClass('current');
  //     $(steps[i - 1]).removeClass('current').addClass('done');
  //     return false;
  //   }
  //
  // })
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
