const hitBtn = document.querySelector('.hit-bee'),
	resetBtn = document.querySelector('.reset'),
	allBees = document.querySelectorAll('.bee'),
	body = document.querySelector('body'),
	beeSwarmType = 'bee-swarm_',
	queen = document.querySelector('.bee-swarm_queen'),
	playerName = document.querySelector('.player-name'),
	storedString = 'bee-',
	storedValues = Object.keys(sessionStorage).filter(key => key.startsWith(storedString)),
	hitClass = 'js-hit',
	gameOverClass= 'js-over',
	beeType = {
		queen: {
			hp: 100,
			dmg: 8,
		}, 
		worker: {
			hp: 75,
			dmg: 10,
		},
		drone: {
			hp: 50,
			dmg: 12,
		}, 
		// test: {
		// 	hp: 50,
		// 	dmg: 25,
		// }
	};

let gameOver = true;

// Session storage checker
if (storedValues.length) {
	storedValues.forEach( bee => {
		const index = bee.slice(storedString.length);

		allBees[index].dataset.hp = sessionStorage.getItem(storedString + index);
		playerName.value = sessionStorage.getItem('name');
	});
}
      
const hitBeeHandler = () => {
	const random = Math.floor(Math.random() * allBees.length),
		  beeHit = allBees[random],
		  activeHit = document.querySelector(`.${hitClass}`);

	// Check if the random selected bee is still alive  
	if(allBees[random].dataset.hp == 0) {
		return hitBeeHandler();
	}
	
	let beeHp = beeHit.dataset.hp,
		beeNewHp;

	// Add / Remove 'hitClass'
	if (activeHit) {
		activeHit.classList.remove(hitClass)
	}
	beeHit.classList.add(hitClass);

	// Checking for bee class/type and apply damage taken based on 'beeType' object
	// [1] type -> is retreive from class name (queen/worker/drone/...)
	beeHit.classList.forEach( type => { //[1]
		if(type.startsWith(beeSwarmType)) {
			const beeDmgType = beeType[type.substr(beeSwarmType.length)].dmg;
			beeNewHp = beeHp - beeDmgType > 0 ? beeHp - beeDmgType : 0;
		}
	});

	//Set new health points value
	beeHit.dataset.hp = beeNewHp;

	// Set up session storage
	sessionStorage.setItem(`bee-${random}`, `${beeNewHp}`);
	sessionStorage.setItem(`name`, `${playerName.value}`);


	gameOverHandler();
	if(gameOver) {
		body.classList.add(gameOverClass);
	}
};

// Check for 'game over' objectives
const gameOverHandler = () => {
	gameOver = true;

	allBees.forEach( bee => {
		if(queen.dataset.hp > 0) {
			if(bee !== queen && bee.dataset.hp > 0){
				return gameOver = false;
			}	
		} else {
			return gameOver = true;
		}
	});
};

const restartGame = () => {
	sessionStorage.clear();
	location.reload();
}

hitBtn.addEventListener('click', hitBeeHandler);
resetBtn.addEventListener('click', restartGame);

/* Unit Testing
I haven't worked with Unit Testing yet, mostly because it was not required in the companies I worked previously. 
(I did played around with it just to understand more of it, but not enough to be proficient at it).

Technically just by adding a few lines of mark-up and a new object in baseType we can create a new bee type to test it (test -> uncomment test lines from js and html).
*/