// Create Akan name dicts / object for each gender - Day of the week index(key) : Akan name (value)

// Listen for submit button - onSubmit , Event Listeners
const submitForm = document.getElementById('submit_button')

submitForm.addEventListener('click', getClientDob)

// Get client DOB - document.get....value
function getClientDob () {
    const day = document.getElementById('day').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
console.log(day);
console.log(month);
console.log(year);
};

getClientDob();
// Get Client Gender - document.get....value

// Validate if client DOB is valid - Use JavaScript Operators such as '===' and '<='

// Calculate DOB's Day Of The Week - Formula in the canva assignment documentation, get as Index
// Check if the Client is Male or Female and select dict / object  based on gender - if male , else female
// Select the Day of the week equal to our Clients Day of the week in dict - Use index calculated, validate if index is positive using modular operator
// Return the corresponding key to the day of the week in the selected dict - Define a function to return the data to the client, the Akan name