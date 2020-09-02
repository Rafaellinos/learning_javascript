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

let battleLog = [];
let lastLogEntry;
let chosenMaxLife;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

try {
    chosenMaxLife = getMaxLifeValues();
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert('You entered an invalid number. The default number 100 was used.');
} finally {
    // não é necessário finally, apenas para exemplo
    adjustHealthBars(chosenMaxLife);
}
    
function getMaxLifeValues() {
    const enteredValue = prompt('Choose a max life for you and the monster', '100');
    const parsedValue = parseInt(enteredValue);
    // chosenMaxLife = (isNaN(chosenMaxLife) || chosenMaxLife <= 0) && 100 || chosenMaxLife;
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: 'Invalid user input not a number!'};
    }
    return parsedValue;
}

function generateLog(event, value, monsterHealth, playerHealth, target) {
    return {
        event: event,
        value: value,
        monsterHealth: monsterHealth,
        playerHealth: playerHealth,
        target: target
    }
}

function writeLog(ev, value, monsterHealth, playerHealth) {
    let logEntry;

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Monster');
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Monster');
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Player');
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = generateLog(event, value, monsterHealth, playerHealth, 'Player');
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = generateLog(event, value, monsterHealth, playerHealth, null);
            break;
        default:
            logEntry = {};
    }
    battleLog.push(logEntry);
}

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
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE:STRONG_ATTACK_VALUE;
    const logEvent = 
        mode === MODE_ATTACK ? 
        LOG_EVENT_PLAYER_ATTACK :
        LOG_EVENT_PLAYER_STRONG_ATTACK;

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

    // for (let i = 0; i < battleLog.length; i++) {
    //     console.log(battleLog[i]);
    // }
    // abaixo para arrays
    // let j = 0;
    // while (j < 3) {
    //     console.log(j);
    //     j++;
    // }

    // let g = 0;
    // do {
    //     console.log(j);
    // } while(g < 3);

    let i = 0;
    
    for (const el of battleLog) {
        if (!lastLogEntry && lastLogEntry !== 0 || lastLogEntry < i) {
            for (const key in el) {
                console.log(`key: ${key}, value: ${el[key]}`);
            }
            lastLogEntry = i;
            break;
        }
        i++;
    }
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
