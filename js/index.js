// const letters = document.querySelectorAll('.letter');
// const transition = document.getElementById('page-transition');

// letters.forEach((letter, i) => {
//   setTimeout(() => {
//     letter.classList.add('show');
//   }, i * 280);
// });

// letters.forEach(letter => {
//   letter.addEventListener('click', () => {
//     transition.classList.add('active');

//     setTimeout(() => {
//       window.location.href = 'hub.html';
//     }, 800);
//   });
// });



const letters = document.querySelectorAll('.letter');
const transition = document.getElementById('page-transition');

let navigating = false; // 🔒 added

letters.forEach((letter, i) => {
  setTimeout(() => {
    letter.classList.add('show');
  }, i * 280);
});

letters.forEach(letter => {
  letter.addEventListener('click', () => {
    if (navigating) return; // 🔒 prevent double click
    navigating = true;

    transition.classList.add('active');

    setTimeout(() => {
      window.location.href = 'hub.html';
    }, 800);
  });
});


window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    const transition = document.getElementById('page-transition');
    if (transition) {
      transition.classList.remove('active');
    }
  }
});
