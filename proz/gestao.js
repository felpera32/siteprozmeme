let currentSlide = 0;
const slides = document.querySelectorAll('.image-carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exit-left', 'enter-right');
        if (i === index) {
            slide.classList.add('active', 'enter-right');
        } else if (i === currentSlide) {
            slide.classList.add('exit-left');
        }
    });
    currentSlide = index;
}

function nextSlide() {
    let nextSlideIndex = (currentSlide + 1) % slides.length;
    showSlide(nextSlideIndex);
}

function prevSlide() {
    let prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlideIndex);
}












const nomeInput = document.getElementById("nomeInput");
const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");
const estadoInput = document.getElementById("estadoInput");

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const stateError = document.getElementById('stateError');

const form = document.getElementById('registrationForm');

// Função para validar o nome
function validateName() {
    const nameValue = nomeInput.value;
    if (nameValue.length < 3) {
        nameError.style.display = 'inline';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

// Função para validar o email
function validateEmail() {
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        emailError.style.display = 'inline';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

// Função para validar o telefone
function validatePhone() {
    const phoneValue = telefoneInput.value;
    const phonePattern = /^[0-9]{10,11}$/; // Aceita 10 ou 11 dígitos
    if (!phonePattern.test(phoneValue)) {
        phoneError.style.display = 'inline';
        return false;
    } else {
        phoneError.style.display = 'none';
        return true;
    }
}

// Função para validar o estado
function validateState() {
    const stateValue = estadoInput.value;
    const statePattern = /^[A-Z]{2}$/i; // Aceita 2 letras (UF)
    if (!statePattern.test(stateValue)) {
        stateError.style.display = 'inline';
        return false;
    } else {
        stateError.style.display = 'none';
        return true;
    }
}

// Função para validar todo o formulário
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isStateValid = validateState();

    // Verifica se todos os campos são válidos
    return isNameValid && isEmailValid && isPhoneValid && isStateValid;
}

// Evento de submissão do formulário
form.addEventListener('submit', function (event) {
    // Valida todos os campos ao submeter o formulário
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio se houver erros

    }
});
