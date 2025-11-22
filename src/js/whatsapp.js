const btn = document.getElementById("whatsappButton");
const chatBox = document.getElementById("whatsappChat");

btn.addEventListener("click", () => {
chatBox.classList.toggle("hidden");
});

function sendWhatsAppMessage(message) {
const phoneNumber = "5511947802307"; // coloque seu número no formato: 55 + DDD + número
const encodedMsg = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
window.open(whatsappUrl, "_blank");
}
