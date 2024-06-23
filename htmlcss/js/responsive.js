document.getElementById('icon').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
    
});

document.getElementById('toggle-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('psd');
    var toggleIcon = document.querySelector('#toggle-password i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('ri-eye-off-line');
        toggleIcon.classList.add('ri-eye-line');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('ri-eye-line');
        toggleIcon.classList.add('ri-eye-off-line');
    }
});










