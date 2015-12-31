
// banner
$(function() {
    $('#banner-marquee-box').marquee({
      auto: false,
      interval: 5000,
      speed: 500,
      showNum: 1,
      stepLen: 1,
      prevElement: $('#banner-next'),
      nextElement: $('#banner-prev')
    });
  });
$(function() {
        $('#slider-marquee').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 4,
            stepLen: 4,
            prevElement: $('#slider-next'),
            nextElement: $('#slider-prev')
        });
    });