const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document .querySelector(".pass-field i");
const requirementLlist = document.querySelectorAll(".requirement-list li");

const requirements = [
  { regex: /.{8,}/, index: 0 },                
  { regex: /[0-9]/, index: 1 },                
  { regex: /[a-z]/, index: 2 },                
  { regex: /[A-Z]/, index: 3 },                
  { regex: /[!@#$%^&*()_\-+={}[\]\\|;:'",.<>/?~`]/, index: 4 } 
];

passwordInput.addEventListener("keyup", (e)=>{
    const value = e.target.value;
    requirements.forEach((req)=>{
        const isValid = req.regex.test(value);
        const item = requirementLlist[req.index];

        if(isValid){
            item.classList.add("valid")
        }else{
            item.classList.remove("valid");
        }
        });
})


eyeIcon.addEventListener("click",()=>{
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
})