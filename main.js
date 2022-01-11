// get elements
const questions = document.querySelectorAll('.question');

// Toggle answer function is called when user click on question
function toggleAnswer(e) {
  // add style to question chidren (span) when clicked
  const questionSpans = e.currentTarget.querySelectorAll('span');
  questionSpans.forEach(spanElement => toggleActive(spanElement));

  // toggle answer when question element clicked
  const listItem = e.currentTarget.parentNode;
  const answer = listItem.querySelector('.answer');
  toggleActive(answer);
}

// toggle .active class for a certain element
function toggleActive(element) {
  try {
    element.classList.toggle('active');
  } catch (error) {
    console.log('There is no such element!');
  }
}

// add click event listener on each questions
questions.forEach(question => question.addEventListener('click', toggleAnswer));
