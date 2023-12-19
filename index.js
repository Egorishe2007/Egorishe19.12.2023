import readlineSync from 'readline-sync';

let userScore = 0;
let computerScore = 0;
let totalWins = 0;
let totalRounds = 0;

function getUserChoice() {
  const choices = ['камень', 'ножницы', 'бумага'];
  const index = readlineSync.keyInSelect(choices, 'Выберите: ');

  if (index === -1) {
    console.log('Выход из игры');
    process.exit();
  }

  return choices[index];
}

function getComputerChoice(difficulty) {
  const choices = ['камень', 'ножницы', 'бумага'];
  
  // Adjust difficulty
  const index = (difficulty === 'легко') ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 2);

  return choices[index];
}

function determineWinner(userChoice, computerChoice) {
  console.log(`Ваш выбор: ${userChoice}`);
  console.log(`Выбор компьютера: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log('Ничья!');
  } else if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    userScore++;
    totalWins++;
    console.log('Вы победили!');
  } else {
    computerScore++;
    console.log('Вы проиграли.');
  }
}

function displayScores() {
  console.log(`Ваш счёт: ${userScore}`);
  console.log(`Счёт компьютера: ${computerScore}`);
  console.log(`Общее количество побед: ${totalWins}`);
  console.log(`Общее количество раундов: ${totalRounds}`);
}

function playGame() {
  const difficulty = readlineSync.keyInSelect(['легко', 'нормально'], 'Выберите уровень сложности компьютера: ');

  const rounds = readlineSync.questionInt('Введите количество раундов: ');

  for (let i = 1; i <= rounds; i++) {
    console.log(`\n--- Раунд ${i} ---`);
    const userChoice = getUserChoice().toLowerCase();
    const computerChoice = getComputerChoice(difficulty ? 'легко' : 'нормально').toLowerCase();

    determineWinner(userChoice, computerChoice);

    displayScores();
    totalRounds++;
  }

  console.log('\n--- Статистика ---');
  console.log(`Количество выигранных раундов: ${userScore}`);
  console.log(`Количество проигранных раундов: ${computerScore}`);
  console.log(`Количество ничьих: ${totalRounds - userScore - computerScore}`);
}

// Запустить игру
playGame();
