


async function traerPais(name) {
    let url = 'https://api.nationalize.io?name=' + name;
    console.log(url);
    let response = await fetch(url);
    return response.json();
}


function mostrarNombre(json) {

    // sisi

    
    

    if (json.country.legnth == 0){

        let errorMessage ="tu nombre parece no pertenecer a ingun lado";
        let errorTag = document.getElementById("error");
        errorTag.innerHTML = errorMessage;        
        
    }else{

        let allCountries = json.country.map(function(element) { 
            return element.country_id 
        });

    allCountries[0];  
    let show = document.getElementById("show");
    show.innerHTML = allCountries[0];
    }
}
function calcular(){
let nombre = document.getElementById("input").value;
traerPais(nombre).then(mostrarNombre);
}







