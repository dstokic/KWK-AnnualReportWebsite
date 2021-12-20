

/* For the note animation */
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('slide-in-animation');
    }
  });
});

observer.observe(document.querySelector('.message'));

/* For the left two images in mission */
const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('flip-in-ver-right');
    }
  });
});

observer1.observe(document.querySelector('.part1'));

/* For the left two images in mission */
const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('flip-in-ver-left');
    }
  });
});

observer2.observe(document.querySelector('.part2'));

/* Sliding first "infographic" in on scroll */
const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('slide-in-left');
    }
  });
});

observer3.observe(document.querySelector('.sec-one'));

/* Sliding second "infographic" in on scroll */
const observer4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('slide-in-right');
    }
  });
});

observer4.observe(document.querySelector('.sec-two'));

/* Sliding second "infographic" in on scroll */
const observer5 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('swirl-in-fwd');
    }
  });
});

observer5.observe(document.querySelector('.futureGroup'));
