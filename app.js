const menu = document.getElementById("menu");
const btnRules = document.querySelector(".btnRules");
const body = document.body;
const secMenu = document.querySelector(".secMenu");
const dialogPause = document.querySelector(".dialogPause")
const opacity = document.querySelector(".opacity");




function createContainer(classContainer = "", idContainer = "", type) {
	const element = document.createElement(type);

    if (classContainer) element.classList.add(classContainer);
    if (idContainer) element.id = idContainer;
    return element
}

function createText(classText = "", idText = "", texte = "",type) {
	const element = document.createElement(type);
    if (classText) element.classList.add(classText);
    if (idText) element.id = idText;
	element.textContent = texte;

    return element 
}

function createImg(classImg = "", idImg = "", src, alt) {
	const img = document.createElement("img");

    if (classImg) img.classList.add(classImg);
    if (idImg) img.id = idImg;
	img.src = src;
	img.alt = alt;

    return img 
}

function secPause() {
    const dialog = createContainer("dialogPause", "", "dialog");

    const h2 = createText("pauseH2", "", "PAUSE", "h2")
    dialog.appendChild(h2);

    const divBtnPause = createContainer("divBtnPause", "", "div")
    dialog.appendChild(divBtnPause)

    const btnContinue = createText("btnContinue", "", "CONTINUE GAME", "button");
    divBtnPause.appendChild(btnContinue)

    const btnRestart = createText("btnRestart", "", "RESTART", "button");
    divBtnPause.appendChild(btnRestart)


    const btnQuit = createText("btnQuit", "", "QUIT GAME", "button");
    divBtnPause.appendChild(btnQuit)

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
	const divTotalMenu = createContainer("divTotalMenu", "", "div")

	// Création de l'image du logo de base
	const imgLogoBase = createImg("imgLogoBase", "", "./assets/logoBase.svg", "logo de base");

	// Ajout de l'image à divTotalMenu
	divTotalMenu.appendChild(imgLogoBase);

	// Création de la div "divBtnMenu" contenant les boutons
	const divBtnMenu = createContainer("divBtnMenu", "", "div");

	// Création du premier bouton "PLAY VS PLAYER"
	const btnPlay = createText("btnPlay", "", "PLAY VS PLAYER", "button");

	// Ajout de l'image à ce bouton
	const imgPlay = createImg("", "", "./assets/player-vs-player.svg", "player vs player");

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


btnRules.addEventListener("click", () => {
    let verifSecRules = document.querySelector(".secRule");

    if (!verifSecRules) {
        secRule(); // Créer secRule uniquement si elle n'existe pas encore
    } else {
        verifSecRules.style.display = "flex";
    }

    document.querySelector(".secMenu").style.display = "none";

    // Sélectionner le bouton check après avoir créé secRule
    const btnCheck = document.querySelector(".check");
    
    btnCheck.addEventListener("click", () => {
        document.querySelector(".secRule").style.display = "none";
        document.querySelector(".secMenu").style.display = "flex";
    });
});

menu.addEventListener("click", () => {
    let verifSecPause = document.querySelector(".dialogPause");

    if (!verifSecPause) {
        opacity.style.display = "flex";
        secPause();
    } else {
        verifSecPause.style.display = "flex";
        opacity.style.display = "flex";
    }
    const btnContinue = document.querySelector(".btnContinue");
    
    btnContinue.addEventListener("click", () => {
        document.querySelector(".dialogPause").remove();
        document.querySelector(".opacity").style.display = "none";
    });
});