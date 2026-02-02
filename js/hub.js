// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//   localStorage.removeItem('openedLetters');
// }


// const quadrants = document.querySelectorAll('.quadrant');
// const finalBtn = document.querySelector('.final');
// const transition = document.getElementById('page-transition');

// let opened = JSON.parse(localStorage.getItem('openedLetters')) || [];

// quadrants.forEach(q => {
//   const id = q.dataset.id;
//   const img = q.querySelector('.envelope');

//   if (opened.includes(id)) {
//     img.classList.add('read');
//     img.src = 'assets/envelope-black.png';
//   }

//     q.addEventListener('click', () => {
//     transition.classList.add('active');
//     setTimeout(() => {
//         window.location.href = `letters/letter${id}.html`;
//     }, 800);
//     });

// });

// if (opened.length === 4) {
//   finalBtn.classList.remove('hidden');
// }

// window.addEventListener('load', () => {
//   transition.classList.add('active');
//   setTimeout(() => transition.classList.remove('active'), 100);
// });


// Reset progress only when coming fresh from index page
if (document.referrer.includes('index.html')) {
  localStorage.removeItem('openedLetters');
}

const quadrants = document.querySelectorAll('.quadrant');
const finalBtn = document.querySelector('.final');
const transition = document.getElementById('page-transition');

let opened = JSON.parse(localStorage.getItem('openedLetters')) || [];
let navigating = false; // 🔒 added

quadrants.forEach(q => {
  const id = q.dataset.id;
  const img = q.querySelector('.envelope');

  if (opened.includes(id)) {
    img.classList.add('read');
    img.src = 'assets/envelope-black.png';
  }

  q.addEventListener('click', () => {
    if (navigating) return; // 🔒 prevent double click
    navigating = true;

    transition.classList.add('active');
    setTimeout(() => {
      window.location.href = `letters/letter${id}.html`;
    }, 800);
  });
});

window.addEventListener('load', () => {
  transition.classList.add('active');
  setTimeout(() => transition.classList.remove('active'), 100);

  let opened = JSON.parse(localStorage.getItem('openedLetters')) || [];
  if (opened.length === 4) {
    finalBtn.classList.remove('hidden');
  }
});


window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    const transition = document.getElementById('page-transition');
    if (transition) {
      transition.classList.remove('active');
    }
  }
});
