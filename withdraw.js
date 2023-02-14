function withdrawBtn () {
    const withdrawField = document.getElementById('withdraw-field').value;
    const newWithdrawAmount = parseFloat(withdrawField);

    const withdrawTotal = document.getElementById('withdraw-total').innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotal);
    const currentTotalWithdraw = newWithdrawAmount + previousWithdrawAmount;
    document.getElementById('withdraw-total').innerText = currentTotalWithdraw;

    document.getElementById('withdraw-field').value = '';
}