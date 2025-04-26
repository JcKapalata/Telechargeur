const search = document.querySelector("#search");
const searchButton = document.querySelector("#btn-search");

// Recupere les elements ecrite
function searchValidation (){ 
    return new Promise(
        (resolve) => {
            function onclick(){
                resolve(search.value);
            }
            searchButton.addEventListener('click', onclick)
        })
}

async function searchDemarrer () { 
    console.log('debut....');
    while (true) {
        let valeur = await searchValidation();
        console.log(valeur);
    }
}
searchDemarrer()


