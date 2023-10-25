// WPROWADZENIE

// $(document).ready(function () {
//     alert('hello world!');
// });

// PODSTAWOWA SKŁADNIA

// function powitanie() {
//   alert('powitanie!');
// }

// const obj = jQuery(document);
// obj.ready(powitanie);

// $(document).ready(function () {
//   alert('powitanie 2');
// });

// OBSŁUGA ZDARZENIA CLICK

// $(function () {
//   $('li').click(function () {
//     alert('Witaj Li ze skryptu!');
//   });
// });

// INNE ZDARZENIA OBSŁUGI MYSZY

// $(function () {
//   $('div')
//     .mouseover(function () {
//       console.log('DIV najechany myszą XD');
//     })
//     .mouseout(function () {
//       console.log('mysz opuściła DIV');
//     })
//     .mousemove(function () {
//       console.log('ruch myszą na DIVie');
//     })
//     .click(function () {
//       console.log('klik myszą na DIVie');
//     })
//     .mousedown(function () {
//       console.log('naciśnięcie klawisza myszy na DIVie');
//     })
//     .mouseup(function () {
//       console.log('zwolnienie klawisza myszy na DIVie');
//     });
// });

// FUNKCJA CSS

// $(function () {
//   $('div.css-fun')
//     .mouseover(function () {
//       //   $(this).css('background', 'black');
//       $(this).css('background', $('p').css('color'));
//     })
//     .mouseout(function () {
//       $(this).css('background', 'red');
//     });
// });

// UKRYWANIE I POKAZYWANIE ELEMENTÓW NA STRONIE

// $(function () {
//   $('#recenzja1').show();
//   $('#menu li').css('background', 'white');
//   $('#tab1').css('background', 'yellow');

//   $('#tab1').click(function () {
//     $('#recenzje div').hide(); //.toggle();
//     $('#menu li').css('background', 'white');
//     $(this).css('background', 'yellow');
//   });

//   $('#tab2').click(function () {
//     $('#recenzje div').hide();
//     $('#recenzja2').show();
//     $('#menu li').css('background', 'white');
//     $(this).css('background', 'yellow');
//   });

//   $('#tab3').click(function () {
//     $('#recenzje div').hide();
//     $('#recenzja3').show();
//     $('#menu li').css('background', 'white');
//     $(this).css('background', 'yellow');
//   });
// });

// TWORZENIE I USUWANIE ELEMENTÓW DRZEWA DOM

// $(function () {
//   $('p.dom-p').prepend('przed znacznikiem p').append('po znaczniku');
//   $('<strong> pogrubiony tekst po znaczniku p</strong>').appendTo('p.dom-p');

//   $('p.dom-p').before('<div></div>').after('<strong></strong>');
//   $('<p></p>').insertBefore('p.dom-p');

//   $('p.dom-p').wrap('<div></div>');
//   $('p.dom-p').wrapInner('<span></span>');
//   $('span').remove();
// });

// GALERIA Z POPUPEM
