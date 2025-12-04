document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // alert("form Submitted");

        const fullname=document.getElementById('fullname').value;
        const email=document.getElementById('email').value;
        const age = parseInt(document.getElementById('age').value);
        const pass=document.getElementById('pass').value;
        const phone=document.getElementById('phone').value;

        if (!fullname||!email || !pass) {
            alert("you need a name and email, and password");
            return;
        }

         if(!age|| age<18 || age>99) {
             alert("you need to be between 18 and 99");
             return;
        }

        const formData = {
            name: fullname,
            email: email,
            age: age,
            password: pass
        };
        console.log(formData);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "success.json", true);
        xhr.setRequestHeader("content-Type", "application/JSON;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("form submitted successfully!");
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                //document.getElementById('myForm'),reset();
                document.getElementById('myForm').imerHTML ='';
                document.getElementById('message').imerText = response.message;
            } else if (xhr.readyState === 4){
                alert("error submitting form");
            }
        };
        xhr.send(JSON.stringify(formData));

});










