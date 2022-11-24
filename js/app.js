// Dark Theme
// --bg-body: #f4f4f4;
// --bg-container: #ffffff;
// --text-heading: #5a537b;
// --text-para: #353535;
// --dark-mode: #1f2937;

// --bg-body: #1f2937;
// --bg-container: #273549;
// --text-heading: #ccc1ff;
// --text-para: #ffffff;
// --dark-mode: #f4f4f4;

const rootValue = document.querySelector(':root')
const toggleBtn = document.getElementById("toggle-btn")
let count = true;

toggleBtn.addEventListener('click', ()=>{
    if(count){
        //dark
        rootValue.style.setProperty('--bg-body', '#1f2937')
        rootValue.style.setProperty('--bg-container', '#273549')
        rootValue.style.setProperty('--text-heading', '#ccc1ff')
        rootValue.style.setProperty('--text-para', '#ffffff')
        rootValue.style.setProperty('--dark-mode', '#f4f4f4')
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
        count=false
    }else{
        //light
        rootValue.style.setProperty('--bg-body', '#f4f4f4')
        rootValue.style.setProperty('--bg-container', '#ffffff')
        rootValue.style.setProperty('--text-heading', '#5a537b')
        rootValue.style.setProperty('--text-para', '#353535')
        rootValue.style.setProperty('--dark-mode', '#1f2937')
        

        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
        count=true
    }
})
