var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const [p1n, p1q, p1u] = lines[0].split(' ');
const [p2n, p2q, p2u] = lines[1].split(' ');

const TOTAL = Number.parseFloat(p1q * p1u + p2q * p2u).toFixed(2)
console.log(`VALOR A PAGAR: R$ ${TOTAL}`)
