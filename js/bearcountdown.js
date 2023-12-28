var date;
function setDate() {
	let date = localStorage.getItem('meetingTime');
	if (!date) {
		date = $('#meetingTime').val();
	}
}
function makeTimer() {
	let endTime;
	if (date.length) {
		endTime = new Date(date);
	} else {
		// Set endTime to be the current date if no date was chosen.
		endTime = new Date();
	}

	endTime = Date.parse(endTime) / 1000;

	var now = new Date();
	now = Date.parse(now) / 1000;

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - days * 86400) / 3600);
	var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
	var seconds = Math.floor(
		timeLeft - days * 86400 - hours * 3600 - minutes * 60
	);

	if (hours < '10') {
		hours = '0' + hours;
	}
	if (minutes < '10') {
		minutes = '0' + minutes;
	}
	if (seconds < '10') {
		seconds = '0' + seconds;
	}

	$('#days').html(days + '<span id = &quot;countdowntxt&quot;>Days</span>');
	$('#hours').html(
		hours + '<span id = &quot;countdowntxt&quot; >Hours</span>'
	);
	$('#minutes').html(
		minutes + '<span id = &quot;countdowntxt&quot;>Minutes</span>'
	);
	$('#seconds').html(
		seconds + '<span id = &quot;countdowntxt&quot;>Seconds</span>'
	);
}

setInterval(function () {
	makeTimer();
}, 100);
