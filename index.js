// Container
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
})

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

