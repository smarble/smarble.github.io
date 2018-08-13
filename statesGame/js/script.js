// STATES GAME REDO
// WRAP EVERYTHING IN DOCUMENT READY FUNCTION
$(document).ready(function(){
  console.log("javascript loaded successfully")
  $(".revealedCapital").hide();

  $(".california").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameCalifornia").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealSacramento").fadeIn(0);

    $(".revealSacramento").delay(1000).fadeOut(0);
    $(".stateNameCalifornia").delay(1000).fadeIn(0);
    });

  $(".alaska").click(function() {
    console.log("click")
    $(".stateNameAlaska").fadeOut(0);
    $(".revealJuneau").fadeIn(0);

    $(".revealJuneau").delay(1000).fadeOut(0);
    $(".stateNameAlaska").delay(1000).fadeIn(0);
  });

  $(".colorado").click(function() {
    console.log("click")
    $(".stateNameColorado").fadeOut(0);
    $(".revealDenver").fadeIn(0);

    $(".revealDenver").delay(1000).fadeOut(0);
    $(".stateNameColorado").delay(1000).fadeIn(0);
  });

  $(".arizona").click(function() {
    console.log("click")
    $(".stateNameArizona").fadeOut(0);
    $(".revealPhoenix").fadeIn(0);

    $(".revealPhoenix").delay(1000).fadeOut(0);
    $(".stateNameArizona").delay(1000).fadeIn(0);
  });

  $(".arkansas").click(function() {
    console.log("click")
    $(".stateNameArkansas").fadeOut(0);
    $(".revealLittleRock").fadeIn(0);

    $(".revealLittleRock").delay(1000).fadeOut(0);
    $(".stateNameArkansas").delay(1000).fadeIn(0);
  });

  $(".alabama").click(function() {
    console.log("click")
    $(".stateNameAlabama").fadeOut(0);
    $(".revealMontgomery").fadeIn(0);

    $(".revealMontgomery").delay(1000).fadeOut(0);
    $(".stateNameAlabama").delay(1000).fadeIn(0);
  });

// end of document ready  function
});
