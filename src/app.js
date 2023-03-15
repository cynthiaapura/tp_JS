document.addEventListener("DOMContentLoaded", (e) => {

    // EXERCICE 4

    let bool = document.getElementById("exo Boolean")
      
    const button = document.getElementById("button2")
    let boolean = true;
    bool.innerHTML = boolean

    button.addEventListener('click', event => {
      
    if(boolean === true ){
        boolean = false
        console.log(boolean)
        bool.innerHTML = boolean
    }
    else{
        boolean = true
        console.log(boolean)
        bool.innerHTML = boolean
    }
       

    })
    
    // EXERCICE 3 
    
    const incrementButton = document.getElementById("button");
    const counter = document.getElementById("counter");

    incrementButton.addEventListener("click", () =>{
        let value = parseInt(counter.textContent);
        counter.textContent = value + 1;
    });


    // EXERCICE 2 

    let section,nombreUn, nombreDeux, total, ttc, parent_list
    nombreUn = prompt("Entrez le premier prix")
    nombreUn = parseFloat(nombreUn)
    nombreDeux = prompt("Entrez le deuxième prix")
    nombreDeux = parseFloat(nombreDeux)
    parent_list = document.querySelector("ul")
    

    const taxe = 19.6
    const total_tva = 0.196

    total = nombreUn + nombreDeux
    ttc = total * total_tva
    const total_ttc = total + ttc
    const total_ht = total
    
    table_tva = []
    table_tva.push(nombreUn, nombreDeux, total, total_ttc)
    console.table(table_tva)

    const table_network = ({
        Premier_prix : nombreUn,
        Deuxieme_prix : nombreDeux,
        Prix_total : total,
        Prix_TTC : total_ttc
    })

    for(let data in table_network){
        let value = table_network[data]
        parent_list.innerHTML += `<li>${data} : ${value}</li>`
    }




    // EXERCICE 1 partie 2

    // const answer = prompt("Avez-vous des enfants ?");

    // if (answer === "oui"){
    //     const nb = prompt("Combien en avez vous ?");
    //     if (nb == 1){
    //         alert ("C'est pour quand le deuxieme ?");
    //     } else if (nb <= 2){
    //         alert ("Quels beaux enfants");
    //     } else if (nb <= 3) {
    //         alert ("C'est fini les enfants ?");
    //     }
 
    // } else {
    //     alert ("Eh bah alors ?");
    // }


    // EXERCICE 1 partie 1

    // const reponse = prompt("Avez-vous des enfants ?");

    // if (reponse === "oui"){
    //     const nbEnfants = prompt("Combien avez-vous d'enfants ?");

    //     alert(`Vous avez ${nbEnfants} enfants.`);

    // } else {
    //     alert("Vous n'avez pas d'enfants");
    // }

})