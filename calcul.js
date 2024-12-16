function calcul()
{
	let number1 = document.getElementById('number1').value;
	let number2 = document.getElementById('number2').value;
	let operators = document.getElementById('operators').value;

	if (operators === '+')
	{
		document.getElementById('result').value = parseInt(number1) + parseInt(number2);
	}

	if (operators === '-')
	{
		document.getElementById('result').value = parseInt(number1) - parseInt(number2);
	}

	if (operators === 'x')
	{
		document.getElementById('result').value = parseInt(number1) * parseInt(number2);
	}

	if (operators === '/')
	{
		document.getElementById('result').value = parseInt(number1) / parseInt(number2);
	}
}