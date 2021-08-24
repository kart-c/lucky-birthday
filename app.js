const dateOfBirth = document.querySelector('#dob');
const numberInput = document.querySelector('#num');
const checkBtn = document.querySelector('button');

checkBtn.addEventListener('click', function () {
	const dobValue = dateOfBirth.value.replaceAll('-', '');
	const numValue = parseInt(numberInput.value);
	const dobSum = addDOB(dobValue);
	if (numValue && dobSum) {
		if (dobSum % numValue === 0) {
			console.log('Your birthday is lucky!');
		} else {
			console.log('Your birthday is not lucky');
		}
	} else {
		console.log('Enter both fields');
	}
});

function addDOB(dob) {
	let sum = 0;
	for (let i = 0; i < dob.length; i++) {
		sum += Number(dob.charAt(i));
	}
	return sum;
}
