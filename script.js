document.getElementById('enterQuan').addEventListener("click", setQuanOfPlayers);
document.getElementById('setNames').addEventListener("click", setNamesInMemo);
document.getElementById('wyzwanie').addEventListener("click", wyzwanie);
document.getElementById('pytanie').addEventListener("click", pytanie);
document.getElementById('zalicz').addEventListener("click", zalicz);
document.getElementById('niezalicz').addEventListener("click", niezalicz);

let QPlayer = 0;
let PNames = [];
let PPlayers = [];
let draw = 0;

function displayPointsAndNames()
{
	let list=" ";
	for(let i=0; i<QPlayer; i++){
		list += "<p>" + (i+1) + ". " + PNames[i] + "  " + PPlayers[i] + " pkt." + "</p>";
	}
	playersList.innerHTML = list;
	console.log(list);
}

function setQuanOfPlayers()
{
	let quantityOfPlayers = document.getElementById('quantityOfPlayers').value;
	console.log("Ilosc graczy: " + quantityOfPlayers);

	if(quantityOfPlayers<2 || quantityOfPlayers>15){
		error.innerHTML = "<p>Ilość graczy nie może być większa niż 15 i mniejsza niż 2</p>";
		names.innerHTML = "";
		console.log("error");
		return 0;
	} 
	else error.innerHTML = ""; 
	console.log("ok");

	QPlayer = quantityOfPlayers;
	console.log("Ustawiono ilość graczy na: " + QPlayer);

	let komenda = "<p>Podaj imiona graczy</p>";
	for(let i=0; i<QPlayer; i++)
		komenda = komenda + "<p>Imię gracza nr"+(i+1)+": <input type='text' id='gracz"+i+"'></p>";
	names.innerHTML = komenda;
	document.getElementById('namesButton').style.display = "inline";
}

function setNamesInMemo()
{
	for(let i=0; i<QPlayer; i++){
		PNames[i] = document.getElementById('gracz'+i).value;
		PPlayers[i] = 0;
	}
	console.log("Imiona zostały ustawione!");
	displayPointsAndNames();
	document.getElementById('start').style.display = "none";
	document.getElementById('game').style.display = "inline";
	drawPlayer();
}

function drawPlayer()
{
	let text = "<p>Kolejka gracza: ";
	draw = Math.floor(Math.random()*QPlayer);
	playerTurn.innerHTML = text + "<b>" + PNames[draw] + "</b></p>";
	console.log(draw);
}

function wyzwanie()
{
	document.getElementById('PW').style.display = "inline";
	let drawWyzwanie = Math.floor(Math.random()*window.arrWyzwan.length);
	document.getElementById('buttons').style.display = "none";
	PW.innerHTML = window.arrWyzwan[drawWyzwanie];
	document.getElementById('buttonsDone').style.display = "inline";

	console.log(drawWyzwanie);
}

function pytanie()
{
	document.getElementById('PW').style.display = "inline";
	let drawPytanie = Math.floor(Math.random()*window.arrPytan.length);
	document.getElementById('buttons').style.display = "none";
	PW.innerHTML = window.arrPytan[drawPytanie];
	document.getElementById('buttonsDone').style.display = "inline";

	console.log(drawPytanie);
}

function zalicz()
{
	PPlayers[draw] = PPlayers[draw] + 1; 
	displayPointsAndNames();
	document.getElementById('buttonsDone').style.display = "none";
	document.getElementById('PW').style.display = "none";
	document.getElementById('buttons').style.display = "inline";
	drawPlayer();
}

function niezalicz()
{
	displayPointsAndNames();
	document.getElementById('buttonsDone').style.display = "none";
	document.getElementById('PW').style.display = "none";
	document.getElementById('buttons').style.display = "inline";
	drawPlayer();
}