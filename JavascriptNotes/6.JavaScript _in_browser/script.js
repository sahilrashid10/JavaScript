// 1
let age = prompt("Enter your age:");
age = Number(age);
if (age >= 18) {
    alert("You can drive!");
} else {
    alert("You cannot drive.");
}

// 2
let repeat = confirm("Do you want to check again?");
if (repeat) {
    age = prompt("Enter your age:");
    age = Number(age);
    if (age >= 18) {
        alert("You can drive!");
    } else {
        alert("You cannot drive.");
    }
}

// 3
if (age < 0) {
    console.error("Age cannot be negative.");
}

// 4
let num = prompt("Enter a number:");
if (Number(num) > 4) {
    location.href = "https://www.google.com";
}

// 5
let color = prompt("Enter a background color (e.g., yellow, red, blue):");
document.body.style.backgroundColor = color;
