const randomMeals = document.getElementById("randomMeals");
const randomisation = document.getElementById("randomisation");
const search = document.getElementById("search");
const btn = document.getElementsByClassName("btn")[0];
const mealpopup = document.getElementById("meal-info-container");
const closebtn = document.getElementById("close");
let favcontainer = document.getElementById("favcontainer");
let favcounter = 0;
let popupvariable = 0;
let randomMeal = [];

function showRandomMeal(mealData) {
  randomisation.innerHTML = `
  <div class="random-meals" id="randomMeals">
    <div class="meal" id="meal">
      <div class="meal-header" onclick="popupRecipe()">
        <img id="imging" src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
      </div>
      <br>
      <div class="meal-body">
        <span onclick="popupRecipe()">${mealData.strMeal} (${mealData.strArea})</span>
        <a href="${mealData.strYoutube}}" target="_blank" onclick="preventDefault()"><button id="btn" class="btn"><i class="fab fa-youtube"></i></button></a>
      </div>
    </div>
  </div>
  <div class="meal-info-container hidden" id="meal-info-container">
        <div class="meal-info" id="meal-info">
          <button class="close" id="close" onclick="closepopup()"><i class="fas fa-times"></i></button>
          <br>
          <div class="mealimg">
            <h3>${mealData.strMeal}</h3><br> 
            <img src="${mealData.strMealThumb}" alt="" /><br>
          </div>
          <div class="instructions">
            <ul id="material">
              <h4>Ingredients Required: </h4>
              <br>
              <p>${mealData.strIngredient1} ${mealData.strIngredient2} ${mealData.strIngredient3} ${mealData.strIngredient4} ${mealData.strIngredient5} ${mealData.strIngredient6} ${mealData.strIngredient7} ${mealData.strIngredient8} ${mealData.strIngredient9} ${mealData.strIngredient10} ${mealData.strIngredient11} ${mealData.strIngredient12} ${mealData.strIngredient13} ${mealData.strIngredient14} ${mealData.strIngredient15} ${mealData.strIngredient16} ${mealData.strIngredient17} ${mealData.strIngredient18} ${mealData.strIngredient19} ${mealData.strIngredient20} </p>
              <br>
            </ul>
            <h4>Recipe:</h4>
            <br>
            <p>${mealData.strInstructions}</p><br>
            <div class="moreinfo" id="moreinfo"><h4>Want to know more about the Dish?</h4><a href="${mealData.strSource}}" target="_blank"><button class="btninfo"><i class="fas fa-info"></i></button></a></div>
          </div>
        </div>
    </div>
  `;
}

function popupRecipe(){
  console.log("hey");
  document.getElementById("meal-info-container").classList.remove("hidden");
  console.log("done");
}

function closepopup(){
  console.log("hey");
  document.getElementById("meal-info-container").classList.add("hidden");
}

// function addtofav() {
//   favcounter++;
//   if (favcounter % 2 == 0) {
//     document.getElementsByClassName("btn")[0].style.color = "white";
//     console.log("Meal id removed from LS");
//     let storedids = JSON.parse(localStorage.getItem("MealIDs"));
//     storedids = storedids.filter(id => id !== randomMeal.idMeal);
//     localStorage.setItem("MealIDs", JSON.stringify(storedids));
//     favcontainer.innerHTML = `<h3>Favourite Recipes</h3>
//     <ul>
//       <li>
//         <img src="./Media/Salad Bowl.jpg" alt="" /> <span>Salad Bowl</span>
//       </li>
//       <li>
//         <img src="./Media/Ice-cream Cone.jpg" alt="" />
//         <span>Ice-cream Cone</span>
//       </li>
//       <li><img src="./Media/Burger.jpg" alt="" /> <span>Burger</span></li>
//       <li>
//         <img src="./Media/Toast Sandwich.jpg" alt="" />
//         <span>Toast Sandwich</span>
//       </li>
//     </ul>`
//   } else {
//     document.getElementsByClassName("btn")[0].style.color = "black";
//     console.log("Meal id added to LS");
//     let storedmealids = JSON.parse(localStorage.getItem("MealIDs"));
//     localStorage.setItem("MealIDs", JSON.stringify([randomMeal.idMeal]));
//     localStorage.setItem("MealName", JSON.stringify([randomMeal.strMeal]));
//     localStorage.setItem("MealImage", JSON.stringify([randomMeal.strMealThumb]));
//     favcontainer.innerHTML = `<h3>Favourite Recipes</h3>
//     <ul>
//       <li>
//         <img src="${randomMeal.strMealThumb}" alt="" /> <span>${randomMeal.strMeal}</span>
//       </li>
//     </ul>`;
//   }
// }

async function randomRecipe() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  randomMeal = respData.meals[0];
  console.log(randomMeal);
  showRandomMeal(randomMeal);
}

async function searchMealById(id) {
  const resp = await fetch(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const respData = await resp.json();
  randomMeal = respData.meals[0];
  console.log(randomMeal);
  showRandomMeal(randomMeal);
}

async function searchMealByTerm(term) {
  const resp = await fetch(
    "www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
  const respData = await resp.json();
  const termMeal = respData.meals[0];
  console.log(termMeal);
  showMealByTerm(termMeal);
}

randomRecipe();

function showMealByTerm(mealData) {
  randomMeals.innerHTML = `<span class="random"><h3>Recipes relate to ${term}</h3></span>
    <div class="meal">
      <div class="meal-header">
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
      </div>
      <div class="meal-body">
        <span>${mealData.strMeal}</span>
        <button class="btnactive"><i class="far fa-heart"></i></button>
      </div>
    </div>
  </div>`;
}

// async function fetchfavmeals() {
//   let mealids = JSON.parse(localStorage.getItem("MealIDs"));
//   const favmeals = [];
//   for (let i = 0; i <= mealids.length; i ++){
//     const mealid = mealids[1];
//     meal = await searchMealById(mealid);
//     favmeals.push(meal);
//   }
//   console.log(favmeals);
// }

function addToFav() {
  console.log("hello");
  let storedids = JSON.parse(localStorage.getItem("MealIDs"));
  for(i=0; i <= storedids.length; i++){
    favcontainer.innerHTML = `<h3>Favourite Recipes</h3>
    <ul>
      <li>
        <img src="${storedids[0].strMealThumb}" alt="" /> <span>${storedids[0].strMeal}</span>
      </li>
      <li>
        <img src="./Media/Ice-cream Cone.jpg" alt="" />
        <span>Ice-cream Cone</span>
      </li>
      <li><img src="./Media/Burger.jpg" alt="" /> <span>Burger</span></li>
      <li>
        <img src="./Media/Toast Sandwich.jpg" alt="" />
        <span>Toast Sandwich</span>
      </li>
    </ul>`;
  }
}

function getMealByTerm() {
  console.log("GetMeal");
  const term = document.getElementById("term").value;
  searchMealByTerm(term);
}

search.addEventListener("click", console.log("GetMeal"));

