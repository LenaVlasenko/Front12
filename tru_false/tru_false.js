document.getElementById('btnCalc').onclick = function () {
    let userNumber = document.getElementById('userNumber').value
    let result = Boolean(userNumber % 2)
    //let result = userNumber % 2
    console.log(typeof (result))
    document.getElementById('result').innerText = 'Нечетное: ' + result
}