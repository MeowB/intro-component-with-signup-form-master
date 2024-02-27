let form = document.querySelector(".form")

form.addEventListener("submit", formCheck)



function formCheck () {
	event.preventDefault()
	// creating a list of all the input fields 
	const formData = new FormData(form)
	const inputValues = []

	for(const [name, value] of formData.entries()){
		inputValues.push({name, value})
	}

	// for each input fields, check if it's empty or not
	inputValues.forEach(function(input){
		if (!input.value) {
			// select the current input tag and calls the errorTrigger to show the error div on the dom
			const inputError = document.querySelector(`#${input.name}`)
			errorTrigger(inputError);
		}
	})
}

// function to create and place the error in the form, it takes am <input> tag as a parameter
function errorTrigger (element) {
	// Check if an error is already there at the input field
	const errorPresent = document.querySelector(`.error-${element.name}`);
	if (errorPresent) {
		return;
	}

	// create the error div with the image and the message
	const errorElement = document.createElement("div");
	const img = document.createElement("img")

	img.src = "./images/icon-error.svg";
	errorElement.appendChild(img);
	errorElement.classList.add(`error`, `error-${element.name}`);
	
	// check for email edge case where the message is different
	if (element.name === "email"){
		errorElement.textContent = `Looks like this is not an email`;

	} else {
		errorElement.textContent = `${element.placeholder} cannot be empty`;
	}

	// add the div and change the style of the input fiel to display the error
	element.style.border =  "2px solid hsl(0, 100%, 74%)"
	element.insertAdjacentElement("afterend", errorElement);
}