document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("form Submitted");

        const fullname=document.getElementById('fullname').value;
        const email=document.getElementById('email').value;
        const pass=document.getElementById('pass').value;
        const phone=document.getElementById('phone').value;

        if (!fullname||!email) {
            alert("you need a name and email");
            return;
        }

        // if(!age|| age<18) {
        //     alert("you need to be 18");
        //     return;
        // }

        const formData = {
            name: fullname,
            email: email,
            password: pass
        };
        console.log(formData);
        console.log(formData);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
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










