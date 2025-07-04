// DOM Manipulation

  

//chnaging css (Camel Case used in js-css unlike normal css eg: font-size in css is fontSize in js)
const listItems = document.querySelectorAll(".list-items");
listItems.forEach(li => {
    li.style.color = "black";
});


//mainpulating classes and adding new elements
const li = document.createElement("li");
li.textContent = "Doraemon";

const ul = document.querySelector('ul');
ul.append(li);

li.setAttribute("class", "list-items");
li.removeAttribute("class");

li.classList.add("list-items");
li.classList.remove("list-items");

// removing elements
li.remove()

///