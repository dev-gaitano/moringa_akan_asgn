// Create Akan name dicts / object for each gender - Day of the week index(key) : Akan name (value)
const akanNamesMale = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const akanNamesFemale = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];

// Get client DOB from input form
const getClientDob = () => {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  return [day, month, year];
};

// Get Client Gender from input form
const getClientGender = () => {
  const gender = document.getElementById("gender").value;

  return gender;
};

// Validate if client DOB is valid
const dobValidator = () => {
  const dob = getClientDob();

  if (
    dob[0] >= 1 &&
    dob[0] <= 31 &&
    dob[1] >= 1 &&
    dob[1] <= 12 &&
    dob[2] >= 1000 &&
    dob[2] <= 3000
  ) {
    if ([4, 6, 9, 11].includes(dob[1])) {
      if (dob[0] >= 1 && dob[0] <= 30) {
        return true;
      } else {
        alert("INVALID: Month selected can't have < 1 day or > 30 days");
        return false;
      }
    } else if ([1, 3, 5, 7, 8, 10].includes(dob[1])) {
      if (dob[0] >= 1 && dob[0] <= 31) {
        return true;
      } else {
        alert("INVALID: Month selected can't have < 1 day or > 31 days");
        return false;
      }
    } else if (dob[1] === 2) {
      if (dob[0] >= 1 && dob[0] <= 28) {
        return true;
      } else {
        alert("INVALID: Month selected can't have < 1 day or > 28 days");
        return false;
      }
    }
  } else {
    alert("INVALID: Date of Birth is invalid");
    return false;
  }
};

// Validate if client Gender is valid
const genderValidator = () => {
  const dob = getClientGender();

  if (gender != null) {
    return true;
  } else {
    alert("Gender is Not Valid");
    return false;
  }
};

// Checks if both DOB and Gender are valid
const clientInfoValidator = () => {
  const dobIsValid = dobValidator();
  const genderIsValid = genderValidator();

  if (dobIsValid === true && genderIsValid === true) {
    console.log("Info is Valid");
    return true;
  } else {
    return false;
  }
};

// Listen for submit button
const submitForm = document
  .getElementById("submit_button")
  .addEventListener("click", clientInfoValidator);

// Calculate DOB's Day Of The Week - Formula in the canva assignment documentation, get as Index

// Takes DOB data from 'getClientDob':
//  CC - is the century digits. For example 1989 has CC = 19
//  YY - is the Year digits (1989 has YY = 89)
//  MM -  is the Month
//  DD - is the Day of the month
//  mod - is the modulus function ( % )

// Calculates day of the week using canva formula:
// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// Return day of the week as index

// Check if the Client is Male or Female and select dict / object  based on gender - if male , else female
// Select the Day of the week equal to our Clients Day of the week in dict - Use index calculated, validate if index is positive using modular operator
// Return the corresponding key to the day of the week in the selected dict - Define a function to return the data to the client, the Akan name
