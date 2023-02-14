function depositBtn () {
    const depositField = document.getElementById('deposit-field').value;
    const depositAmount = parseFloat(depositField);

    const depositTotal = document.getElementById('deposit-total').innerText;
    const TotalDepositAmount = parseFloat(depositTotal);
    const totalDeposit = depositAmount + TotalDepositAmount;
    document.getElementById('deposit-total').innerText = totalDeposit;

    document.getElementById('deposit-field').value = '';
}

function withdrawBtn () {
    const withdrawField = document.getElementById('withdraw-field').value;
    const
}