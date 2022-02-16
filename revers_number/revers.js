let divResult = document.getElementById('result')

//математическая версия решения задачи

document.getElementById('btnStart').onclick = function () {
    let userNumber = document.getElementById('userNumber').value
    console.log('Пользователь ввел:' + userNumber)
    //определяем временную переменную
    let tmpNumber = userNumber
    let strResult = ''
    while (tmpNumber >= 10) {
        strResult += tmpNumber % 10 + ''
        tmpNumber = Math.floor(tmpNumber / 10)
    }
    strResult += tmpNumber
    console.log(strResult)
    divResult.innerText = strResult


    console.log('--------------')
//строковая версия решения задачи
    let tmpString = userNumber.toString()
    for (let i = 0; i < tmpString.length; i = i + 1) {
        console.log (tmpString[i])
    }
    console.log('--------------')
    for (let i = tmpString.length - 1; i >= 0; i = i - 1) {
        console.log (tmpString[i])
    }
}