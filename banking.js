// deposit section...

document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit ammount
    const depositInput = document.getElementById('deposit-input');
    const depositInputAmount = parseFloat(depositInput.value);
    depositInput.value = '';

    const previewsValue = document.getElementById('previews');
    const previewsAmount = parseFloat(previewsValue.innerText);

    previewsValue.innerText = depositInputAmount + previewsAmount;

    const previewsBalance = document.getElementById('previews-balance');
    const previewsBalanceAmount = parseFloat(previewsBalance.innerText);

    previewsBalance.innerText = previewsBalanceAmount + depositInputAmount;

})

// withdraw section..

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmount = parseFloat(withdrawInput.value);
    console.log(withdrawInputAmount)
    withdrawInput.value = '';

    const previewsWithdraw = document.getElementById('previews-withdraw');
    const previewsWithdrawAmount = parseFloat(previewsWithdraw.innerText);

    previewsWithdraw.innerText = withdrawInputAmount + previewsWithdrawAmount;

    let newWithdraw =withdrawInputAmount +previewsWithdrawAmount;

    const previewsBalance = document.getElementById('previews-balance');
    const previewsBalanceAmount = parseFloat(previewsBalance.innerText);

    previewsBalance.innerText = previewsBalanceAmount - newWithdraw;


})

