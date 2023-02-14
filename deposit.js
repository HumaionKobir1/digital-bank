function depositBtn () {
    const depositField = document.getElementById('deposit-field').value;
    const newDepositAmount = parseFloat(depositField);

    const depositTotal = document.getElementById('deposit-total').innerText;
    const previousDepositTotal = parseFloat(depositTotal);
    const currentTotalDeposit = newDepositAmount + previousDepositTotal;
    document.getElementById('deposit-total').innerText = currentTotalDeposit;


    const balanceTotalElement = document.getElementById('balance-total').innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElement);

    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    document.getElementById('balance-total').innerHTML = currentTotalBalance;

    document.getElementById('deposit-field').value = '';
}
