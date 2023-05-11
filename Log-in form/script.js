document.getElementById("loginform").addEventListener("submit",function(event)
{
    event.preventDefault;

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    console.log("Username :- " +username);
    console.log("Password :- " +password);

    alert("Your Credentials, has been successfully submitted.");
});