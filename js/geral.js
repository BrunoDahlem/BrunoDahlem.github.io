$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.burger').toggleClass('collapsed');
        $('.burger').attr('aria-expanded','true');
        $('.animated-icon3').toggleClass('open');
    });
  });