const socket = io();

const welcome = document.querySelector('#welcome');
const allMessages = document.querySelector('#all-messages');
const send = document.querySelector('#send-message');

const [_, user] = document.cookie.split('=');

send.addEventListener('click', () => {
  const message = document.querySelector('#message');
  if (message.value === '') return;

  const currentDate = new Date(Date.now());

  socket.emit('message', {
    user,
    message: message.value,
    currentDate: currentDate.toString().slice(0, 10),
  });

  message.value = '';
});

socket.on('message', (data) => {
  const { user, message, currentDate } = data;
  const msg = document.createRange().createContextualFragment(`
    <div class="message">
                
        <div class="image-container">
            <img src="/images/michi.jpeg">
        </div>

        <div class="message-body">
            
            <div class="user-info">
                <span class="username">${user}</span>
                <span class="time">${currentDate}</span>
            </div>

            <p>${message}</p>

        </div>
        
    </div>
    `);

  allMessages.append(msg);
});
