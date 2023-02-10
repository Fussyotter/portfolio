// player contains items, money,
// const prompt = require('prompt-sync')();
// player contains items, money,
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
$(() => {
	const player = {
		name: `${username}`,
		money: 0,
		teeth: true,
		scissors: true,
		pushLawnMower: true,
		// tools: [(teeth = true), (scissors = false)],
		fancyLawnMower: false,
		starvingStudents: false,
		teethPay: function () {
			if (player.teeth == true) {
				player.money += 1;
				document.getElementsByClassName(
					'player-info'
				)[1].innerHTML = `money: ${player.money}`;
				if (player.money >= 35) {
					showReward();
				}
				return player.money;
			}
		},
		scissorsPay: function () {
			if (player.scissors == true) {
				player.money += 5;
				document.getElementsByClassName(
					'player-info'
				)[1].innerHTML = `money: ${player.money}`;
				if (player.money >= 35) {
					showReward();
				}
				return player.money;
			}
		},
		pushLawnMowerPay: function () {
			if (player.pushLawnMower == true) {
				player.money += 50;
				document.getElementsByClassName(
					'player-info'
				)[1].innerHTML = `money: ${player.money}`;
				if (player.money >= 350) {
					showReward();
				}
				return player.money;
			}
		},
		fancyLawnMowerPay: function () {
			if (player.fancyLawnMower == true) {
				player.money += 100;
				document.getElementsByClassName(
					'player-info'
				)[1].innerHTML = `money: ${player.money}`;
				if (player.money >= 350) {
					showReward();
				}
				return player.money;
			}
		},
		starvingStudentsPay: function () {
			if (player.starvingStudents == true) {
				player.money += 500;
				document.getElementsByClassName(
					'player-info'
				)[1].innerHTML = `money: ${player.money}`;
				if (player.money >= 350) {
					showReward();
				}
				return player.money;
			}
		},
	};

	const supplyStore = {
		buyScissors: function () {
			if (player.money >= 5) {
				player.scissors = true;
				player.money -= 5;
				console.log(
					`You have bought scissors and now have ${player.money} dollars left.`
				);
			} else {
				console.log("You don't have enough money to buy scissors.");
			}
		},
		buyPushLawnMower: function () {
			if (player.money >= 25) {
				player.pushLawnMower = true;
				player.money -= 25;
				console.log(
					`You have bought a push lawn mower and now have ' ${player.money} dollars left.`
				);
			} else {
				console.log("You don't have enough money to buy a push lawn mower.");
			}
		},
		buyFancyLawnMower: function () {
			if (player.money >= 30) {
				player.fancyLawnMower = true;
				player.money -= 30;
				console.log(
					`You have bought a fancy lawn mower and now have
					${player.money} dollars left.`
				);
			} else {
				console.log("You don't have enough money to buy a fancy lawn mower.");
			}
		},
		buyStarvingStudents: function () {
			if (player.money >= 500) {
				player.starvingStudents = true;
				player.money -= 500;
				console.log(
					`You have bought starving students and now have
				${player.money} dollars left.`
				);
			} else {
				console.log("You don't have enough money to buy starving students.");
			}
		},
	};

	const playerDisplay = () => {
		let index = 0;
		for (let key in player) {
			if (index == 2) {
				break;
			}
			// const divStats = document.createElement('div')
			let divStats = document.createElement('div');
			divStats.innerHTML = `${key}:${player[key]}`;
			divStats.className = 'player-info';
			document.body.appendChild(divStats);
			index++;
		}
	};
	const toolCheck = () => {
		let index = 2;
		// this .forEach thing is incredibly useful. need to remember how it works.
		const previousTools = document.querySelectorAll('.toolsList'); // defines each element in array as tool     VVVVVVVV
		previousTools.forEach((tool) => tool.remove());
		for (let key in player) {
			if (player[key] === true) {
				let tools = document.createElement('div');
				tools.className = 'toolsList';
				tools.innerHTML = `${key}`;
				document.body.appendChild(tools);
			}
		}
	};
	const showReward = () => {
		document.body.style.backgroundImage =
			"url('https://i.ytimg.com/vi/49CA1JH-fTw/mqdefault.jpg')";

		const rewardDiv = document.createElement('div');
		rewardDiv.className = 'reward';
		rewardDiv.innerHTML = 'YOU DID IT! THIS CORGI PICTURE IS REWARD ENOUGH!';
		document.body.appendChild(rewardDiv);
	};

	// const testIndex = () => {
	// const selectedDiv = document.getElementsByClassName('player-info')[3];
	// 	console.log(selectedDiv);
	// 	selectedDiv.innerHTML = 'weeee';
	// };
	// const textIndexRewrite = () => {
	// };

	// const displayMoney = () => {
	// 	divStats.innerHTML =

	// };
	// const updatePlayer = (key, value) => {
	// 	player[key] = value;
	// 	const oldDivs = document.querySelectorAll('.player-info');
	// 	oldDivs.forEach((div) => div.remove());
	// 	playerDisplay();
	// };

	const startLawnMowing = () => {
		while (player.money < 500) {
			const choice = prompt(
				'Do you want to mow the lawn or buy supplies? (mow/buy)'
			);
			if (choice === 'mow') {
				if (player.teeth) {
					player.teethPay();
					console.log(
						`You have mowed the lawn with your teeth and now have $${player.money}.`
					);
				} else if (player.scissors) {
					player.scissorsPay();
					console.log(
						`You have mowed the lawn with scissors and now have $${player.money}.`
					);
				} else if (player.pushLawnMower) {
					player.pushLawnMowerPay();
					console.log(
						`You have mowed the lawn with a push lawn mower and now have $${player.money}.`
					);
				} else if (player.fancyLawnMower) {
					player.fancyLawnMowerPay();
					console.log(
						`You have mowed the lawn with a fancy lawn mower and now have $${player.money}.`
					);
				} else if (player.starvingStudents) {
					player.starvingStudentsPay();
					console.log(
						`You have hired starving students and now have $${player.money}.`
					);
				} else {
					console.log("You don't have any supplies to mow the lawn with.");
				}
			} else if (choice === 'buy') {
				const supplyChoice = prompt(
					'Which supply would you like to buy? (scissors/push-lawn-mower/fancy-lawn-mower/starving-students)'
				);
				if (supplyChoice === 'scissors') {
					supplyStore.buyScissors();
				} else if (supplyChoice === 'push-lawn-mower') {
					supplyStore.buyPushLawnMower();
				} else if (supplyChoice === 'fancy-lawn-mower') {
					supplyStore.buyFancyLawnMower();
				} else if (supplyChoice === 'starving-students') {
					supplyStore.buyStarvingStudents();
				} else {
					console.log('Invalid supply choice.');
				}
			} else {
				console.log('Invalid choice, try again.');
			}
		}
		console.log(`Congratulations! You have earned $${player.money}.`);
	};
	$(() => {
		(() => {
			$('#1').on('click', playerDisplay);

			let clicked = false;

			$('#1').click(() => {
				if (!clicked) {
					playerDisplay();
					clicked = true;
					$('#1').remove();
				}
			});
		})();

		$('#2').on('click', player.teethPay);
		$('#3').on('click', player.scissorsPay);
		$('#4').on('click', toolCheck);
	});
});

