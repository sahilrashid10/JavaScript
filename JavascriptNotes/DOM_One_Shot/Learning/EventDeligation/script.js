// It allows users to apply single event listener to the parent which can be
// used for all it's present and future descendents


document.querySelector('#menu').addEventListener('click', (e)=>{
    const target = e.target;
    if(target.matches('div'))
        target.style.backgroundColor = 'green';
    console.log(target.getAttribute('class') + ' is typed.');
})