$(function () {
  $('.zdjecie img')
    .mouseover(function () {
      let maly = $(this).attr('src');
      let duzy = maly.replace('small', 'big');

      $('#popup img').attr('src', duzy);
      $('#popup img').show();
    })
    .mouseout(function () {
      $('#popup img').hide();
    })
    .mousemove(function (e) {
      $('#popup img').css('left', e.originalEvent.screenX - 300);
      $('#popup img').css('top', e.originalEvent.screenY - 300);
    });
});
