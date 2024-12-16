function comparaison() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let equality = ("Les deux nombres sont égaux");

    if(number1 < number2)
    {
        document.getElementById('result').value = number2
        
    }
        else if(number1 > number2)
        {
            document.getElementById('result').value = number1
        }
    else
    {
        document.getElementById('result').innerHTML = equality
    }

}