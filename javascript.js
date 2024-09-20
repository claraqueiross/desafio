const form      = document.getElementById("form");
const username  = document.getElementById("username");
const email     = document.getElementById("email");
const password  = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {e.preventDefault();checkInputs();});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

                          // passando input(username),message("blabla") lá na função seErrorFor
  if (usernameValue === "") {setErrorFor(username, "O nome de usuário é obrigatório.");}  else {setSuccessFor(username);}

  if (emailValue === "") {setErrorFor(email, "O email é obrigatório.");} else 
  if (!checkEmail(emailValue)) {setErrorFor(email, "Por favor, insira um email válido.");} else {setSuccessFor(email);}

  if (passwordValue === "") {setErrorFor(password, "A senha é obrigatória.");} else 
  if (passwordValue.length < 7) {setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");} else {setSuccessFor(password);}

  if (passwordConfirmationValue === "") {setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");} 
  else 
  if (passwordConfirmationValue !== passwordValue) {setErrorFor(passwordConfirmation, "As senhas não conferem.");} 
  else {setSuccessFor(passwordConfirmation);}

  const formControls = form.querySelectorAll(".form-control"); //form-control é a div criada no html e o PONTO é a classe no css (class) - variavel recebe TUDO dentro desse FORM

  const formIsValid = [...formControls].every((formControl) => {return formControl.className === "form-control success";});
  //Esta parte cria um novo array a partir do array formControls. 
    // Isso é feito para garantir que estamos trabalhando com uma cópia do array original e não modificando-o diretamente.

  if (formIsValid) {console.log("O formulário está 100% válido!");} // só aparece no NODE
}

// Essa função faz trazer os erros EXATAMENTE ond ocorrem.. o small avalia so o pedaço do form que deu o erro.
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}