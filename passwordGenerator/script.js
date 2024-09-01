const passwordCont = document.querySelector('.password-cont input');
const generateButton = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.password-cont img');
const info = document.querySelector('.info');

function generateRandomPassword() {
    info.innerHTML = '';
    let password = '';
    const size = 12;
    const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const small = 'abcdefghijklmnopqrstuvwxyz';
    const symbol = '`!@#$%^&*()_+}{|:"?><';
    const number = '0123456789';
    const allCharacter = capital + small + symbol + number;

    // Ensure at least one character from each category
    password += capital[Math.floor(Math.random() * capital.length)];
    password += small[Math.floor(Math.random() * small.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    // Fill the rest of the password with random characters from all categories
    while (password.length < size) {
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
    }

    // Optionally, shuffle the password to randomize the order of characters
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    passwordCont.value = password;
}

function copyToClipboard() {
    passwordCont.select();
    // For older browsers
    document.execCommand('copy');
    
    // For modern browsers
    navigator.clipboard.writeText(passwordCont.value).then(() => {
        info.innerHTML="copied successfully!!";
    }).catch(err => {
        console.error('Failed to copy!', err);
    });
}

generateButton.addEventListener('click', generateRandomPassword);
copyBtn.addEventListener('click', copyToClipboard);
