const printInConsole = (txt, number) => {
  for (let i = number; i >= 0; i--) {
    console.log(txt, i);
  }
};

printInConsole('przykład: ', 1000);

document.addEventListener('click', () => {
  console.log('click');
});

setInterval(() => printInConsole('next przykład: ', 10000), 5000);
