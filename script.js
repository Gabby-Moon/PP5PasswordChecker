document.getElementById('click').onclick = function()
{
    let testPassword = document.getElementById('password').value;
    document.getElementById('output').innerHTML = "test";
    if(testPassword.length < 8)
    {
        document.getElementById('output').innerHTML = "Password must be at least 8 characters long.";
    }
}