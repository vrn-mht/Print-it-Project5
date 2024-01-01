const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Les variables globales //
const dots = document.querySelector(".dots");
const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left")
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector('#banner > p');	
const cheminImg = './assets/images/slideshow/';																								
let index = 0
	
/// Affichage des dots ///
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement ("div");
		dot.classList.add("dot")
		dots.appendChild(dot)	
		/// Pour la dot selectionée ///
		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}
}
displayDots();

// Affichage au click droit

function clickRight() {
	rightArrow.addEventListener("click",()=>{
		const arrayDots = document.querySelectorAll(".dots .dot")
		arrayDots[index].classList.remove("dot_selected")
		index++;
		console.log(arrayDots);
		if (index > slides.length -1) {
			index = 0
		}
		arrayDots[index].classList.add("dot_selected")
		img.src = cheminImg + slides[index].image; // Ajoutez les noms des sous-dossiers ici
		tagLine.innerHTML = slides[index].tagLine;
	});
}
clickRight();

// Affichage click gauche

function clickLeft() {
	leftArrow.addEventListener("click",()=>{
		const arrayDots = document.querySelectorAll(".dots .dot")
		arrayDots[index].classList.remove("dot_selected")
		index--;
		console.log(arrayDots);
		if (index < 0) {
			index = slides.length -1
		}
		arrayDots[index].classList.add("dot_selected")
		img.src = cheminImg + slides[index].image; // Ajoutez les noms des sous-dossiers ici
		tagLine.innerHTML = slides[index].tagLine;
	});
}
clickLeft();
