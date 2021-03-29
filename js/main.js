/*
	Array generate
	DOM selection
	addEventListener
	Create Element

*/

let quotes=[
	'"It always seems impossible until its done". <br> <span>-Nelson Mandela',
	'"Failure will never overtake me if my determination to succeed is strong enough." <br> <span>- Og Mandino',
	'"If you do not design your own life plan, chances are you will fall into someone elses plan. And guess what they have planned for you? Not much" <br> <span>-Jim Rohn',
	'"Start where you are. Use what you have. Do what you can." <br> <span>-Arthur Ashe', 
	'"The way to get started is to quit talking and begin doing." <br> <span>-Walt Disney',
	'"If life were predictable it would cease to be life, and be without flavor." <br> <span>-Eleanor Roosevelt',
	'"Life is what happens when you are busy making other plans." <br> <span>-John Lennon',
	'"Spread love everywhere you go. Let no one ever come to you without leaving happier." <br> <span>-Mother Teresa',
	'"When you reach the end of your rope, tie a knot in it and hang on." <br> <span>-Franklin D. Roosevelt',
	'"Always remember that you are absolutely unique. Just like everyone else." <br> <span>-Margaret Mead',
	'"Do not judge each day by the harvest you reap but by the seeds that you plant." <br> <span>-Robert Louis Stevenson',
	'"The future belongs to those who believe in the beauty of their dreams." <br> <span>-Eleanor Roosevelt',
	'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." <br> <span>-Helen Keller',
	'"It is during our darkest moments that we must focus to see the light." <br> <span>-Aristotle',
	'"Whoever is happy will make others happy too." <br> <span>-Anne Frank',
	'"When you reach the end of your rope, tie a knot in it and hang on." <br> <span>-Franklin D. Roosevelt <span>',
	'"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> <span>-Benjamin Franklin'
	]


const btn=document.querySelector("#btn");
const result=document.querySelector("#result");

btn.addEventListener('click', random_quotes);
window.onload = random_quotes;

function random_quotes(){
	let randomNum=Math.floor(Math.random()*quotes.length);
	result.innerHTML='';
	let elem=document.createElement("h3");
	elem.innerHTML=quotes[randomNum];
	result.appendChild(elem);
}
''
