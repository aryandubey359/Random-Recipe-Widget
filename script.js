const randomMeals = document.getElementById("randomMeals");
const search = document.getElementById("search");
const btn = document.getElementsByClassName("btn")[0];
let favcontainer = document.getElementById("favcontainer");
let favcounter = 0;
let randomMeal = [];

function showRandomMeal(mealData) {
  randomMeals.innerHTML = `<span class="random"><h3>Random Recipes </h3></span>
  <div class="meal">
    <div class="meal-header">
      <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
    </div>
    <div class="meal-body">
      <span>${mealData.strMeal} (${mealData.strArea})</span>
      <button class="btn" id="btn" onclick="addtofav()"><i class="fas fa-heart"></i></button>
    </div>
  </div>
</div>`;
}

function addtofav() {
  favcounter++;
  if (favcounter % 2 == 0) {
    document.getElementsByClassName("btn")[0].style.color = "white";
    console.log("Meal id removed from LS");
    let storedids = JSON.parse(localStorage.getItem("MealIDs"));
    storedids = storedids.filter(id => id !== randomMeal.idMeal);
    localStorage.setItem("MealIDs", JSON.stringify(storedids));
    favcontainer.innerHTML = `<h3>Favourite Recipes</h3>
    <ul>
      <li>
        <img src="./Media/Salad Bowl.jpg" alt="" /> <span>Salad Bowl</span>
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
    </ul>`
  } else {
    document.getElementsByClassName("btn")[0].style.color = "black";
    console.log("Meal id added to LS");
    let storedmealids = JSON.parse(localStorage.getItem("MealIDs"));
    localStorage.setItem("MealIDs", JSON.stringify([randomMeal.idMeal]));
    localStorage.setItem("MealName", JSON.stringify([randomMeal.strMeal]));
    localStorage.setItem("MealImage", JSON.stringify([randomMeal.strMealThumb]));
    favcontainer.innerHTML = `<h3>Favourite Recipes</h3>
    <ul>
      <li>
        <img src="${randomMeal.strMealThumb}" alt="" /> <span>${randomMeal.strMeal}</span>
      </li>
    </ul>`;
  }
}

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
