const showHiddenInput = (inputOverlay, inputPass, inputIcon) =>{
    const overlay = document.getElementById(inputOverlay),
        input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon);
    iconEye.addEventListener('click', () =>{
        if(input.type === 'password'){
            input.type = 'text';
            //iconEye.classList.add('bx-show');
            iconEye.classList.add('fa-eye-slash');
        }else{
            input.type = 'password';
            //iconEye.classList.remove('bx-show');
            iconEye.classList.remove('fa-eye-slash');

        }
        overlay.classList.toggle('overlay-content')
    })
}
showHiddenInput('input-overlay', 'input-pass', 'input-icon');