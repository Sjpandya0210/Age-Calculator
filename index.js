/* We want 
1. when we enter the date it has to be 1-31
2. if the month has only 30 days we want to make sure the day has been entered correctly
3. if the year was leap then it has to have 29 days in feb 
4. only 12 months
5. the years are 1900 to 2023
6. no future years or current year but future months or days
7. if error occure, we want to show that error, by displaying please enter right day, month and year.

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");
const daySelect = document.querySelector("#day");

const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

 // Create variable to hold new number of days to inject
let dayNum; 
if (months = [ "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December"] ){
        dayNum = 31;
      }else if (months = ["February", "April","June","September","November"]){
        dayNum = 30;
      }else{
       // If month is February, calculate whether it is a leap year or not
       const year = yearSelect.value;
       const isLeap = new Date(year, 1, 29).getMonth() === 1;
       dayNum = isLeap ? 29 : 28;    
      }
      */
      function calculateAge() {
        // Get the values from the inputs
        //The 10 in the parseInt function represents the radix or base of the numeral system to be used.
        const day = parseInt(document.getElementById('day').value, 10);
        const month = parseInt(document.getElementById('month').value, 10);
        const year = parseInt(document.getElementById('year').value, 10);
      
        // Validate the inputs (you may want to add more robust validation)
        if (isNaN(day) || isNaN(month) || isNaN(year)||  day < 1 || day > 31 ||
        month < 1 || month > 12 ||
        year < 1900 || year > 2023) {
          document.getElementById('result').innerHTML = 'Please enter valid values.';
          return;
        }
// Check for months with 30 days
  if ([4, 6, 9, 11].includes(month) && day > 30) {
    document.getElementById('result').innerHTML = 'Please enter a valid day for this month.';
    return;
  }
  // Check for February in a leap year
  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      // Leap year
      if (day > 29) {
        document.getElementById('result').innerHTML = 'Please enter a valid day for February in a leap year.';
        return;
      }
    } else {
      // Non-leap year
      if (day > 28) {
        document.getElementById('result').innerHTML = 'Please enter a valid day for February.';
        return;
      }
    }
  }

     // Create a Date object with the provided values
    const dob = new Date(year, month - 1, day);
      
        // Calculate the age
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthsDiff = today.getMonth() - dob.getMonth();
        const daysDiff = today.getDate() - dob.getDate();

          // Check if the birthday for this year has occurred
// Adjust age based on months and days
if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    age--;
  }
   // Display the result
   document.getElementById('result').innerHTML = 'Your age is: ' + age + ' years, ' + monthsDiff + ' months, and ' + daysDiff + ' days old.';
}