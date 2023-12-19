import readlineSync from 'readline-sync';

function getUserChoice() {
  const choices = ['камень', 'ножницы', 'бумага'];
  const index = readlineSync.keyInSelect(choices, 'Выберите: ');

  if (index === -1) {
    console.log('Выход из игры');
    process.exit();
  }

  return choices[index];
}

function getComputerChoice() {
  const choices = ['камень', 'ножницы', 'бумага'];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function determineWinner(userChoice, computerChoice) {
  console.log(`Ваш выбор: ${userChoice}`);
  console.log(`Выбор компьютера: ${computerChoice}`);

  if (userChoice === computerChoice) {
    return 'Ничья!';
  } else if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    return 'Вы победили!';
  } else {
    return 'Вы проиграли.';
  }
}

function playGame() {
  const userChoice = getUserChoice().toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();
  const result = determineWinner(userChoice, computerChoice);

  console.log(result);

  const playAgain = readlineSync.keyInYNStrict('Хотите сыграть еще раз?');
  if (playAgain) {
    playGame();
  } else {
    console.log('Спасибо за игру!');
    process.exit();
  }
}


// Запуск игры
playGame();