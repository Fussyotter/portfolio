$(() => {
	// console.log("LINKED");

	// Dramatis Personae
	// const $middleEarth = ('<section id = "middle-earth">');

	// console.log('#middle-earth');
	const hobbits = [
		'Frodo Baggins',
		"Samwise 'Sam' Gamgee",
		"Meriadoc 'Merry' Brandybuck",
		"Peregrin 'Pippin' Took",
	];
	const buddies = [
		'Gandalf the Grey',
		'Legolas',
		'Gimli',
		'Strider',
		'Boromir',
	];

	// const buddies = [
	// 	'Gandalf the Grey',
	// 	'Legolas',
	// 	'Gimli',
	// 	'Strider',
	// 	'Boromir',
	// ];
	const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs'];

	// Our Setting
	const lands = ['The-Shire', 'Rivendell', 'Mordor'];

	// chapter 1
	const makeMiddleEarth = () => {
		for (let i = 0; i < lands.length; i++) {
			$('body').append($('<section id = "middle-earth">'));
			console.log(lands[i]);
			const $landArticle = $(`<article id =${lands[i]}>`).append(
				'<h1>' + lands[i] + '</h1>'
			);
			$('#middle-earth').append($landArticle);
		}
	};
	console.log('#middle-earth');

	//chapter 2
	let $ulHobbit;

	const makeHobbits = () => {
		$ulHobbit = $('<ul>');
		for (let i = 0; i < hobbits.length; i++) {
			// console.log(hobbits[i]);
			$ulHobbit.append($('<li class="hobbit">').text(hobbits[i]));
		}
		$('#The-Shire').append($ulHobbit);
	};
	// .appendTo('#The-Shire') this is doing the append twice. learned you can't double append with intended result.
	// console.log($landArticle);

	// chapter 3
	// $('#the-ring').append('<h1>').text('hi');
	let $oneRing;
	const keepItSecretKeepItSafe = () => {
		$oneRing = $('<div id="the-ring">');
		console.log($oneRing);
		$('li.hobbit').eq(0).append($oneRing);
	};
	// console.log($('ul li.hobbit'));
	// const $hobbits = $('.hobbits li');
	// const $frodo = $hobbits.eq(0);
	// console.log($frodo);
	// $frodo.append('#the-ring');
	// console.log($frodo);
	// const $ring = $frodo.find('#the-ring');
	// console.log($ring.length);

	// frodo is 0
	// ('#middle-earth').append($landArticle);

	// chapter 4

	// ====================================
	//           Chapters
	// ====================================

	// ============
	// Chapter 1
	// ============

	// HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

	// 1. create a section tag with an id of middle-earth

	// 2. append the section to the body of the DOM.

	// 3. use a for loop to iterate over the lands array that does the following:

	//   3a. creates an article tag (there should be one for each land when the loop is done)

	//   3b. gives each land article an `id` tag of the corresponding land name

	//   3c. includes an h1 with the name of the land inside each land article

	//   3d. appends each land to the middle-earth section

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 1 complete - Made Middle Earth".

	// ============
	// Chapter 2
	// ============

	// Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

	// 1. create a 'ul'

	// 2. make each hobbit an li element and append it to the 'ul' you just created
	// hint: use the given 'hobbits' array and use a for loop

	// 3. also, give each hobbit (`li`) a class of "hobbit"

	// 4. append the ul to the shire
	// hint: get 'The-Shire' by using its id

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 2 complete - Made the Hobbits".

	// ============
	// Chapter 3
	// ============

	// 1. create an empty div with an id of 'the-ring'

	// 2. add the ring as a child of Frodo
	// hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
	// when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

	// ============
	// Chapter 4
	// ============

	// 1. display an unordered list of baddies in Mordor

	// 2. give each of the baddies a class of "baddy"

	// 3. remember to append the ul to Mordor

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 4 complete - Made the Baddies"..
	let $ulBaddies;
	const makeBaddies = () => {
		$ulBaddies = $('<ul>');
		for (let i = 0; i < baddies.length; i++) {
			$ulBaddies.append($('<li class="baddies">').text(baddies[i]));
			$('#Mordor').append($ulBaddies);
		}
	};

	// console.log($landArticle);
	// ============
	// Chapter 5
	// ============

	// 1. create an aside tag and append it to middle-earth below mordor

	// 2. display an unordered list of buddies in the aside

	// 3. give each of the buddies a class of "buddy"

	// 4. don't forget to append them to the aside

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 5 complete - Made the Buddies".
	let $ulBuddies;
	const makeBuddies = () => {
		const $ulBuddies = $('<ul>');
		for (let i = 0; i < buddies.length; i++) {
			$ulBuddies.append($('<li class="buddy">').text(buddies[i]));
		}
		const $asideBuds = $('<aside>').append($ulBuddies);
		$('#middle-earth').append($asideBuds);
	};

	// ============
	// Chapter 6
	// ============

	// 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
	// hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 6 complete - Left the Shire"
	const leaveTheShire = () => {
		$('#Rivendell').append($ulHobbit);
	};

	// ============
	// Chapter 7
	// ============

	// 1. change the buddy 'Strider' text node to "Aragorn"
	// hint: You can get a list of elements by tag name, such as 'aside'

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

	// ============
	let $listItems;
	const beautifulStranger = () => {
		$listItems = $('.buddy');
		console.log($listItems);
		$listItems.eq(3).text('aragorn');
	};

	// Chapter 8
	// ============

	// 1. create a new div with an id 'the-fellowship'

	// 2. add an h1 with the text 'The Fellowship' to this new div

	// 3. append the fellowship to middle-earth

	// 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 8 complete - The Fellowship is created"
	const forgeTheFellowShip = () => {
		$fellowShip = $('<div id="the-fellowship">');
		$fellowShip.append('<h1>').text('The Fellowship');
		$('#middle-earth').append($fellowShip);
		$fellowShip.append($ulHobbit).append($ulBuddies);
	};
	// ============
	// Chapter 9
	// ============

	// 1. change the 'Gandalf' text to 'Gandalf the White'

	// 2. add a class "the-white" to this element

	// 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
	// console.log($listItems.eq(0));
	const theBalrog = () => {
		$listItems.eq(0).text('Gandalf the White');
		$listItems.eq(0).addClass('the-white');
		$('.the-white').css({
			'background-color': 'white',
			border: 'solid grey',
			'max-width': '100px',
		});
	};

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 9 complete - Updated Gandalf"

	// ============
	// Chapter 10
	// ============

	// 1. create a pop-up alert that the horn of gondor has been blown when the webpage is loaded

	// 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

	// 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"
	const hornOfGondor = () => {
		alert('The Horn of gondor has been blown!');
		$listItems.eq(4).css({
			'text-decoration': 'line-through',
		});
		$ulBaddies.remove();
	};
	// ============
	// Chapter 11
	// ============

	// 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

	// 2. add a div wiid of 'mount-doom' to Mordor

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"
	let $hobbitList;
	const itsDangerousToGoAlone = () => {
		$hobbitList = $('.hobbit');
		$('#Mordor').append($hobbitList.eq(0)).append($hobbitList.eq(1));
		$('#Mordor').append('<div id="mount-doom">');
	};

	// ============
	// Chapter 12
	// ============

	// 1. Create a div with an id of 'gollum' and add it to Mordor

	// 2. Move the ring from Frodo and give it to Gollum

	// 3. Move Gollum into Mount Doom

	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".
	const weWantsIt = () => {
		$gollum = $('<div id ="gollum">');
		$('#Mordor').append($gollum);

		$($gollum).append($oneRing);
		$('#mount-doom').append($gollum);
	};

	// ============
	// Chapter 13
	// ============

	// 1. remove Gollum and the Ring from the DOM

	// 2. remove all the baddies from the DOM

	// 3. Move all the hobbits back to the shire
	const thereAndBackAgain = () => {
		$gollum.remove();
		$('#The-Shire').append($ulHobbit).append($hobbitList);
	};
	// COMMIT YOUR WORK
	// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

	// =====================================
	// Don't change anything below this line
	// =====================================
	// =====================================
	// This code is loading all of the event listeners for the buttons in your application.
	// =====================================

	$(() => {
		$('#1').on('click', makeMiddleEarth);
		$('#2').on('click', makeHobbits);
		$('#3').on('click', keepItSecretKeepItSafe);
		$('#4').on('click', makeBaddies);
		$('#5').on('click', makeBuddies);
		$('#6').on('click', leaveTheShire);
		$('#7').on('click', beautifulStranger);
		$('#8').on('click', forgeTheFellowShip);
		$('#9').on('click', theBalrog);
		$('#10').on('click', hornOfGondor);
		$('#11').on('click', itsDangerousToGoAlone);
		$('#12').on('click', weWantsIt);
		$('#13').on('click', thereAndBackAgain);
	});
});
