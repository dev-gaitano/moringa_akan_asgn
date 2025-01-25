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
    const gender = document.getElementById('gender').value

    return gender
};


// Validate if client DOB is valid
const dobValidator = () => {
    const dob = getClientDob();
    
    if(dob[0] >= 1 && dob[0] <= 31 && dob[1] >= 1 && dob[1] <= 12 && dob[2] >= 1000 && dob[2] <= 3000 ) {
        const dobIsValid = true;
    }
    else {
        const dobIsValid = false;
        alert('Date of Birth is Not Valid')
    }

}


// Validate if client DOB is valid
const genderValidator = () => {
    const dob = getClientGender();

    if(gender != null) {
        genderIsValid = true;
    }
    else {
        genderIsValid = false;
        alert('Gender is Not Valid')
    }
}


// Listen for submit button - onSubmit , Event Listeners
const submitForm = document.getElementById('submit_button').addEventListener('click', genderValidator)


// Calculate DOB's Day Of The Week - Formula in the canva assignment documentation, get as Index
// Check if the Client is Male or Female and select dict / object  based on gender - if male , else female
// Select the Day of the week equal to our Clients Day of the week in dict - Use index calculated, validate if index is positive using modular operator
// Return the corresponding key to the day of the week in the selected dict - Define a function to return the data to the client, the Akan name