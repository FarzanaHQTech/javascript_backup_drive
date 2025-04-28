const Name= document.getElementById('name')
const password = document.getElementById('password')
const frm = document.getElementById("form");
const errorElement = document.getElementById("error")

 frm.addEventListener('submit', (e) =>{
    let messages = []
    if (Name.value ==='' || Name.value== null){
        messages.push("Name is required")
    }
    if (password.value.length <= 6){
        messages.push('Password must be longer then 6 charecter')
    }
    if (password.value.length <= 20){
        messages.push('Password must be less then 20 charecter')
    }
    if (password.value === 'password'){
        messages.push('Password can not be empty')
    }
    if(messages.length> 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
  
 })