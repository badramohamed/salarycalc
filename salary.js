console.log('in salary ')

$(document).ready(readyNow)

let totalMonthly= [];

function readyNow(){
    console.log('in readyNow')
   
    $('#submitBtn').on('click', employeeSalary);
   
    $('#employeeSal').on('click', '#deleteBtn', deleteInput);



    
    function employeeSalary(){
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let id = $('#id').val();
        let title = $('#title').val();
        let annualSalary = $('#annualSalary').val();
    
    }}