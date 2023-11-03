console.log('Kompendium wiedzy o jQuery - mini kurs 2021');
console.log($);

// $('document').ready(() => {
//   $('p').text('Hello World!');
// }); // script in head

$('p:first').text('Hello jQuery!');

// $('body').css('margin', 0).css('min-height', '100vh');
$('body').css({
  margin: 0,
  minHeight: '100vh',
  'background-color': 'black',
  color: 'white',
});

// $('p').css('color', 'red');
$('p:first').css('color', 'red');
// $('p:last').css('color', 'red');
// $('p:even').css('color', 'red');
// $('p:odd').css('color', 'red');
// $('p:gt(5)').css('color', 'red');
// $('p:lt(5)').css('color', 'red');
// $('p:eq(5)').css('color', 'red');
// $('p:not(.example-class)').css('color', 'red');
// $('p[data-example]').css('color', 'red');
// $('p[data-example=example2]').css('color', 'red');
// $('p[data-example^=exam]').css('color', 'red');
// $('p:contains("lorem")').css('color', 'red');

$('div.animation').css({
  // position: 'fixed',
  bottom: 0,
  left: 0,
  width: 75,
  height: 75,
  backgroundColor: 'yellow',
});
//   .animate(
//     {
//       left: 500,
//     },
//     1000
//   )
//   .animate(
//     {
//       bottom: 200,
//     },
//     2000
//   )
//   .animate(
//     {
//       width: 150,
//       height: 150,
//     },
//     500
//   )
//   .animate(
//     {
//       bottom: 0,
//       left: 0,
//       width: 100,
//       height: 100,
//     },
//     3000
//   );

$('button#add-class').click(() => {
  $('div.animation').addClass('border');
});

$('button#remove-class').click(() => {
  $('div.animation').removeClass('border');
});

$('button#toggle-class').click(() => {
  $('div.animation').toggleClass('border');
});

$('button#hide').click(() => {
  $('div.animation').hide();
});

$('button#show').click(() => {
  $('div.animation').show();
});

$('button#slide-up').click(() => {
  $('div.animation').slideUp(500);
});

$('button#slide-down').click(() => {
  $('div.animation').slideDown(500);
});

$('button#fade-in').click(() => {
  $('div.animation').fadeIn(500);
});

$('button#fade-out').click(() => {
  $('div.animation').fadeOut(500);
});

$('button#fade-to').click(() => {
  $('div.animation').fadeTo(500, 0.3);
});

// $('div.animation').text('Hello');
// $('div.animation').html('<p style="color: yellow;">Hello</p>');
// $('div.animation')
//   .append('<p style="color: black;">Hello</p>')
//   .prepend('<p style="color: red;">Hello</p>');

// $('button#toggle-class').appendTo('div.animation');

// $('div.animation').prepend('<div style="color: red;">Blablabla</div>');
$('<p style="color: red;">Buttons:</p>').insertBefore('button:first');

$('div.animation').wrap('<div class="wrapper"></div>');
// $('button').wrapAll('<div class="wrapper"></div>');

// $('div.animation').remove();
$('button#fade-to').attr('title', 'button title');
// $('button#fade-to').removeAttr('title');

const callbackClick = () => console.log('KLIK');

$('div.animation').on('click', callbackClick);
// $('div.animation').off('click', callbackClick);
$('div.animation').on('mouseover', (event) =>
  $(event.target).css('background-color', 'red')
);
$('div.animation').on('mouseleave', (event) =>
  $(event.target).css('background-color', 'yellow')
);

$('article:first')
  .children()
  .each((index, element) => console.log('each: ', index, element));
