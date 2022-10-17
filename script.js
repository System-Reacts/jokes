const p = document.getElementById("p")
const btn = document.getElementById("btn")
const loading = document.getElementById("loading")

const generater = async () => {
    try{
        const setHeader = {
            headers:{
                accept :"application/json"
            }
        }
        const response = await fetch("https://icanhazdadjoke.com", setHeader)
    const data = await response.json();
    p.innerHTML = data.joke
    }catch(error){
        alert(`The Error is ${error}`)
    }
    // async
    
    
};


btn.addEventListener('click', generater);
generater();


// Promise
    // fetch("https://icanhazdadjoke.com", setHeader)
    //     .then((response) =>  response.json())
    //     .then((data) =>   p.innerHTML = data.joke)
    //     .catch((error) => console.log(error))