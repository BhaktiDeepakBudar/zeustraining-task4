function show() 
{
    var p = document.getElementById("password");
    if(p.type === "password")
    {
        p.type = "text";
    }
    else
    {
        p.type = "password";
    }
}

function radio()
{

    var checkRadio = document.querySelector('input[name="school"]:checked');
    if (checkRadio == null)
    {
        alert("Please select one radio button");
        return false;
    }
    return true;
}

function state()
{
    var select = document.getElementById('state-name');
    var checkState = select.options[select.selectedIndex].value;
    if(checkState == "none")
    {
        alert("Please select your state");
        return false;
    }
    return true;
}
function district()
{
    var select = document.getElementById('district-name');
    var checkDistrict = select.options[select.selectedIndex].value;
    if(checkDistrict == "none")
    {
        alert("Please select your district");
        return false;
    }
    return true;
}

function username()
{
    var checkUsername = document.getElementById("username").value;
    if(checkUsername == "")
    {
        alert("Please enter username");
        return false;
    }
}

function password()
{
    var checkPassword = document.getElementById("password").value;
    if(checkPassword == "")
    {
        alert("Please enter password");
        return false;
    }
    if(checkPassword.length < 8) {  
        alert("Password length must be atleast 8 characters");  
        return false;  
    }
    if(checkPassword.length > 15) {  
        alert("Password length must not exceed 15 characters");  
        return false;  
    }
    return true;
}

function login()
{
    if(radio() && state() && district() && password() && username())
    {
        alert("Login successful");
        document.getElementById('login-form').reset();
    }
}