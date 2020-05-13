function f(){var x = input1.value 
    if(x==""){p1.style.color="red"; p1.innerHTML="WPISZ HASŁO" } 
else if(x.search("[0-9]")>=0 && x.length>6){ p1.style.color="green"; p1.innerHTML="DOBRE" } 
else if(x.search("[0-9]")>=0 && x.length>=4 && x.length<=6){ p1.style.color="blue"; p1.innerHTML="ŚREDNIE" } 
else { p1.style.color="yellow"; p1.innerHTML="SŁABE"}}