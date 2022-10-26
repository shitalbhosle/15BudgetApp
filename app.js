//header selector
let expense = document.getElementById("total-expense");
let available = document.getElementById("available-balance");
let totalInc = document.getElementById("total-income");

//income

let desc = document.getElementById("income-desc");
let incAmount = document.getElementById("income-amount");
let incBtn = document.getElementById("inc-btn");

//expense
let expDesc = document.getElementById("exp-desc");
let expAmount = document.getElementById("exp-amount");
let expBtn = document.getElementById("exp-btn");
// display income

let displayInc = document.getElementById("display-income");
let displayExp = document.getElementById("display-expense");

let availableBalanceAmount = 0;
let totalIncome = 0;
incBtn.addEventListener("click", function () {
  //handling available balance
  let amount = parseInt(incAmount.value);
  availableBalanceAmount = availableBalanceAmount + amount;
  available.innerHTML = availableBalanceAmount;

  
  // handling total income

  totalIncome = totalIncome + amount;
  totalInc.innerHTML = totalIncome;
  incAmount.value = '';
  
  //entry
  let incomeItem = `<article class="my-4 py-2 bg-[#fff] text-black">
    <div class="flex justify-between px-4">
      <h3>${desc.value}</h3>
      <h3>${amount}</h3>
    </div>
  </article>`;
  displayInc.insertAdjacentHTML("beforeend", incomeItem);
  desc.value = '';
});

// Expenses
let totalExpenses = 0;
expBtn.addEventListener("click", function () {
  let expValue = parseInt(expAmount.value);
  totalExpenses += expValue;
  expense.innerHTML = totalExpenses;

  availableBalanceAmount = totalIncome - totalExpenses;
  available.innerHTML = availableBalanceAmount;

  let expenseItem = `<article class="my-4 py-2 bg-[#fff] text-black">
  <div class="flex justify-between px-4">
    <h3>${expDesc.value}</h3>
    <h3>${expValue}</h3>
  </div>
</article>`;
  displayExp.insertAdjacentHTML("beforeend", expenseItem);

  expDesc.value = '';
  expAmount.value = '';
});
