// Container
const calculator_box = document.getElementById("calculator_box");
const result_box = document.getElementById("result_box")
const empty_result = document.getElementsByClassName("empty_result")[0];
const completed_result = document.getElementsByClassName("completed_result")[0];

// Input
const mortgage_amount = document.getElementById("mortgage_amount");
const mortgage_term = document.getElementById("mortgage_term");
const interest_rate = document.getElementById("interest_rate");
const mortgage_type_input = document.getElementsByName("mortgage_type");

// Label
const mortgage_type_repayment_label = document.getElementById("mortg_type_repayment_label");
const mortgage_type_interest_label = document.getElementById("mortgage_type_interest_label");

// When the page is loaded
window.addEventListener("load", (e) => {
    empty_result.style.display = "block";
    completed_result.style.display = "none";
    set_div_height();
})

// Set the two container to the same height
function set_div_height(){
    if(calculator_box.offsetHeight != result_box.offsetHeight){
        result_box.style.height = calculator_box.offsetHeight + 'px';
    }
}

// Clear All button 
const clear_all = document.getElementById("clear_all_button");
clear_all.addEventListener("click", (e) => {
    // Clear input
    mortgage_amount.value = "";
    mortgage_term.value = "";
    interest_rate.value = "";
    mortgage_type_input[0].checked = mortgage_type_input[1].checked = false;

    // Active State for label
    mortgage_type_repayment_label.style.backgroundColor = "white";
    mortgage_type_interest_label.style.backgroundColor = "white";
})

// Active state for mortgage type
mortgage_type_input[0].addEventListener("click", (e) => {
    mortgage_type_repayment_label.style.backgroundColor = "hsl(61, 70%, 52%, 50%)";
    mortgage_type_interest_label.style.backgroundColor = "white";
})
mortgage_type_input[1].addEventListener("click", (e) => {
    mortgage_type_repayment_label.style.backgroundColor = "white";
    mortgage_type_interest_label.style.backgroundColor = "hsl(61, 70%, 52%, 50%)";
})

// Calculate repayment
const calculate_button = document.getElementById("calculate_button");
const form = document.getElementById("form");
const required_message = "This field is required";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validate()){
        calculate();
        show_result();
    }
})

function validate(){

}

function calculate(){
    console.log("calculate");
}

function show_result(){

}

const mortgage_amount_error = document.getElementById("mortgage_amount_error");
const mortgage_term_error = document.getElementById("mortgage_term_error");
const interest_rate_error = document.getElementById("interest_rate_error");
const mortgage_type_error = document.getElementById("mortgage_type_error");

mortgage_amount_error.innerHTML = required_message;
// mortgage_term_error.innerHTML = required_message;
interest_rate_error.innerHTML = required_message;
mortgage_type_error.innerHTML = required_message;