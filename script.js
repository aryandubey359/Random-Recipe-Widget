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
let searchData;

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
  document.getElementById("meal-info-container").classList.remove("hidden");
}

function closepopup(){
  document.getElementById("meal-info-container").classList.add("hidden");
}

function popupRecipe1(){
  document.getElementById("meal-info-container").classList.remove("hidden");
}

function closepopup1(){
  document.getElementById("meal-info-container").classList.add("hidden");
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
    "https://themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const respData = await resp.json();
  randomMeal = respData.meals[0];
  console.log(randomMeal);
  showRandomMeal(randomMeal);
}

async function searchMealByTerm(term) {
  const resp = await fetch(
    "https://themealdb.com/api/json/v1/1/search.php?s=" + term
  );
  const respData = await resp.json();
  console.log(respData);
  randomisation.innerHTML = "";
  if(respData.meals != null)
  {
    randomisation.classList.remove("null");
    let i = 0;
    respData.meals.forEach(mealData => {
    const searchedMeals = document.createElement("div");
    searchedMeals.classList.add("mealData");
    // mealData = respData[0];
  searchedMeals.innerHTML = `
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
    <br>
  `;
  i ++;
  console.log(i);
  randomisation.appendChild(searchedMeals);
  })}
  else{
    randomisation.classList.add("null");
    randomisation.innerHTML = `
      <h2>No Recipes for the given search term: "${term}"</h2>
    `
  }
}

randomRecipe();

function getMealByTerm(searchterm) {
  searchMealByTerm(searchterm);
}

document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  const term = document.getElementById("term").value;
  getMealByTerm(term);
});

