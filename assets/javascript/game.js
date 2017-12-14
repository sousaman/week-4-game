// Code to ensure the page has loaded before the code begins to run

$(document).ready(function() {

	// Global Variables

	var wins = 0;

	var losses = 0;

	var randomNumber = 0;

	var currentScore = 0;

	var crystalImgs = ["amethyst", "ice", "healing", "crystalRock"];

	// Functions


	function initializeGame() {
		currentScore = 0;
		$('#currentScore').html('<h1>' + currentScore + '</h1>')
		randomNumber = Math.floor(Math.random() * 102) + 19;
		$('#randomNumber').html('<h1>' + randomNumber + '</h1>')
		$('#crystals').html('');
		for (var i = 0; i < crystalImgs.length; i++) {
			var crystalValue = Math.ceil(Math.random() * 12)
			var currentImg = $('<img>');
			currentImg.attr('src', 'assets/images/' + crystalImgs[i] + '.jpg')
			currentImg.data('value', crystalValue);
			$('#crystals').append(currentImg);
		}

	}

	function updateTotals() {
		if (currentScore == randomNumber) {
			wins++;
			$('#resultText').text('You Win!!!');
			$('#wins').text(wins);
			initializeGame();
		}

		else if (currentScore > randomNumber) {
			losses++;
			$('#resultText').text('You Lose. :(');
			$('#losses').text(losses);
			initializeGame();

		}

		else {
			return;
		}
		initializeGame();
	}

	initializeGame();
	

	$('img').on('click', function() {

		var currentCrystalValue = $(this).data('value');
		currentCrystalValue = parseInt(currentCrystalValue);
		currentScore += currentCrystalValue;
		$('#currentScore').html('<h1>' + currentScore + '</h1>');
		updateTotals();


	})










});