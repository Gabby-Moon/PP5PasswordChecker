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


    // 4. Upper Case Letter
    let upperPass = false;
    
    for (let i = 0; i < testPassword.length; i++) 
     {
          if (testPassword.charAt(i) != testPassword.charAt(i).toLowerCase())
          {
               upperPass = true;
          } 

     }

     if (upperPass == false)
     {
          document.getElementById('outputUpper').innerHTML = "Password must include at least one uppercase letter.";
     }
     else
     {
          document.getElementById('outputUpper').innerHTML = "";
     }

     // 5. Lower Case Letter
     let lowerPass = false;

     for (let i = 0; i < testPassword.length; i++)
     {
          if ( testPassword.charAt(i) != testPassword.charAt(i).toUpperCase())
          {
               lowerPass = true;
          }

     }

     if (lowerPass == false)
     {
          document.getElementById('outputLower').innerHTML = "Password must include at least one lowercase letter.";
     }
     else
     {
          document.getElementById('outputLower').innerHTML = "";
     }

     // 6. Digit


}