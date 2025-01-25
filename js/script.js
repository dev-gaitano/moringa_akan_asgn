// Create Akan name dicts / object for each gender - Day of the week index(key) : Akan name (value)


// Get client DOB from input form
const getClientDob = () => {
    const day = parseInt(document.getElementById('day').value)
    const month = parseInt(document.getElementById('month').value)
    const year = parseInt(document.getElementById('year').value)

    return [day , month , year]
};


// Get Client Gender from input form
const getClientGender = () => {
    const clientGender = document.getElementById('gender').value

    return clientGender
};


// Return Client input info
const clientInputInfo = () => {
    const dob = getClientDob();
    const gender = getClientGender();

    console.log(dob);
    console.log(gender);
}


// Listen for submit button - onSubmit , Event Listeners
const submitForm = document.getElementById('submit_button')

submitForm.addEventListener('click', clientInputInfo)


// Validate if client DOB is valid - Use JavaScript Operators such as '===' and '<='
    // If dob.day < 1 or > 31 , input invalid
    // If dob.month < 1 or > 12 , input invalid
    // If dob.year < 1800 or > 2100 , input invalid

// Calculate DOB's Day Of The Week - Formula in the canva assignment documentation, get as Index
// Check if the Client is Male or Female and select dict / object  based on gender - if male , else female
// Select the Day of the week equal to our Clients Day of the week in dict - Use index calculated, validate if index is positive using modular operator
// Return the corresponding key to the day of the week in the selected dict - Define a function to return the data to the client, the Akan name