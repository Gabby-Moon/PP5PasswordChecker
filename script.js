document.getElementById('click').onclick = function()
{
    let testPassword = document.getElementById('password').value;
    document.getElementById('isValid').innerHTML = "test";
    if(testPassword.length < 8)
    {
        document.getElementById('isValid').innerHTML = "Password must be at least 8 characters long.";
    }


    // 4. Upper Case Letter
    let pass = false;
    
    for (let i = 0; i < testPassword.length; i++) 
     {
          if (testPassword.charAt(i) != testPassword.charAt(i).toLowerCase())
          {
               pass = true;
          } 

     }

     if (pass == false)
     {
          document.getElementById('outputUpper').innerHTML = "Password must include at least one uppercase letter.";
     }
     else
     {
          document.getElementById('outputUpper').innerHTML = "";
     }


}