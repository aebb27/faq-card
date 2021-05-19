const questions = document.querySelectorAll('.faq__questions');
questions.forEach((question) => {
	const btn = question.querySelector('.faq__questions--arrow');
	btn.addEventListener('click', () => {
		questions.forEach((otherQuestion) => {
			if (otherQuestion !== question) {
				otherQuestion.classList.remove('open');
			}
		});
		question.classList.toggle('open');
	});
});
