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
      var lensAddOns = new Object();

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
          } else {
            price = 0;
          }

          /*  Will turn to function to reduce redundancy */
          /*  showFrames option */
          if (option == 'showFrames') {
            framePrice = parseInt(price);
            $(".frameData").text(data);
            $('#' + option).toggle('fast');
            $('.lensStyleLI').show('fast').children().show('fast');
            //$('#fType').css("opacity",".5");
            /*  showLStyle option */
          } else if (option == 'showLStyle') {
            lenStylePrice = parseInt(price);
            $(".lensData").text(data);
            if (data == "Progressive") {
              $('.progData').parent().toggle();
              $('#' + option).toggle('fast');
              $('.progLI').show('fast').children().show('fast');
            } else {
              $('#' + option).toggle('fast');
              $('.lensMatLI').show('fast').children().show('fast');
            }
            /*  showPLT option */
          } else if (option == 'showPLT') {
            progressivePrice = parseInt(price);
            $(".progData").text(data);
            $('#' + option).toggle('fast');
            $('.lensMatLI').show('fast').children().show('fast');
              /*  showLMaterial option */
          } else if (option == 'showLMaterial') {
            lensMaterialPrice = parseInt(price);
            $(".materialData").text(data);
            $('#' + option).toggle('fast');
            $('.lensAddLI').show('fast').children().show('fast');
            /*  showLAddOn option */
          } else if (option == 'showLAddOn') {
            // Multiple add-ons selection

            lensAddOnPrice += parseInt(price);
            $(".addOnData").text(data);
          }

          /* If i wanna add a  breadcrumb this would help
          --------------------------------------------------------------
          steps.after("<div class='step current' >" + data + " </div>");
          steps = steps.nextAll(':first').addClass('current');
          */
          updatePrice();

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
    })
