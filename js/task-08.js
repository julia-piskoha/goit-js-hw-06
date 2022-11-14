const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("Все поля должны быть заполнены!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });
  form.reset();
}
