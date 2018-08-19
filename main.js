let names = [
	"molly", "tricia",
	"carlie", "leslie",
	"kristen", "lairn",
	"brylee", "becca",
	"steph", "rachel",
	"amy", "lindsey",
	"catie", "erin",
	"jojo", "ostin",
	"zhue", "mary",
	"kristen", "shelby",
	"laurie", "livorio",
	"shanley", "mary",
	"kyle","patrick", "amanda","ayumi"
];
let colors = ['#71abdd','#6bcade','#82ccb5','#b6d884','#fff68f','#fdcd79','#f9b489','#f497aa','#dd86b9','#9977b4'];
document.getElementById('names').innerText = 
	names.sort().join('') + names.sort().join('') + names.sort().join('') 
	+ names.sort().join('') + names.sort().join('')+ names.sort().join('') 
	+ names.sort().join('') + names.sort().join('') + names.sort().join('')
	+ names.sort().join('') + names.sort().join('') + names.sort().join('') 
	+ names.sort().join('') + names.sort().join('') + names.sort().join('')
	+ names.sort().join('') + names.sort().join('') + names.sort().join('') 
	+ names.sort().join('') + names.sort().join('');

colors.forEach( color => document.getElementById('background').innerHTML += `<div class="rainbow" id="${color}" style="background-color:${color};"></div>` );

