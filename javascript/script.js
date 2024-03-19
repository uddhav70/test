const chatContainer = document.getElementById('chat-container');
const chatIcon = document.getElementById('chat-icon');

chatIcon.addEventListener('click', () => {
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';
});