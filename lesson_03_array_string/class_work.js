let result = document.getElementById('result');

document.getElementById('btnStart').onclick = function (){
    result.innerText = 'Пользователь щелкнул на кнопку'
    let userNumber = document.getElementById('userNumber').value
    console.log('Пользователь ввел' + userNumber)
    if (userNumber < 18) {
        result.style.backgroundColor = 'red'
        result.innerText = ' Сайт для тех кому больше 18'
    } else if (userNumber > 65) {
        result.innerText = 'Вы слишком стары для интернета'
    } else {
        result.innerText = 'Добро пожаловать'
    }
}
