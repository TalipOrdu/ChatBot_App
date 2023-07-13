document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function () {
        const message = userInput.value.trim();
        if (message !== "") {
            appendMessage("User: " + message);
            userInput.value = "";
            // Perform further actions or send the message to your chatbot backend
        }
    });

    function appendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    }
});