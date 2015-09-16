(function() {
  var scores = {
    wins: 0,
    loses: 0
  };


  var scoreBoard = document.getElementById('scores');

  function updateScore() {
    scoreBoard.innerHTML = '';
    for(key in scores) {
      var div = document.createElement('div');
      div.innerHTML = '<div>' + key + ': ' + scores[key] + '</div>';
      scoreBoard.appendChild(div);
    };
  };

  updateScore();

  function computerChoice() {
    var choice = Math.floor(Math.random()* 3 + 1);
    if(choice == 1) return 'rock';
    if(choice == 2) return 'paper';
    if(choice == 3) return 'scissors';
  };

  function eachRun() {
    gameText.innerHTML = ('You chose ' + player + '. // Your opponent chose ' + computer + '.');
    player = '';
    computer = '';
  };

  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');
  var reset = document.getElementById('reset');
  var gameText = document.getElementById('game');
  var resultText = document.getElementById('result');
  var player = '';
  var computer = '';

  rock.addEventListener('click', function() {
    player += 'rock';
    computer += computerChoice();
    if (computer == 'rock') {
      eachRun();
      resultText.innerHTML = 'It\'s a tie.';
    }
    if (computer == 'paper') {
        eachRun();
        resultText.innerHTML = 'You lose.';
        scores.loses += 1;
        updateScore();
    }
    if (computer == 'scissors') {
        eachRun();
        resultText.innerHTML = 'You win!';
        scores.wins += 1;
        updateScore();
    }
  });

  paper.addEventListener('click', function() {
    player += 'paper';
    computer += computerChoice();
    if (computer == 'rock') {
        eachRun();
        resultText.innerHTML = 'You win!';
        scores.wins += 1;
        updateScore();
    }
    if (computer == 'paper') {
        eachRun();
        resultText.innerHTML = 'It\'s a tie.';
    }
    if (computer == 'scissors') {
        eachRun();
        resultText.innerHTML = 'You lose.';
        scores.loses += 1;
        updateScore();
    }
  });

  scissors.addEventListener('click', function() {
    player += 'scissors';
    computer += computerChoice();
    if (computer == 'rock') {
        eachRun();
        resultText.innerHTML = 'You lose.';
        scores.loses += 1;
        updateScore();
    }
    if (computer == 'paper') {
        eachRun();
        resultText.innerHTML = 'You win!';
        scores.wins += 1;
        updateScore();
    }
    if (computer == 'scissors') {;
        eachRun();
        resultText.innerHTML = 'It\'s a tie.';
    }
  });
  reset.addEventListener('click', function() {
    scores.wins = 0;
    scores.loses = 0;
    updateScore();
  });
  updateScore();

})();
