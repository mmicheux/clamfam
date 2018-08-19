

// class ClamsContainer extends HTMLElement {
// 	calljsonFile(){
// 		return new Promise((resolve, reject) => {
// 			var xhr = new XMLHttpRequest();
// 			xhr.open('GET', '/clams.json');
// 			xhr.onload = function() {
// 				if(xhr.status === 200){
// 					resolve(xhr.response);
// 				} else {
// 					reject('Request failed.  Returned status of ' + xhr.status);
// 				}
// 			};
// 			xhr.send();
// 		});

// 	}
// 	getClamsInfo(){
// 		this.calljsonFile()
// 			.then( (response) => this.createCard(JSON.parse(response)) )
// 			.catch( (reason) => console.log(reason) );
// 	}
// 	connectedCallback(){
// 		this.getClamsInfo();
// 		// clams.forEach(clam => {
// 		// 	let clamCard = document.createElement('clam-card');
// 		// 	clamCard.innerHTML = ClamCard.card( ClamCard.clamJSON(name) );
// 		// 	this.appendChild(clamCard);
// 		// })
// 	}
// 	createCard(response){
// 		console.log(response);
// 		let clams = response;

// 		clams.forEach(clam => {
// 			let clamCard = document.createElement('clam-card');
// 			clamCard.innerHTML = ClamCard.card( clam );
// 			this.appendChild(clamCard);
// 		});
// 	}
// }

// class ClamCard extends HTMLElement{
// 	connectedCallback(){

// 	}
// 	static card(clam){
// 		return `
// 		<div class="card_inner">
// 		<div class="card_photo" style="background-image:url('http://placekitten.com/100/200');"></div>
// 		<div class="card_content">
// 			<div class="name">${clam.name}</div>
// 			<div class="pronouns">${clam.pronouns}</div>
// 			<div class="stonewall">${clam.stonewallSince}</div>
// 			<div class="superpower">${clam.superpower}</div>
// 			<div class="weakness">${clam.weakness}</div>
// 			<div class="guilty-pleasure">${clam.guiltyPleasure}</div>
// 			<div class="fun-fact">${clam.funFact}</div>
// 		</div>
// 		</div>

// 		`;

// 	}
// }

// window.customElements.define('clams-container', ClamsContainer);
// window.customElements.define('clam-card', ClamCard);