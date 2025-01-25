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
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(dob[1])) {
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

// Calculate DOB's Day Of The Week - Formula in the canva assignment documentation, get as Index
const calculateDayofWeek = () => {
  const dob = getClientDob();

  //  CC - is the century digit
  const CC = Math.floor(dob[2] / 100);
  //  YY - is the Year digits
  const YY = dob[2] % 100;
  //  MM -  is the Month
  const MM = dob[1];
  //  DD - is the Day of the month
  const DD = dob[0];

  // Calculate and return day of the week as index between 0-6
  const dayOfWeekCalc =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

  //   const dayOfWeek = Math.floor(((dayOfWeekCalc % 7) + 7) % 7);

  return Math.floor(((dayOfWeekCalc % 7) + 7) % 7);
};

// Select the Day of the week equal to our Clients Day of the week in dict - Use index calculated, validate if index is positive using modular operator
const genClientAkanName = () => {
  const gender = getClientGender();
  dayOfWeek = calculateDayofWeek();

  // Check if the Client is Male or Female and select dict / object  based on gender - if male , else female
  if (gender === "male") {
    if (dayOfWeek === 0) {
      return akanNamesMale[0];
    } else if (dayOfWeek === 1) {
      return akanNamesMale[1];
    } else if (dayOfWeek === 2) {
      return akanNamesMale[2];
    } else if (dayOfWeek === 3) {
      return akanNamesMale[3];
    } else if (dayOfWeek === 4) {
      return akanNamesMale[4];
    } else if (dayOfWeek === 5) {
      return akanNamesMale[5];
    } else if (dayOfWeek === 6) {
      return akanNamesMale[6];
    } else {
      alert("ERROR");
    }
  } else if (gender === "female") {
    if (dayOfWeek === 0) {
      return akanNamesFemale[0];
    } else if (dayOfWeek === 1) {
      return akanNamesFemale[1];
    } else if (dayOfWeek === 2) {
      return akanNamesFemale[2];
    } else if (dayOfWeek === 3) {
      return akanNamesFemale[3];
    } else if (dayOfWeek === 4) {
      return akanNamesFemale[4];
    } else if (dayOfWeek === 5) {
      return akanNamesFemale[5];
    } else if (dayOfWeek === 6) {
      return akanNamesFemale[6];
    } else {
      alert("ERROR");
    }
  }
};

// Return the corresponding key to the day of the week in the selected dict - Define a function to return the data to the client, the Akan name

// Listen for submit button
const submitForm = document
  .getElementById("submit_button")
  .addEventListener("click", calculateDayofWeek);
