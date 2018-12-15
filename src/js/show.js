jQuery(document).ready(function() {

  // Summary Updates
  $(function() {
    $('.lensImg li .optionContainer').on('click', function() {
      $(this).parent().addClass('lensImgSelect').siblings().removeClass('lensImgSelect');

      var data = $('.lensImgSelect .picText').text();
      var total = parseInt($('#total').text());
      var price = $(".lensImgSelect .optionPrice").text();
      price = price.replace(/\D/g,'');
      if(!price){
        price = 0;
      }
      var total2 = total + parseInt(price);
      console.log(total2);
      $(".frameData").text(data);
      $("#total").text(total2);

    });
  });


  /*Nav bar */
  var showLStyle = jQuery("#showLStyle");
  var fType = jQuery("#fType");
  var lStyle = jQuery("#lStyle");
  var steps = jQuery(".step");
  var form = $('#sign-form');
  fType.click(function() {
    $("#showFrames").toggle("fast");
  });
  lStyle.click(function() {

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
      if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
        jQuery(steps[i]).addClass('current');
        jQuery(steps[i - 1]).removeClass('current').addClass('done');
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
