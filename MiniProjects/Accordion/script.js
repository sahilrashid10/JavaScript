const contents = document.querySelectorAll('.content');

contents.forEach(content => {
    const question = content.querySelector('.question');
    question.addEventListener('click', () => {
        content.classList.toggle('active');
    });
});