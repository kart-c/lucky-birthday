const dateOfBirth = document.querySelector('#dob');
const numberInput = document.querySelector('#num');
const checkBtn = document.querySelector('button');
const outputText = document.querySelector('.output-text');

checkBtn.addEventListener('click', function () {
	const dobValue = dateOfBirth.value.replaceAll('-', '');
	const numValue = parseInt(numberInput.value);
	const dobSum = addDOB(dobValue);
	if (numValue && dobSum) {
		if (dobSum % numValue === 0) {
			outputText.innerHTML = 'Your birthday is lucky! &#129395;';
		} else {
			outputText.innerHTML = 'Your birthday is not lucky &#129301;';
		}
	} else {
		outputText.innerHTML = 'Enter both fields &#128544;';
	}
});

function addDOB(dob) {
	let sum = 0;
	for (let i = 0; i < dob.length; i++) {
		sum += Number(dob.charAt(i));
	}
	return sum;
}