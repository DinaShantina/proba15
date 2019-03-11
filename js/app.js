var budgetInput = document.getElementById("budget-input");
var expenseInput = document.getElementById("expense-input");
var amountInput = document.getElementById("amount-input");

var budgetAmount = document.getElementById("budget-amount");
var expenseAmount = document.getElementById("expense-amount");
var balanceAmount = document.getElementById("balance-amount");

var feedback = document.querySelector(".budget-feedback");
var expenseFeedback = document.querySelector(".expense-feedback");
var budgetForm = document.getElementById("budget-form");
var expenseForm = document.getElementById("expense-form");


function noAddBalance(e) {
    e.preventDefault();
    if (budgetInput.value === "" || budgetInput.value < 0) {
        feedback.style.display = "block";
        feedback.innerHTML = feedback.innerHTML.replace("budget feedback", "Value Cannot be empty or Negative");
    } else {
        budgetAmount.innerHTML = budgetInput.value;
        balanceAmount.innerHTML = budgetInput.value;
        budgetForm.reset();
    }
};
budgetForm.addEventListener("submit", noAddBalance);

document.addEventListener("click", function () {
    feedback.style.display = "none";
    expenseFeedback.style.display = "none";
});

var list = document.querySelector(".list");
var table = document.createElement("table");
table.classList.add("table");
list.appendChild(table);
var tbody = document.createElement("tbody");
var tbody2 = document.createElement("tbody");
tbody.classList.add("w-100");
tbody.classList.add("pl-5");
table.appendChild(tbody);
tbody.innerHTML += `<tr><th> Expense Title</th>
<th class="pl-5 w-100">Expense Value</th><th></th></tr>`;
tbody.style.display = "none";
function noAddExpensise(e) {
    e.preventDefault();
    if (expenseInput.value === "" || amountInput.value === "") {
        expenseFeedback.style.display = "block";
        expenseFeedback.innerHTML = expenseFeedback.innerHTML.replace("expense feedback", "Value Cannot be empty");
    } else {
        var tr = document.querySelector('tr');
        var row_id = 1;
        row_id++;
        tr.id = "id" + row_id;
        expenseAmount.innerHTML = parseInt(amountInput.value) + parseInt(expenseAmount.innerText);
        balanceAmount.innerHTML = parseInt(budgetAmount.innerText) - parseInt(expenseAmount.innerText);
        tbody.innerHTML += `<tr><td>` + expenseInput.value + `</td> <td>` + amountInput.value + `</td>
        <td><i class="far fa-edit edit-icon"></i></td>
        <td><i class="far fa-trash-alt delete-icon"></i></td></tr>`;
        tbody.style.display = "block";
        expenseForm.reset();

    }
};

expenseForm.addEventListener("submit", noAddExpensise);

var tr = document.querySelector("tr");
var td = document.querySelector("td");
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('delete-icon')) {
        console.log("ima");
        var rowCount = table.rows.length;
        table.deleteRow(rowCount - 1);
    }
    if (rowCount === 2) {
        console.log(e);
        tbody.style.display = "none";
    }
});
var rowCount = table.rows.length;

document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('edit-icon')) {
        var rowCount = table.rows.length;
        table.deleteRow(rowCount - 1);
        console.log("ima");
        expenseInput.value = tr.id.td;
        // amountInput.value = parseInt(this.amountInput);
        if (rowCount === 2) {
            console.log(e);
            tbody.style.display = "none";
        }
    };
});
// document.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('edit-icon')) {
//         var rowCount = table.rows.length;
//         table.deleteRow(rowCount - 1);
//         console.log("ima");
//         expenseInput.value = tr.id(expenseInput.value);
//         // amountInput.value = parseInt(this.amountInput);
//         if (rowCount === 2) {
//             console.log(e);
//             tbody.style.display = "none";
//         }
//     };
// });


// document.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('edit-icon')) {
//         console.log(this.parent);
//         var rowCount = table.rows.length;
//         table.deleteRow(rowCount - 1);
//         if (expenseInput.value === "" && amountInput.value === "") {
//             var table = document.getElementById("table"), rIndex;
//             rIndex = this.rowIndex;
//             console.log(rIndex);
//             table.rows[rIndex].cells[0].innerHTML = document.getElementById("fname").value;
//             table.rows[rIndex].cells[1].innerHTML = document.getElementById("lname").value;

//             expenseInput.value = this.cells[0].innerHTML;
//             amountInput.value = this.cells[1].innerHTML;
//         }
//     };

// });




