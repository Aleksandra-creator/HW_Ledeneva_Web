
const celsius = Number.parseInt(prompt('Введите показания температуры по Цельсию: '));

function getFahrenheit() {
    return (Math.round(9 / 5) * celsius + 32);
}

alert('Цельсия:' + (celsius) + ', Фаренгейт:' + (getFahrenheit()));
