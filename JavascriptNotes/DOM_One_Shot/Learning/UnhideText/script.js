const btn = document.querySelector('.unhide-btn')
const meaning = document.createElement('div');
meaning.innerText = `       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam obcaecati maxime ad commodi eaque nostrum
        esse, porro quas? Libero, quis! Vel eius aliquid asperiores. Laudantium earum illo hic voluptates id omnis
        repellendus, ex obcaecati? Reiciendis veniam ab porro neque quis, explicabo distinctio quidem saepe.        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam obcaecati maxime ad commodi eaque nostrum
        esse, porro quas? Libero, quis! Vel eius aliquid asperiores. Laudantium earum illo hic voluptates id omnis
        repellendus, ex obcaecati? Reiciendis veniam ab porro neque quis, explicabo distinctio quidem saepe.        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam obcaecati maxime ad commodi eaque nostrum
        esse, porro quas? Libero, quis! Vel eius aliquid asperiores. Laudantium earum illo hic voluptates id omnis
        repellendus, ex obcaecati? Reiciendis veniam ab porro neque quis, explicabo distinctio quidem saepe.`

meaning.style.paddingTop = '20px'
meaning.style.color = 'yellow'

let isVisible = false;
btn.addEventListener('click', ()=>{
    if(!isVisible){
        btn.appendChild(meaning);
        isVisible = true;
    }else{
        btn.removeChild(meaning);
        isVisible = false;
    }
});


