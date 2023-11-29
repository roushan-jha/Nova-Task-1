const quote = [{
    Quote: "\"Shoot for the moon. Even if you miss it you will land among the stars.\"",
    Author: "-Les Brown"
},
{
    Quote: "“The moon is the first milestone on the road to the stars.”",
    Author: "-Arthur C. Clarke"
},
{
    Quote: "\"Always remember we are under the same sky, looking at the same moon.\"",
    Author: "-Maxine Lee"
},
{
    Quote: "“Like the moon, come out from behind the clouds! Shine.”",
    Author: "-Gautama Buddha"
},
{
    Quote:"“The moon, like a flower in heaven’s high bower, With silent delight sits and smiles on the night.”",
    Author:"-William Blake"
},
{
    Quote:"“I like to think that the moon is there, even if I am not looking at it.”",
    Author:"-Albert Einstein"
}
];
const para_1 = document.getElementById("para-1");
const para_2 = document.getElementById("para-2");
const quote_s = document.querySelector(".quote");

quote_s.addEventListener("click", function() {
    const content = quote[randomQuote()];
    const text_1 = content.Quote;
    const text_2 = content.Author;

    para_1.textContent = text_1;
    para_2.textContent = text_2;
});

function randomQuote() {
    return Math.floor(Math.random()*quote.length);;
}