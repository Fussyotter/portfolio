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
	// const linkedIn = document.getElementsByClassName("fa fa-linkedin w3-hover-opacity")
	// linkedIn.addEventListener('click',() =>)
});
