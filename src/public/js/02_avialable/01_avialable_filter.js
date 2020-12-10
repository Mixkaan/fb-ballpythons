// function filter() {

//   //- CARD-SELECTION
//   var card = document.getElementById('cardSelector');
//   var indicator = document.getElementById('indicator')
//   //- CARD-PROPERTIES
//   var age = card.dataset.age;
//   var gender = card.dataset.gender;
//   var price = card.dataset.price;

//   //- BUTTON-ACTION
//   var filterButton = document.getElementById('filterButton');

//   // filterButton.addEventListener('click', () => {
//   //   //- GET SELECT VALUE
//   //   var filterSelectAge = document.getElementById('filterSelectAge').value;

//   //   if (filterSelectAge === 'cria') {
      
//   //     for (var i = 0; i < card.length; i++) {
//   //       card.classList.add('desactive');
//   //       console.log(card);
        
//   //     }
//   //     console.log(card)
//   //     // card.classList.add('desactive');
//   //   } else {
//   //   }
//   // });
// }
// filter();


//- CARD-SELECTION
var card = document.getElementById('cardSelector');
var indicator = document.getElementById('indicator')
//- CARD-PROPERTIES
var age = card.dataset.age;
var gender = card.dataset.gender;
var price = card.dataset.price;

//- BUTTON-ACTION
var filterButton = document.getElementById('filterButton');

function test() {
  for (let i = 0; i < card.length; i++) {
    const element = card[i];
    console.log(element)
    element.classList.add('desactive')
  }
  
}
test();