
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextimg();
}, 5000)

function nextimg(){
    count++
    if(count >4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
    
}





let count2 = 5;
document.getElementById("radio5").checked = true;

setInterval(function() {
    nextimg2();
}, 5000);

function nextimg2() {
    count2++;
    if (count2 > 8) {
        count2 = 5;
    }
    document.getElementById("radio" + count2).checked = true;
}


function toggleState(sectionId) {
  const section = document.getElementById(sectionId);
  const ul = section.querySelector('.state-list');
  const icon = section.querySelector('i');
  const span = section.querySelector('span');
  if (ul.style.display === 'block') {
      ul.style.display = 'none';
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      span.classList.remove('orange');
  } else {
      ul.style.display = 'block';
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      span.classList.add('orange');
  }
}



// Referências aos elementos do formulário
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
form.addEventListener('submit', function(event) {
    // Valida todos os campos ao submeter o formulário
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio se houver erros
        alert('Por favor, corrija os erros antes de enviar!');
    }
});

// Evento do botão "Fazer o teste agora"
const button = document.getElementById("testebt");
button.addEventListener('click', function() {
    window.location.href = 'https://inscricao.prozeducacao.com.br/teste-vocacional-lp/';
});
