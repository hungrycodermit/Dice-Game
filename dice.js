var player1 = Math.random() * 6;
player1 = Math.floor(player1)+1;

var player2 = Math.random() * 6;
player2 = Math.floor(player2)+1;

player1DiceGen();
player2DiceGen();
whoWins();

function whoWins(){
	if(player1===player2){
	document.querySelector(".container h1").textContent = "Its draw";
}
	else if(player1>player2){
	document.querySelector(".container h1").textContent = "player1 wins!🚩";
}
	else{
	document.querySelector(".container h1").textContent = "player2 wins!🚩";
}
}

function player1DiceGen(){
	switch(player1){
		case 1:
		document.querySelector(".player1 img").setAttribute("src", "images/dice1.png");
		break;

		case 2:
		document.querySelector(".player1 img").setAttribute("src", "images/dice2.png");
		break;

		case 3:
		document.querySelector(".player1 img").setAttribute("src", "images/dice3.png");
		break;

		case 4:
		document.querySelector(".player1 img").setAttribute("src", "images/dice4.png");
		break;

		case 5:
		document.querySelector(".player1 img").setAttribute("src", "images/dice5.png");
		break;

		case 6:
		document.querySelector(".player1 img").setAttribute("src", "images/dice6.png");
		break;
	}

}

function player2DiceGen(){
	switch(player2){
		case 1:
		document.querySelector(".player2 img").setAttribute("src", "images/dice1.png");
		break;

		case 2:
		document.querySelector(".player2 img").setAttribute("src", "images/dice2.png");
		break;

		case 3:
		document.querySelector(".player2 img").setAttribute("src", "images/dice3.png");
		break;

		case 4:
		document.querySelector(".player2 img").setAttribute("src", "images/dice4.png");
		break;

		case 5:
		document.querySelector(".player2 img").setAttribute("src", "images/dice5.png");
		break;

		case 6:
		document.querySelector(".player2 img").setAttribute("src", "images/dice6.png");
		break;
	}

}