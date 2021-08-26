const dateOfBirth = document.querySelector('#dob');
const numberInput = document.querySelector('#num');
const checkBtn = document.querySelector('button');
const outputText = document.querySelector('.output-text');
const helperText = document.querySelector('.helper-text');
const bodyMain = document.querySelector('main');
const initialRender = document.querySelector('.initial-render');
const footer = document.querySelector('footer');

initialRender.addEventListener('click', function () {
	initialRender.style.display = 'none';
	bodyMain.style.display = 'block';
	footer.style.display = 'block';
});

checkBtn.addEventListener('click', function () {
	const dobValue = dateOfBirth.value.replaceAll('-', '');
	const numValue = parseInt(numberInput.value);
	const dobSum = addDOB(dobValue);
	if (numValue && dobSum) {
		helperText.style.display = 'none';
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
