function withdrawBtn () {
    const withdrawField = document.getElementById('withdraw-field').value;
    const newWithdrawAmount = parseFloat(withdrawField);

    document.getElementById('withdraw-field').value = '';    
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total').innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotal);

    const balanceTotalElment = document.getElementById('balance-total').innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElment);

    document.getElementById('withdraw-field').value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert("Your account doesn't have enough money");
        return;
    }

    const currentTotalWithdraw = newWithdrawAmount + previousWithdrawAmount;
    document.getElementById('withdraw-total').innerText = currentTotalWithdraw;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    document.getElementById("balance-total").innerText = newBalanceTotal;

}
