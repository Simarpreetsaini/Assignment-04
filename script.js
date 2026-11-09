
$(document).ready(function() {

   
    $("#togglePassword").click(function() {

        let passwordField = $("#password");

        if (passwordField.attr("type") === "password") {

            passwordField.attr("type", "text");
            $("#togglePassword").text("Hide");

        } else {

            passwordField.attr("type", "password");
            $("#togglePassword").text("Show");

        }

    });



    $("#myForm").submit(function(event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let password = $("#password").val();

        let errorMessage = "";


        if (name === "" || email === "" ||
            phone === "" || password === "") {

            errorMessage = "Please fill in all fields.";

        }

        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            errorMessage = "Please enter a valid email address.";

        }


        else if (!/^[0-9]{10}$/.test(phone)) {

            errorMessage = "Phone number must contain exactly 10 digits.";

        }


        else if (
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[0-9]/.test(password)
        ) {

            errorMessage = "Password must have at least 8 characters, one uppercase letter, one lowercase letter and one number.";

        }



        if (errorMessage !== "") {

            $("#message")
                .removeClass("success")
                .addClass("error")
                .text(errorMessage)
                .show();

        } else {

            $("#message")
                .removeClass("error")
                .addClass("success")
                .text("Registration successful! Welcome, " + name + "!")
                .show();


            $("#myForm")[0].reset();

            $("#togglePassword").text("Show");

        }

    });

});
