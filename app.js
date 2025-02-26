const menu = document.getElementById("menu");
const body = document.body;
const secMenu = document.querySelector(".secMenu");
const dialogPause = document.querySelector(".dialogPause");
const opacity = document.querySelector(".opacity");
const timerPara = document.querySelector(".chronoPointPlayer");
const divFooter = document.querySelector(".divFooter");
const imgCursor = document.querySelector(".imgCursor");
const spanPlayerTurn = document.querySelector(".spanPlayerTurn");
const divChrono = document.querySelector(".chronometre");
const joueur = document.querySelector(".chronoPlayerH2");
const winPlayer = document.querySelector(".winPlayer");
const spanWinPlayer = document.querySelector(".spanWinPlayer");
let scoreOne = document.querySelector(".scoreOne");
let scoreTwo = document.querySelector(".scoreTwo");
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let currentPlayer = 0;
let chronomètre = 15;
let colonneSelec = null;
let timer;

function startChrono() {
    clearInterval(timer); // Arrêtez l'ancien intervalle
    chronomètre = 15;
    timerPara.textContent = `${chronomètre}s`;

    // Redémarrez le chronomètre
    timer = setInterval(() => {
        if (chronomètre > 0) {
            chronomètre--;
            timerPara.textContent = `${chronomètre}s`;
        } else {
            startChrono();
            if (currentPlayer % 2 == 0) {
                imgCursor.src = "./assets/cursorYellow.svg";
                timerPara.style.color = "var(--black)";
                spanPlayerTurn.style.color = "var(--black)";
                divChrono.style.backgroundColor = "var(--player-two)";
                joueur.style.color = "var(--black)";

            } else {
                imgCursor.src = "./assets/cursorRed.svg";
                timerPara.style.color = "var(--white)";
                spanPlayerTurn.style.color = "var(--white)";
                divChrono.style.backgroundColor = "var(--player-one)";
                joueur.style.color = "var(--white)";
            }
            currentPlayer++;
        }
    }, 1000);
}

function createContainer(classContainer = "", idContainer = "", type) {
	const element = document.createElement(type);

	if (classContainer) element.classList.add(classContainer);
	if (idContainer) element.id = idContainer;
	return element;
}

function createText(classText = "", idText = "", texte = "", type) {
	const element = document.createElement(type);
	if (classText) element.classList.add(classText);
	if (idText) element.id = idText;
	element.textContent = texte;

	return element;
}

function createImg(classImg = "", idImg = "", src, alt) {
	const img = document.createElement("img");

	if (classImg) img.classList.add(classImg);
	if (idImg) img.id = idImg;
	img.src = src;
	img.alt = alt;

	return img;
}

function secPause() {
	const dialog = createContainer("dialogPause", "", "dialog");

	const h2 = createText("pauseH2", "", "PAUSE", "h2");
	dialog.appendChild(h2);

	const divBtnPause = createContainer("divBtnPause", "", "div");
	dialog.appendChild(divBtnPause);

	const btnContinue = createText("btnContinue", "", "CONTINUE GAME", "button");
	divBtnPause.appendChild(btnContinue);

	const btnRestart = createText("btnRestart", "", "RESTART", "button");
	divBtnPause.appendChild(btnRestart);

	const btnQuit = createText("btnQuit", "", "QUIT GAME", "button");
	divBtnPause.appendChild(btnQuit);

	body.appendChild(dialog);
}

