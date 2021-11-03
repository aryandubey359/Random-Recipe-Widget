const randomMeals = document.getElementById("randomMeals");
const search = document.getElementById("search");
const btn = document.getElementsByClassName("btn")[0];
let favcounter = 0;

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
  } else {
    document.getElementsByClassName("btn")[0].style.color = "black";
  }
}

async function randomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];
  console.log(randomMeal);
  showRandomMeal(randomMeal);
}

async function searchMealById(id) {
  const resp = await fetch(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];
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

randomMeal();

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

function getMealByTerm() {
  console.log("GetMeal");
  const term = document.getElementById("term").value;
  searchMealByTerm(term);
}

search.addEventListener("click", console.log("GetMeal"));
