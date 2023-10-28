document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        // Form is valid, reset the form and redirect
        form.reset();
        window.location.href = "index.html";
      }
    });
  

    function validateForm() {
      let valid = true;
  
      // Reset error messages
      resetErrors();
  
      // Validate First Name in real-time
      const firstNameInput = document.getElementById("firstName");
      const errorFirstName = document.getElementById("error_firstName");
      const namePattern = /^[A-Za-z\s]+$/; // Only allow letters and spaces
      if (!namePattern.test(firstNameInput.value)) {
        errorFirstName.style.display = "block";
        valid = false;
      }
  
      // Validate Email in real-time
      const emailInput = document.getElementById("emailId");
      const errorEmail = document.getElementById("error_emailId");
      const emailPattern = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
      if (!emailPattern.test(emailInput.value)) {
        errorEmail.style.display = "block";
        valid = false;
      }
  
      // Validate Password in real-time
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      const passwordMessage = document.getElementById("passwordMessage");
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Requires at least one digit, one lowercase, one uppercase, and a minimum length of 8 characters
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        passwordMessage.style.color = "red";
        passwordMessage.textContent = "Passwords do not match";
        valid = false;
      } else if (!passwordPattern.test(passwordInput.value)) {
        passwordMessage.style.color = "red";
        passwordMessage.textContent = "Password must meet criteria";
        valid = false;
      } else {
        passwordMessage.style.color = "green";
        passwordMessage.textContent = "Password is valid";
      }
  
      return valid;
    }


  
    function resetErrors() {
      const errorElements = document.getElementsByClassName("error");
      for (const errorElement of errorElements) {
        errorElement.style.display = "none";
      }
    }
  
    // Add real-time validation for the name field
    const firstNameInput = document.getElementById("firstName");
    firstNameInput.addEventListener("input", function () {
      const errorFirstName = document.getElementById("error_firstName");
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(firstNameInput.value)) {
        errorFirstName.style.display = "block";
      } else {
        errorFirstName.style.display = "none";
      }
    });

    document.addEventListener("DOMContentLoaded", function() {
      const passwordInput = document.getElementById("passwordInput");
      const passwordValidation = document.getElementById("passwordValidation");
      const loginForm = document.getElementById("loginForm"); // reference to the form
  
      passwordInput.addEventListener("input", function() {
          validatePassword();
      });
  
      loginForm.addEventListener("submit", function(event) {
          if (!validatePassword()) {
              event.preventDefault(); // prevents the form submission
          }
      });
  
      function validatePassword() {
          const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Sample regex
          if (!regex.test(passwordInput.value)) {
              passwordValidation.textContent = "Password must contain at least 1 digit, 1 lowercase, 1 uppercase, and be at least 8 characters long.";
              return false; // invalid password
          } else {
              passwordValidation.textContent = "";
              return true; // valid password
          }
      }
  });
  
    // Add real-time validation for the email field
    const emailInput = document.getElementById("emailId");
    emailInput.addEventListener("input", function () {
      const errorEmail = document.getElementById("error_emailId");
      const emailPattern = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
      if (!emailPattern.test(emailInput.value)) {
        errorEmail.style.display = "block";
      } else {
        errorEmail.style.display = "none";
      }
    });
  
    // Add real-time validation for the password field
    const passwordInput = document.getElementById("password");
    passwordInput.addEventListener("input", function () {
      const passwordMessage = document.getElementById("passwordMessage");
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
      if (!passwordPattern.test(passwordInput.value)) {
        passwordMessage.style.color = "red";
        passwordMessage.textContent = "At least one numeric digit (0-9).At least one lowercase letter (a-z).At least one uppercase letter (A-Z).A total length of 8 characters or more.";
      } else {
        passwordMessage.style.color = "green";
        passwordMessage.textContent = "Password is valid";
      }
    });
  
    // Add real-time validation for the confirm password field
    const confirmPasswordInput = document.getElementById("confirmPassword");
    confirmPasswordInput.addEventListener("input", function () {
      const passwordMessage = document.getElementById("passwordMessage");
      const passwordInput = document.getElementById("password");
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        passwordMessage.style.color = "red";
        passwordMessage.textContent = "Passwords do not match";
      } else {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput.value)) {
          passwordMessage.style.color = "green";
          passwordMessage.textContent = "Password is valid";
        } else {
          passwordMessage.style.color = "red";
          passwordMessage.textContent = "Password must meet criteria";
        }
      }
    });
  });
  