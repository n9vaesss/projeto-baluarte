(function() {
  emailjs.init("52CEUEgskRSihaV-S"); 
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("celular").value;
  const message = document.getElementById("message").value;

  emailjs.send("gmailTeste", "template_qh1ynlo", {
    name: name,
    email: email,
    phone: phone,
    message: message
  })
  .then(() => {
    console.log("Mensagem enviada com sucesso! ✅")
    form.reset();
  })
  .catch((err) => {
    console.error("Erro:", err);
    console.log("Erro ao enviar mensagem ❌")
  });
});
