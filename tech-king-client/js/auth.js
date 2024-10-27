$('#login-form').on('submit', function (e) {
  e.preventDefault();
  const username = $('#username').val();
  const password = $('#password').val();

  $.ajax({
    url: 'http://localhost:8000/api/login/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ username, password }),
    success: function (response) {
      localStorage.setItem('access', response.access);
      localStorage.setItem('refresh', response.refresh);
      alert('Login successful!');
      window.location.href = 'catalog.html';
    },
    error: function (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
  });
});
