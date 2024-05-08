import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import getRandomInt from '../src/utils.js';

hello()

const isEven =()=>{
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const num = getRandomInt(100)
    console.log(`Question: ${num}`)
    
} 