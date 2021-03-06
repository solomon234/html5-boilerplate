jQuery(document).ready(function() {
  // Inspiration - https://codepen.io/jdniki/pen/rewxPo
  var rxOption = false;
  var framePrice = 0;
  var lenStylePrice = 0;
  var progressivePrice = 0;
  var lensMaterialPrice = 0;
  var lensAddOnARPrice = 0;
  var lensAddOnTSPrice = 0;
  var counter = 1;
  var steps = $(".step");
  var form = $('#sign-form');
  var lensAddOns = new Object();


  $(function() {

    //When two PD's are checked displays prescriptionospd
    $('#monocularPD').change(function() {
      $('#ospd').toggle();
      $('#ospd').val($('#odpd').val());
    });

    //Confirm valid prescription
    $('.rxTable .confirmBtn').on('click', function() {

      switch ($(this).find('p').text()) {
        case 'Back':
          $('.question2').toggle('fast');
          $('.rxTable').toggle('fast');
          break;
        case 'Clear':
          $('#odsph').val('');
          $('#odcyl').val('');
          $('#odaxi').val('');
          $('#odadd').val('');
          $('#ossph').val('');
          $('#oscyl').val('');
          $('#osaxi').val('');
          $('#osadd').val('');
          $('#ospd').val('');
          $('#odpd').val('');
          break;
        case 'Confirm':
          if ($("#odsph").val() == '' || $("#ossph").val() == '') {
            alert("Prescription not valid");
          } else {
            $('#promptDialog').removeAttr('id');
            $('#blurContainer').removeAttr('id');
            $('.rxTable').toggle();
            break;
          }
        default:
          break;
          // code block
      }
    });

    //When btnEquals is clicked the opposite row will be duplicated
    $('.btnEquals').on('click', function() {
      if ($(this).hasClass('eqOS')) {
        $('#odsph').val($('#ossph').val());
        $('#odcyl').val($('#oscyl').val());
        $('#odaxi').val($('#osaxi').val());
        $('#odadd').val($('#osadd').val());
      } else {
        $('#ossph').val($('#odsph').val());
        $('#oscyl').val($('#odcyl').val());
        $('#osaxi').val($('#odaxi').val());
        $('#osadd').val($('#odadd').val());
      }


    });

    $('.lensImg li .optionContainer').on('click', function() {
      //  if (!$(this).parent().hasClass('lensImgSelect')) {
      /* Read in id tag name*/
      var option = $(this).closest("ol").prop("id");

      /*       One option is selected / all other options are unselected           */
      $(this).closest('li').addClass('lensImgSelect').siblings().removeClass('lensImgSelect');

      /*       Declaring Variables to calcuate data               */

      var data = $(this).find('.picText').text();
      var price = $(this).find('.optionPrice');

      /* price convert */
      if (price.length) {
        price = price.text().replace(/\D/g, '');
      } else if (price.length && option == 'showLAddOn' || option == 'showLAddOn1' || option == 'showLAddOn2') {
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
        } else if (data != "Progressive" && $('.progData').parent().css('display') == 'block'){
            $('.progData').parent().toggle();
            progressivePrice = 0;
            $('.progLI').hide('fast').children().hide('fast');
            $('#' + option).toggle('fast');
        }
        else {
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
        $('.lensAddLI').show('fast');
        $('#showLAddOn2').hide('fast');
        /*  showLAddOn option */
      } else if (option == 'showLAddOn1') {
        // Multiple add-ons selection
        lensAddOnARPrice = parseInt(price);
        $(".addOnData1").text(data);
        $('#showLAddOn1').hide('fast');
        $('#showLAddOn2').show('fast');

      } else if (option == 'showLAddOn2') {
        lensAddOnTSPrice = parseInt(price);
        $(".addOnData2").text(data);
        $('#showLAddOn2').hide('fast');
        $('.endMsg').show('fast');
      }

      updatePrice();

    });
  });

  /**/
  $('#promptDialog .question1 .confirmBtn').click(function() {
    if ($(this).find('p').text() == 'Yes') {
      $('.question2').toggle('fast');
      $('.question1').toggle('fast');
    } else {
      $('.question1').toggle();
      $('#promptDialog').removeAttr('id');
      $('#blurContainer').removeAttr('id');
    }
  });

  $('#promptDialog .question2 .confirmBtn').click(function() {
    if ($(this).find('p').text() == 'Yes') {
      $('.question2').toggle('fast');
      $('.rxTable').toggle('fast');
    } else {
      alert('Unfortunately we need you to get a rx then come back!');
    }
  });


  /*Show option's inner content*/
  $('.questions li .toggle-btn').click(function() {
    /*------ toggles display field for ol tag on select ------*/
    $(this).parent().find('ol').toggle("fast");

  });

  function updatePrice() {
    lensAddOnARPrice = isNaN(lensAddOnARPrice) ? 0 : lensAddOnARPrice;
    lensAddOnTSPrice = isNaN(lensAddOnTSPrice) ? 0 : lensAddOnTSPrice;

    var total = framePrice + lenStylePrice + progressivePrice + lensMaterialPrice + lensAddOnARPrice + lensAddOnTSPrice;

    $("#total").text(total);
  }
})
