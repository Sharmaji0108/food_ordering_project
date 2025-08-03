let navextras = document.querySelector('.nav-extras');
let closecart = document.querySelector('.close'); 
let body = document.querySelector('body');
let listfoodHTML = document.querySelector('.food-container');

let listfood = [];

navextras.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})

const adddatatohtml = () => {
    listfoodHTML.innerHTML = '';
    if (listfood.length > 0){
        listfood.forEach(fooditem =>{
            let newfood = document.createElement('div');
            newfood.classList.add('food');
            newfood.innerHTML = `
          <img src="${fooditem.image}" class="foods-img" alt="">
                
                    <h3 class="food-name">${fooditem.name}</h3>
                    <p class="description">${fooditem.description}</p>
                    <p class="restaurant">${fooditem.restaurant}</p>
                    <div class="price">${fooditem.price}</div>
                    <button class="addcart">
                        Add To Cart
                    </button>`;
                   //<span class="rating">${food.rating}<i class="fa-solid fa-star"></i></span>`;
                    listfoodHTML.appendChild(newfood);
        })
    }
}

const initApp = () =>{
    // get data from json

    fetch("food.json")
  .then(response => response.json())
    .then(data => {
        listfood = data;
        adddatatohtml();
        //console.log(listfood);
    })
}
initApp();