function secRule() {
	// Création du section "secRule"
	const secRule = createContainer("secRule", "", "section");
	// Création de la div "cardRules"
	const cardRules = createContainer("cardRules", "", "div");

	// Création du titre h2 "RULES"
	const rulesH2 = createText("rulesH2", "", "RULES", "h2");

	// Ajout de h2 à cardRules
	cardRules.appendChild(rulesH2);

	// Création de hgroup pour l'objectif
	const hgroup = createContainer("", "", "hgroup");

	// Création de h3 pour l'objectif
	const objectiveH3 = createText("", "", "OBJECTIVE", "h3");

	// Création du paragraphe pour l'objectif
	const pObjectif = createText(
		"pObjectif",
		"",
		"Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).",
		"p"
	);

	// Ajout de h3 et p à hgroup
	hgroup.appendChild(objectiveH3);
	hgroup.appendChild(pObjectif);

	// Ajout de hgroup à cardRules
	cardRules.appendChild(hgroup);

	// Création de la div contenant "HOW TO PLAY"
	const divH3Ol = createContainer("divH3Ol", "", "div");

	// Création du h3 pour "HOW TO PLAY"
	const howToPlayH3 = createText("", "", "HOW TO PLAY", "p");

	// Création de la liste ordonnée (ol)
	const ol = createContainer("", "", "ol");

	// Création des éléments de la liste (li)
	const steps = [
		"Red goes first in the first game.",
		"Players must alternate turns, and only one disc can be dropped in each turn.",
		"The game ends when there is a 4-in-a-row or a stalemate.",
		"The starter of the previous game goes second on the next game.",
	];

	let index = 1;
	for (const step of steps) {
		const li = document.createElement("li");

		const spanLi = createText("spanLi", "", index, "span");
		spanLi.classList.add("spanLi");
		spanLi.textContent = index;

		li.appendChild(spanLi);
		li.appendChild(document.createTextNode(step));
		ol.appendChild(li);

		index++;
	}

	// Ajout du h3 et de la liste à divH3Ol
	divH3Ol.appendChild(howToPlayH3);
	divH3Ol.appendChild(ol);

	// Ajout de divH3Ol à cardRules
	cardRules.appendChild(divH3Ol);

	// Création du bouton check
	const checkButton = createText("check", "", "", "button");

	const checkImg = createImg("", "", "./assets/check.svg", "check");

	// Ajout de l'image au bouton
	checkButton.appendChild(checkImg);

	// Ajout du bouton à cardRules
	cardRules.appendChild(checkButton);

	// Ajout de cardRules à secRule
	secRule.appendChild(cardRules);

	// Ajout de secRule au body (ou à un autre élément de votre choix)
	body.appendChild(secRule);
}

function sectionMenu() {
	// Création de la section "secMenu"
	const secMenu = createContainer("secMenu", "", "section");

	// Création de la div "divTotalMenu"
	const divTotalMenu = createContainer("divTotalMenu", "", "div");

	// Création de l'image du logo de base
	const imgLogoBase = createImg(
		"imgLogoBase",
		"",
		"./assets/logoBase.svg",
		"logo de base"
	);

	// Ajout de l'image à divTotalMenu
	divTotalMenu.appendChild(imgLogoBase);

	// Création de la div "divBtnMenu" contenant les boutons
	const divBtnMenu = createContainer("divBtnMenu", "", "div");

	// Création du premier bouton "PLAY VS PLAYER"
	const btnPlay = createText("btnPlay", "", "PLAY VS PLAYER", "button");

	// Ajout de l'image à ce bouton
	const imgPlay = createImg(
		"",
		"",
		"./assets/player-vs-player.svg",
		"player vs player"
	);

	btnPlay.appendChild(imgPlay);

	// Ajout du bouton à divBtnMenu
	divBtnMenu.appendChild(btnPlay);

	// Création du deuxième bouton "GAME RULES"
	const btnRules = createText("btnRules", "", "GAME RULES", "button");

	// Ajout du bouton à divBtnMenu
	divBtnMenu.appendChild(btnRules);

	// Ajout de divBtnMenu à divTotalMenu
	divTotalMenu.appendChild(divBtnMenu);

	// Ajout de divTotalMenu à secMenu
	secMenu.appendChild(divTotalMenu);

	// Ajout de secMenu au body (ou à un autre élément de votre choix)
	body.appendChild(secMenu);
}

{/*
    <div class="winPlayer">
    <h2 class="winH2">PLAYER <span class="spanWinPlayer">1</span></h2>
    <p class="winP">WINS</p>
    <button class="btnReplay">PLAY AGAIN</button>
            </div>
            */}

function createVictoryBanner(nomDuJoueur) {
    const winPlayer = createContainer("winPlayer", "", "div");

    const winH2 = createText("winH2", "", "PLAYER", "h2")
    winPlayer.appendChild(winH2)

    const spanWinPlayer = createText("spanWinPlayer", "", "1", "span")
    winH2.appendChild(spanWinPlayer)

    const winP = createText("winP", "", "WINS", "p");
    winPlayer.appendChild(winP)

    const btnReplay = createText("btnReplay", "", "PLAY AGAIN", "button")
    winPlayer.appendChild(btnReplay)


    body.appendChild(winPlayer)
}

sectionMenu()

