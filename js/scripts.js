function CreateAccount(name,currentAmount) {
  this.name = name,
  this.currentAmount = currentAmount
}

CreateAccount.prototype.withdrawal = function (withdrawalAmount) {
  return this.currentAmount -= withdrawalAmount;
}

CreateAccount.prototype.deposit = function (depositAmount) {
  return newAccount.currentAmount += depositAmount;
}

var newAccount;

$(document).ready(function() {
  $("form#registerForm").submit(function (event) {
    event.preventDefault();

    var nameInput = $("#nameInput").val();
    var initialDeposit = parseFloat($("#initialDepositInput").val());

    newAccount = new CreateAccount(nameInput, initialDeposit);

    $("#nameInput").val("");
    $("#initialDepositInput").val("");

    $("#balanceAmount").append(newAccount.currentAmount);
  });

  $("form#depositForm").submit(function (event) {
    event.preventDefault();

    var depositInput = parseFloat($("#depositInput").val());
    newAccount.deposit(depositInput);

    $("#balanceAmount").empty().append(newAccount.currentAmount);
    $("#depositInput").val("");
  });

  $("form#withdrawalForm").submit(function (event) {
    event.preventDefault();

    var withdrawalInput = parseFloat($("#withdrawalInput").val());
    newAccount.withdrawal(withdrawalInput);

    $("#balanceAmount").empty().append(newAccount.currentAmount);
    $("#withdrawalInput").val("");
  });
});
