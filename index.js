const toggleSwitch = document.getElementById("toggle");





toggleSwitch.addEventListener("change", function(){
    if (toggleSwitch.checked){
        document.body.classList.toggle("light-mode")
        
       
    }else{
        document.body.classList.remove("light-mode")
        
        
    }
})