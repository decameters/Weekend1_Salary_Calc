$(document).ready(readyNow)

var monthlySalaryArray = [];

function readyNow() {
    // click runs the Employee object constructor function
    $('#submitButton').on('click', Employee);
    // this clears the fields -- is it shady to have two functions on a button click??
    $('#submitButton').click(function(){
        $('input[type="text"]').val('');
        $('input[type="number"]').val('');
    })
};

function Employee(firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = document.getElementById('firstName').value;
    this.lastName = document.getElementById('lastName').value;
    this.idNumber = document.getElementById('idNumber').value;
    this.jobTitle = document.getElementById('jobTitle').value;
    this.annualSalary = document.getElementById('annualSalary').value;

    // enters all the employee data in the appended table
    $('.salaryCalculatorTable').append('<tr>' +
    '<td>' + this.firstName + '</td>' +
    '<td>' + this.lastName + '</td>' +
    '<td>' + this.idNumber + '</td>' +
    '<td>' + this.jobTitle + '</td>' +
    '<td>' + this.annualSalary + '</td>' +
    '<td><button class="deleteButton"> X </button></td></tr>'
    );

    // calculates the monthly salary of each employee
    var totalMonthlySalary = parseInt(this.annualSalary / 12);

    monthlySalaryArray.push(totalMonthlySalary);
    addToMonthlyCostBox(monthlySalaryArray);

    // deletes Employee row
    $('.salaryCalculatorTable').on('click','.deleteButton', function() {
        // console.log('button clicked');
        $(this).parent().parent().remove();
    });
}

/* Stephanie helped me with this and it was referenced through W3 Schools.
Personally, I only partially understand why / how the reduce part works... the sumOfEachMonthlyPay
part makes sense to me. the addToMonlyCostBox function is a little wild/weird...*/

// function addToMonthlyCostBox(array){
//     var totalSalaries = 0;
//     for( var i = 0; i < array.length; i++ ){
//         totalSalaries += Number(array[i].annualSalary);

//         console.log(totalSalaries);
        
//     }
// }

// }
function sumOfEachMonthlyPay(total, addEmployeePay) {
    return total + parseInt(addEmployeePay);
}

function addToMonthlyCostBox() {
    document.getElementById('monthlySalary').innerHTML = monthlySalaryArray.reduce(sumOfEachMonthlyPay, 0);
}