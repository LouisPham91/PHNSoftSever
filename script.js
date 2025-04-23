document.addEventListener('DOMContentLoaded', function () {

  // Xử lý sự kiện Forgot your password
  const forgotPasswordLink = document.querySelector('.forgot-password a');

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function (event) {
      event.preventDefault(); // Ngừng hành động mặc định của liên kết

      // Hiển thị một hộp thoại nhập email
      const email = prompt('Please enter your email address to reset your password:');

      // Kiểm tra nếu người dùng nhập email hợp lệ
      if (email && validateEmail(email)) {
        alert('A password reset link has been sent to your email address.');
      } else if (email) {
        alert('Please enter a valid email address.');
      } else {
        alert('Please enter your email address.');
      }
    });
  }

  // Xử lý sự kiện Login
  const loginForm = document.querySelector('#loginForm'); // Lấy form qua id

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Ngừng hành động mặc định của form (ngừng reload trang)

      const email = document.querySelector('#email').value; // Lấy email từ input
      const password = document.querySelector('#password').value; // Lấy password từ input

      // Kiểm tra thông tin đăng nhập
      if (validateLogin(email, password)) {
        alert('Login successful!');
        // Chuyển hướng hoặc thực hiện hành động sau khi đăng nhập thành công
      } else {
        alert('Invalid email or password.');
      }
    });
  }
});

// Hàm kiểm tra tính hợp lệ của email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Hàm kiểm tra thông tin đăng nhập hợp lệ
function validateLogin(email, password) {
  // Đây chỉ là kiểm tra ví dụ, trong thực tế bạn cần so sánh với cơ sở dữ liệu
  const validEmail = 'user@example.com';  // Ví dụ email hợp lệ
  const validPassword = 'password123';    // Ví dụ mật khẩu hợp lệ

  return email === validEmail && password === validPassword;
}