function startGame() {
    startChrono()
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    currentPlayer = 0;
    chronomètre = 15;
    colonneSelec = null;
    let grille = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ];
    let verifSecMenu = document.querySelector(".secMenu");

	verifSecMenu.style.display = "none";

    divFooter.style.display = "flex";
}

const btnRules = document.querySelector(".btnRules");
const btnPlay = document.querySelector(".btnPlay");

btnRules.addEventListener("click", () => {
	let verifSecRules = document.querySelector(".secRule");

	if (!verifSecRules) {
		secRule();
	} else {
		verifSecRules.style.display = "flex";
	}

	document.querySelector(".secMenu").style.display = "none";

	const btnCheck = document.querySelector(".check");

	btnCheck.addEventListener("click", () => {
		document.querySelector(".secRule").style.display = "none";
		document.querySelector(".secMenu").style.display = "flex";
	});
});

menu.addEventListener("click", () => {
    clearInterval(timer)
	let verifSecPause = document.querySelector(".dialogPause");

	if (!verifSecPause) {
		opacity.style.display = "flex";
		secPause();
	} else {
		verifSecPause.style.display = "flex";
		opacity.style.display = "flex";
	}
	const btnContinue = document.querySelector(".btnContinue");
	const btnRestart = document.querySelector(".btnRestart");
	const btnQuit = document.querySelector(".btnQuit");


	btnContinue.addEventListener("click", () => {
		document.querySelector(".dialogPause").remove();
		document.querySelector(".opacity").style.display = "none";
        timer = setInterval(() => {
            if (chronomètre > 0) {
                chronomètre--;
                timerPara.textContent = `${chronomètre}s`;
            } else {
                clearInterval(timer);
            }
        }, 1000);
	});

    btnRestart.addEventListener("click", () => {
		startGame();
        document.querySelector(".dialogPause").remove();
		document.querySelector(".opacity").style.display = "none";
	});

    btnQuit.addEventListener("click", () => {
		startGame();
        document.querySelector(".dialogPause").remove();
		document.querySelector(".opacity").style.display = "none";
	});
});

const grille = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
];

const grilleAvecGagnant1 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "X", "X", "X", "", "", ""],
];

const grilleAvecGagnant2 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant3 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "", "", "", ""],
	["", "X", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant4 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "O", "O", "", ""],
];

const grilleSansGagnant = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "X", "O", "", ""],
];

function checkWinner(grille) {
	// verifie les lignes
	for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (j <= grille[i].length - 4) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i][j + 1] == "X" &&
					grille[i][j + 2] == "X" &&
					grille[i][j + 3] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i][j + 1] == "O" &&
					grille[i][j + 2] == "O" &&
					grille[i][j + 3] == "O"
				) {
					return "O";
				}
			}
		}
	}
    // verifie les colonnes
    for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (i <= grille[i].length - 4) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i + 1][j] == "X" &&
					grille[i + 2][j] == "X" &&
					grille[i + 3][j] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i + 1][j] == "O" &&
					grille[i + 2][j] == "O" &&
					grille[i + 3][j] == "O"
				) {
					return "O";
				}
			}
		}
	}
// Vérifie la diagonale montante
for (let i = 3; i < grille.length; i++) {
    for (let j = 0; j < grille[i].length - 3; j++) {
        if (grille[i][j] !== "") {
            if (
                grille[i][j] !== "" &&
                grille[i][j] === "X" &&
                grille[i - 1][j + 1] === "X" &&
                grille[i - 2][j + 2] === "X" &&
                grille[i - 3][j + 3] === "X"
            ) {
                return "X";
            } else if (
                grille[i][j] !== "" &&
                grille[i][j] === "O" &&
                grille[i - 1][j + 1] === "O" &&
                grille[i - 2][j + 2] === "O" &&
                grille[i - 3][j + 3] === "O"
            ) {
                return "O";
            }
        }
    }
}

// Vérifie la diagonale descendante
for (let i = 0; i < grille.length - 3; i++) {
    for (let j = 0; j < grille[i].length - 3; j++) {
        if (i <= grille.length - 4 && j >= 3) {
            if (
                grille[i][j] !== "" &&
                grille[i][j] === "X" &&
                grille[i + 1][j + 1] === "X" &&
                grille[i + 2][j + 2] === "X" &&
                grille[i + 3][j + 3] === "X"
            ) {
                return "X";
            } else if (
                grille[i][j] !== "" &&
                grille[i][j] === "O" &&
                grille[i + 1][j + 1] === "O" &&
                grille[i + 2][j + 2] === "O" &&
                grille[i + 3][j + 3] === "O"
            ) {
                return "O";
            }
        }
    }
}
	return "null";
}

