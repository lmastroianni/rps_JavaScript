(() => {
	// this is the same as print () in python //
	console.log('loaded');


	var choices = ["Rock", "Paper", "Scissors"]; // same as an array in Python 
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("play");
	var status = document.querySelector('.winlose');
	 //can use " or ' - be consistent though
	 
	 function play_game() {
	 	console.log("called game function");

        // generate a random number and use that to pick a weapon
	 	computer = choices[Math.floor(Math.random()) * choices.length)];
        console.log(computer);

        var player_choice = player.value;
        console.log(player_choice);

        if (computer.toLowerCase () == player_choice.toLowerCase()) {
        	//tie
        	console.log('tie');
        	status.textContent = "Tie! You live to shoot another day!";
        }

        else if (player_choice.toLowerCase() == "rock") {
        	if (computer.toLowerCase() == "scissors") {
        	} else {
        		console.log("win");
        		status.textContent =
        
        	}
        }
        else if (player_choice.toLowerCase() == "rock") {
        	if (computer.toLowerCase() == "scissors") {
        	} else {
        		console.log("lose");
        	}
        	else if (player_choice.toLowerCase() == "rock") {
        	if (computer.toLowerCase() == "scissors") {
        	} else {
        		console.log("lose");
        	}

	 }
	     else { 
	     	alert("Input a valid selection"); 
	     }
	 }    

	 trigger.addEventListener("click" , play_game);
})();