$(() => {
	// console.log('hi');
	// const $openBtn = $('#openModal');
	// const $modal = $('#modal');
	// const $closeBtn = $('#close');

	// //Event Handlers
	// const openModal = () => {
	// 	$modal.css('display', 'block');
	// };

	// const closeModal = () => {
	// 	$modal.css('display', 'none');
	// };

	// //Event Listeners
	// $openBtn.on('click', openModal);
	// $closeBtn.on('click', closeModal);
	const modal = document.getElementById('id01');
	const resumeClose = document.getElementById('resumeLoad');
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		} else if (event.target == resumeClose) {
			resumeClose.style.display = 'none';
		}
	};

	document.getElementById('resumeLink').style.width = '32.9%';
	document.getElementById('gitHubLink').style.width = '32.9%';
	document.getElementById('contact').style.width = '32.9%';

	const resumeLink = document.getElementById('resumeLink');
	const resumeLoad = document.getElementById('resumeLoad');
	resumeLink.addEventListener('click', function () {
		if (resumeLoad.style.display === 'block') {
			resumeLoad.style.display = 'none';
		} else {
			resumeLoad.style.display = 'block';
		}
	});
	const gitHubLink = document.getElementById('gitHubLink');
	const gitHubLoad = document.getElementById('gitHubLoad');
	gitHubLink.addEventListener('click', function () {
		if (gitHubLoad.style.display === 'block') {
			gitHubLoad.style.display = 'none';
		} else {
			gitHubLoad.style.display = 'block';
		}
	});
	const contact = document.getElementById('contact');
	const contactJump = document.getElementById('contactJump');
	contact.addEventListener('click', () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth',
		});
	});
	const linkedinIcon = document.querySelector('.fa-linkedin');
	linkedinIcon.style.color = 'red';
	// contact.addEventListener('click', () => {
	// 	let target=document.getElementById('aboutMe')
	// 	window.scrollTo({
	// 		top: target.offsetTop,
	// 		behavior: 'smooth',
	// 	});
	// });

	// const linkedIn = document.getElementsByClassName("fa fa-linkedin w3-hover-opacity")
	// linkedIn.addEventListener('click',() =>)
	const contactIcons = document.querySelectorAll('#contactIcon');
	for (let i = 0; i < contactIcons.length; i++) {
		contactIcons[i].style.color = 'red';
	}
	const img = document.querySelector('img');
	const content = document.querySelector('#aboutMe');

	img.addEventListener('click', function () {
		content.innerHTML =
			'Hi there! I\'m a Los Angeles based aspiring Full stack Engineer with 8 years of experience in freelance film production and supervision. I\'ve honed skills in communication, coordination, and problem-solving throughout my career. My next step is utilizing my skills and experience to branch into the world of software engineering.';
	});
});
