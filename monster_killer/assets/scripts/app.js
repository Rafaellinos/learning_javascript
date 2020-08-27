const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 1; //normal attack
const MODE_STRONG_ATTACK = 2; // strong attack

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Choose a max life for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

function generateLog(event, value, monsterHealth, playerHealth, target) {
    return {
        event: event,
        value: value,
        monsterHealth: monsterHealth,
        playerHealth: playerHealth,
        target: target
    }
}

function writeLog(event, value, monsterHealth, playerHealth) {
    let logEntry;
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Monster');
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Monster');
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Player');
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Player');
    } else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = generateLog(event, value, monsterHealth, playerHealth, null);
    }
    battleLog.push(logEntry);
}

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    writeLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        setPlayerHealth(initialPlayerHealth);
        currentPlayerHealth = initialPlayerHealth;
        alert('You woulb be dead, but the bonus life saved you!')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        writeLog(
            LOG_EVENT_GAME_OVER, 
            playerDamage, 
            currentMonsterHealth, 
            currentPlayerHealth);
        alert('You Won!');
        
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lose!');
        writeLog(
            LOG_EVENT_GAME_OVER, 
            playerDamage, 
            currentMonsterHealth, 
            currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a Draw');
        writeLog(
            LOG_EVENT_GAME_OVER, 
            playerDamage, 
            currentMonsterHealth, 
            currentPlayerHealth);
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
      reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    } else {
        throw 'Mode ATTACK not identified!';
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert('You can\'t heal to more than your max initial health');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth);
    endRound();
}

function printLogHandler () {
    alert(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