let resultat = "";
// resultat = checkWinner(grille);
// console.log(resultat);

// resultat = checkWinner(grilleAvecGagnant2); // retourne "X"
// console.log(resultat);

// resultat = checkWinner(grilleAvecGagnant3); // retourne "X"
// console.log(resultat);

// resultat = checkWinner(grilleAvecGagnant4); // retourne "O"
// console.log(resultat);

// resultat = checkWinner(grilleSansGagnant); // retourne ""
// console.log(resultat);



btnPlay.addEventListener("click", startGame)

const parent = document.querySelector(".divImgCursor");
const divGridColumn = document.querySelectorAll(".divGridColumn");
let y = 0;
const parentWidth = parent.offsetWidth;
const cursorWidth = imgCursor.offsetWidth;
const parentWidthInPercent = parentWidth / 100;
let gameOver = true;
function findPawnPosition(column, grid, e) {
    if (e.key == "ArrowLeft") {
        y -= 15;
        if (y < 0) {
            y = 0;
        }
    } else if (e.key == "ArrowRight") {
        y += 15;
        if (y > 100 - (cursorWidth / parentWidthInPercent)) {
            y = 100 - (cursorWidth / parentWidthInPercent);
        }
    }
    if (gameOver == true) {
        if (e.code == "Space") {
        e.preventDefault();
        const colIndex = Math.floor((y / 100) * divGridColumn.length); // en fonction de l'endroit où est le cursor, recuperer la colonne en dessous
        column = divGridColumn[colIndex].querySelectorAll('.imgBtnGrid'); // recuperer toutes les img
        for (let i = column.length - 1; i >= 0; i--) {

            if (column[i].src && column[i].alt == "") {
                if (currentPlayer % 2 == 0) {
                    column[i].src = "./assets/counter-red-large.svg";
                    column[i].alt = "pion rouge";
                    imgCursor.src = "./assets/cursorYellow.svg";
                    spanPlayerTurn.textContent = "1"
                    timerPara.style.color = "var(--black)";
                    spanPlayerTurn.style.color = "var(--black)";
                    divChrono.style.backgroundColor = "var(--player-two)";
                    joueur.style.color = "var(--black)";
                    startChrono()
                    grid[i][colIndex] = "X"
                    
                } else {
                    column[i].src = "./assets/counter-yellow-large.svg";
                    column[i].alt = "pion jaune";
                    imgCursor.src = "./assets/cursorRed.svg";
                    spanPlayerTurn.textContent = "2"
                    timerPara.style.color = "var(--white)";
                    spanPlayerTurn.style.color = "var(--white)";
                    divChrono.style.backgroundColor = "var(--player-one)";
                    joueur.style.color = "var(--white)";
                    startChrono()
                    grid[i][colIndex] = "O"
                }
                currentPlayer++;
                resultat = checkWinner(grid);
                if (resultat !== "null") {
                    gameOver = false;
                    console.log(resultat + " à gagné");
                    if (resultat == "X") {
                        divFooter.style.backgroundColor = "var(--player-one)"
                        winPlayer.style.display = "flex";
                        scorePlayerOne += 1;
                        scoreOne.textContent = scorePlayerOne;
                        spanWinPlayer.textContent = "1";
                        clearInterval(timer)

                    }else if (resultat == "O") {
                        divFooter.style.backgroundColor = "var(--player-two)";
                        winPlayer.style.display = "flex";
                        scorePlayerTwo += 1;
                        scoreTwo.textContent = scorePlayerTwo;
                        spanWinPlayer.textContent = "2";
                        clearInterval(timer)
                    }
                }
                console.log(grid);
                
                break;
            }
        }
    }
}
    imgCursor.style.left = y + "%";
  }

body.addEventListener("keydown", function(e) {
    findPawnPosition(null, grille, e);
});

//   let result = 0;

// result = findPawnPosition(0, grid) // retourne 4
// console.log(result);

// result = findPawnPosition(2, grid) // retourne 3
// console.log(result);

// result = findPawnPosition(5, grid)  // retourne 5
// console.log(result);