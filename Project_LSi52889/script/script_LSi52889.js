function runValidate(form){
    if(validateCustomerName(form) && validateCustomerEmail(form) 
    && validateCustomerAddress(form) && validateContactNumber(form) && validateCustomerOrder(form))
        return true;
    else
        return false;        
} // end runValidate function

// functions for First fieldset Customer Details ************************************************************************

// function validateCustomerName to validate the Customer Name 
function validateCustomerName(form){
    var customerName = form.elements["customerName"];
    
    if(customerName.validity.valueMissing){                 
        // check whether the input is provided or not 
        // and set the custom message
        customerName.setCustomValidity("Please enter your name");
        return false;
    }
    else{
        customerName.setCustomValidity("");
        return true;
    }
} 
// end validateCustomerName function

// function validateCustomerEmail to validate the Email
function validateCustomerEmail(form){
    var customerEmail = form.elements["customerEmail"];

    if(customerEmail.validity.valueMissing){        
        customerEmail.setCustomValidity("Please enter your email address");
        return false;
    }
    else if(customerEmail.validity.patternMismatch){
        // check whether the input provided match 
        // the pattern or not
        customerEmail.setCustomValidity("Email is not in a correct format");
        return false;
    }
    else{
        customerEmail.setCustomValidity("");
        return true;
    }
} 
// end validateCustomerEmail function

// function validateCustomerAddress to validate the address
function validateCustomerAddress(form){
    var customerAddress = form.elements["customerAddress"];
    
    if(customerAddress.validity.valueMissing){                 
        // check whether the input is provided or not 
        // and set the custom message
        customerAddress.setCustomValidity("Please enter your address");
        return false;
    }
    else{
        customerAddress.setCustomValidity("");
        return true;
    }
} 
// end validateCustomerAddress function


// function validateContactNumber to validate the Contact number
function validateContactNumber(form){
    var contactNumber = form.elements["contactNumber"];
    
    if(contactNumber.validity.valueMissing){        
        contactNumber.setCustomValidity("Please enter your contact number");
        return false;
    }
    else if(contactNumber.validity.patternMismatch){
        // check whether the input provided match 
        // the pattern or not
        contactNumber.setCustomValidity('Please enter the correct contact number format, i.e., "xxx-xxx-xxxx"');
        return false;
    }
    else{
        contactNumber.setCustomValidity("");
        return true;
    }
} 
// end validateContactNumber function

// function validateCustomerOrder to validate the order
function validateCustomerOrder(form){
    var customerOrder = form.elements["customerOrder"];
    
    if(customerOrder.validity.valueMissing){                 
        // check whether the input is provided or not 
        // and set the custom message
        customerOrder.setCustomValidity("Please enter your order");
        return false;
    }
    else{
        customerOrder.setCustomValidity("");
        return true;
    }
} 
// end validateCustomerOrder function




// Function for third fieldset to set styles in fourth fieldset

function changeImage(obj){
    var target = document.getElementById("image_target");
    target.src = obj.value;
}
function setStyle(form){
    var checkboxes = form.elements["style"];
    var target = document.getElementById("image_target");

    // we want to get all the values from the checked checkboxes
    // and save it to styles var
    let styles = "";
    for(let check_node of checkboxes){
        if(check_node.checked) // check if the checkbox is checked
            styles += check_node.value + ";"; // append the stylesheet rule
    }

    // apply the style to target
    target.style = styles;

    let text = form.elements["text"].value;
    let textTarget = document.getElementById("text_target");
    textTarget.innerText = text;

}

// function to get information from user in first fieldset to display in the second fieldset
function getInformation(form) {    
    var value1 = form.elements["customerName"].value;
    var value2 = form.elements["customerEmail"].value;
    var value3 = form.elements["customerAddress"].value;
    var value4 = form.elements["contactNumber"].value;
    var value5 = form.elements["customerOrder"].value;
    var informationTarget = document.getElementById("information_target");


    var result = "Customer Name : " + value1 + "\nCustomer Email : " + value2 + "\nCustomer Address : " + value3 + "\nCustomer Contact Number : " + value4 + "\nCustomer Order : " + value5 ;

    informationTarget.innerText = result;
}

