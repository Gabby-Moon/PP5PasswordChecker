document.getElementById('click').onclick = function()
{
    let testPassword = document.getElementById('password').value;
    document.getElementById('isValid').innerHTML = "test";
    if(testPassword.length < 8)
    {
        document.getElementById('outputLength').innerHTML = "Password must be at least 8 characters long.";
    }
    else
    {
        document.getElementById('outputLength').innerHTML = "";
    }

    for(let i = 0; testPassword.length > i; i++)
    {
        let current = testPassword.charAt(i);
        let specialChar = "!@#$%^&*()_+=-{}[]|\\\";:?></";
        if(!specialChar.includes(current))
        {
            document.getElementById('outputSpecial').innerHTML = "Password must include at least one special character (!,@,#, ect.).";
        }
        else
        {
            document.getElementById('outputSpecial').innerHTML = "";
        }
    }

    let search = testPassword.search(" ");
    if(search != -1){
        document.getElementById('outputSpace').innerHTML = "Password must not contain spaces.";
    }
    else
    {
        document.getElementById('outputSpace').innerHTML = "";
    }
}