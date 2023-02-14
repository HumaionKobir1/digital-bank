function LoginBtn () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
//   const bannerArea = document.getElementById('banner-area');
//   bannerArea.style.display = 'none';

    // Danger: DO NOT VERIFY email password on the client side
    if (email === 'humaionkobir@gmail.com' && password === '12345678'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid user');
    }
}

    


