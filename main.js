let names = [
	"molly", "tricia",
	"carlie", "leslie",
	"kristen", "lairn",
	"brylee", "becca",
	"steph", "rachel",
	"amy", "lindsey",
	"catie", "erin",
	"jojo", "ostin",
	"zhue", "drmary",
	"kristen", "shelby",
	"laurie", "livorio",
	"shanley", "mary",
	"traci"
];
let colors = ['#71abdd','#6bcade','#82ccb5','#b6d884','#fff68f','#fdcd79',
'#f9b489','#f497aa','#dd86b9','#9977b4'];
let canvasHeight = document.body.offsetHeight;


let namesDiv = document.getElementById('names');
namesDiv.innerText = names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('')
					+ names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('')
					+ names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('') 
					+ names.sort().join('');

let canvases = colors.forEach(color => {
	let colorEl = document.createElement('div');
	colorEl.setAttribute('id', color);
	colorEl.classList.add('rainbow');
	document.getElementById('background').appendChild(colorEl);
	// colorEl.style.height = canvasHeight / colors.length + "px";
	colorEl.style.backgroundColor = color;
});
