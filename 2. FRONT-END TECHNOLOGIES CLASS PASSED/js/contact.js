function updateContactInfo() {
  var email = prompt("What is your email?");
  var phoneNumber = prompt("What is your phone?");
  var address = prompt("What is your address?");

//logs the inserted user-input to console
console.log("From: " + email);
console.log("Contact: " + parseInt(phoneNumber));
console.log("Address: " + address);

 //email-validater checkes if "@" and "." is there for it to be a valid email
if (!/[@.]/.test(email)) {
    alert("You have entered an invalid email address!");
    return;
    }
//number-validater to check if its a number
if (isNaN(phoneNumber) === true) {
    alert("You have entered an invalid phone-number!");
    return;
}

//finding the correct element by using jQuery-selectors and replacing content by using .text-method.
$(".row.mt-5 > .col-md-4:eq(0) .text-center > .text-muted").text(phoneNumber);
$(".row.mt-5 > .col-md-4:eq(1) .text-center > .text-muted").text(email);
$(".row.mt-5 > .col-md-4:eq(2) .text-center > .text-muted").text(address);
}

//finds the respective button in the HTML and waiting for mouseclick to issue function: updateContactInfo
document.getElementById("buttonClick").addEventListener("click",updateContactInfo);




/* 
Create a ‘contact.js’ file in the correct folder. OK

In this file, you must create a single function with the following 3 variables:

email OK
telephone_number OK
address OK
 In the index.html file, in the ‘contact’ section, add a Button. OK

When this button is clicked, the following should happen in the function created above:

1. Ask the user for information.OK

You must store this information in the 3 variables created in the contact.js file. 
Make sure that data is received from the user input, and that it is in the correct
format (e.g., make sure the user enters an email address containing both a '@' and '.' ).OK

 2. Change the current contact information in the HTML file 
 (email, telephone number, and address) to the input data from these 3 new variables. 
This must be done using jQuery selectors, without adding more 
HTML IDs to the ‘contact’ section. (The HTML file cannot be changed for this) OK

 3. Print the data entered to the console in the following format:

From: email@emailaddress.co.za
Contact: 0458754125
Address: 12 Smith Road, John Park. OK */