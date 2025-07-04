const authors = [
    "Albert Einstein",
    "Maya Angelou",
    "Oscar Wilde",
    "Steve Jobs",
    "Nelson Mandela",
    "Confucius",
    "Helen Keller",
    "Walt Disney",
    "Eleanor Roosevelt"
];

const quotes = [
    "Life is like riding a bicycle. To keep your balance you must keep moving.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "Be yourself; everyone else is already taken.",
    "The only way to do great work is to love what you do.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Keep your face to the sunshine and you cannot see a shadow.",
    "The way to get started is to quit talking and begin doing.",
    "The future belongs to those who believe in the beauty of their dreams."
];

let index = 0;

document.querySelector('.btn').addEventListener('click', ()=>{
    const curQuote = document.querySelector('.quote');
    const curAuthor = document.querySelector('.author');

    curQuote.innerText = quotes[index];
    curAuthor.innerText = authors[index];
    index = (index + 1 ) % quotes.length;
    
});
