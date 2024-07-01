const login = document.querySelector('#login');

login.addEventListener('click', (e) => {
  e.preventDefault();
  const user = document.querySelector('#username').value;
  if (user != '') {
    document.cookie = `username=${user}`;
    document.location.href = '/';
  } else {
    alert('Write a name');
  }
});
