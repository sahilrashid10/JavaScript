    // 1
    document.querySelector("nav").firstElementChild.style.color = "red"; 
    // 2 — visually confirm by viewing page source; browser will auto-insert <tbody>
    
    // 3
        let newElem = document.createElement("div");
        newElem.innerHTML = `
            <p>Child 1</p>
            <p>Child 2</p>
            <p>Child 3</p>
        `
        /*
    Double quotes (") and single quotes (') cannot span multiple lines in JavaScript.
    JavaScript interprets the " as opening the string, and when it hits the next line — boom 💥 — it thinks it's a syntax error.
    */
        document.getElementById("dynamic-parent").appendChild(newElem);
        newElem.lastElementChild.style.color = "blue"; // Change color of last child to blue
        newElem.firstElementChild.style.color = "green"; // Change color of first child to green


    // 4
        document.querySelectorAll("li").forEach((li)=>{
            li.style.color = "green";
        })
    // 5 — correct answer is explained in HTML