let words: string [] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'CELULAR',
    'TELEFONO'
];

export function getRandomWord () {
    const randomIndex = Math.floor(Math.random()*words.length);
    return words[randomIndex];
}