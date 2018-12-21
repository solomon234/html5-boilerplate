jQuery(document).ready(function() {
  var baseTot = 0;
  var total = parseInt($('#total').text());
  $("#showFrames").toggle("fast");
  $("")
  // Summary Updates
  $(function() {
    $('.lensImg li .optionContainer').on('click', function() {
      $(this).parent().addClass('lensImgSelect').siblings().removeClass('lensImgSelect');
      var data = $('.lensImgSelect .picText').text();
      var total = parseInt($('#total').text());
      var price = $(".lensImgSelect .optionPrice");
      $(".frameData").text(data);

/*
      if(!price.length){
        if($(this).parent().hasClass('.addedPrice')){
          price = $(this).parent().hasClass('optionPrice addedPrice').text().replace(/\D/g, '');
          total = total + (price * -1);
          console.log(total);
        }
      }
*/
      if (!price.hasClass('addedPrice') && price.length) {
        price.addClass('addedPrice');

        price = price.text().replace(/\D/g, '');

        if (!price) {
          price = 0;
        }
        var total2 = total + parseInt(price);
        console.log(price + " " + total);

        $("#total").text(total2);
      }

    });
  });


  /*Nav bar */
  var showLStyle = $("#showLStyle");
  var fType = $("#fType");
  var lStyle = $("#lStyle");
  var steps = $(".step");
  var form = $('#sign-form');

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


  // Moves progress bar to next
  lStyle.bind("click", function() {
    showLStyle.toggle("fast");
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