// const firstDay = () => {
// 	console.log(
// 		'It is a brand new day.  You wake up feeling like cutting some grass.  You head outside and get started on the first lawn you see.'
// 	);
// 	const cutGrass = prompt(
// 		`Let's get going.  Want to see your available tools?`
// 	);
// 	if (cutGrass == 'yes') {
// 		for (const property in player) {
// 			if (player[property] === true) {
// 				console.log(property);
// 				const pickTool = prompt(
// 					'Which tool would you like to pick for the next lawn?'
// 				);
// 				if (pickTool == 'teeth') {
// 					console.log(
// 						`You start out the day with the only tool you have.  Your teeth.  What a great time you're having; eating grass for a living.  You spend most of the day eating one lawn, its not much, but it's honest work.`
// 					);
// 					player.teethPay();
// 					console.log(
// 						`You collect your pay and put it in the jar.  ${player.money} dollar saved!`
// 					);
// 				}
// 			}
// 		}
// 	} else {
// 		console.log('ok lets cut some grass.');
// 	}
// };
// firstDay();
// player.teethPay();
// console.log(player.money);
// player.teethPay();
// console.log(player.money);
// player.scissorsPay();
// console.log(player.money);
// player.pushLawnMowerPay();
// console.log(player.money);
// supplyStore.buyPushLawnMower();
// console.log(player.money);
// console.log(player.teeth);
// console.log(player.scissors);
// console.log(player.name);
// console.log(player.tools[1]);
// console.log(player.scissors);
// console.log(player.fancyLawnMower);
// supplyStore.buyFancyLawnMower();
// console.log(player.fancyLawnMower);
