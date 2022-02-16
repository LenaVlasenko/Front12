let divResult = document.getElementById('result')

document.getElementById('btnStart').onclick = function () {
    let userNumber = document.getElementById('userNumber').value
    console.log('Пользователь ввел:' + userNumber)
    //определяем временную переменную
    let tmpNumber = userNumber
    let strResult = ''
    while (tmpNumber > 10) {
        strResult += tmpNumber % 10 + ''
        tmpNumber = Math.floor(tmpNumber / 10)
    }
    strResult += tmpNumber
    console.log(strResult)
    divResult.innerText = strResult
}