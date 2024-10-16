import { environments } from "./environment.js";
/*let myCard = {
    img: "Images/img1.jpg",
    title: "Paisaje 1",
    description: `**Bosque Encantado**: Árboles altos y frondosos, llenos de luces brillantes y susurros mágicos, donde el aire huele a tierra húmeda.`
  }*/

window.addEventListener('DOMContentLoaded', makecards)

function makecard(card) {
    const container = document.createElement('div'); 
    container.id = 'card'
    container.classList.add('card');


    const imgCard = document.createElement('img')
    imgCard.src = card.img
    imgCard.alt= card.Description

    const titleCard  = document.createElement('h2');
    titleCard.textContent= card.title

    const descriptionCard=document.createElement('p');
    descriptionCard.textContent= card.description

    container.appendChild(imgCard)
    container.appendChild(titleCard)
    container.appendChild(descriptionCard)

    document.querySelector('main').appendChild(container)

    
}


function makecards() {
   // for (let index = 0; index < 12; index++) {
        //makecard(environments);
        //console.log(environments)
        environments.forEach(card=>makecard(card))
  //  }
}