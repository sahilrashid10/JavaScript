//Event listeners

// Event Liteners

const btn2 = document.querySelector('.b2');

// click
btn2.addEventListener('click', ()=>alert('yoo'));
// mouse over
const b3 = document.querySelector('.b3')
b3.addEventListener('mouseover', ()=>{
    b3.style.backgroundColor = 'green';
})
b3.addEventListener('mouseout', ()=>{
    b3.style.backgroundColor = '';
})