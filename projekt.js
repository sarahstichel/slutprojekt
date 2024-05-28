//const apiKey = "959001848c85469da0d74049624a2b72";

const search = function () {
  const apiKey = document.getElementById("apiKey").value;
  const searchTerm = document.getElementById("searchBar").value;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    searchTerm
  )}&apiKey=${apiKey}&addRecipeInformation=true`;

  // async function getRecipes(apiUrl) {
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   return data.results;
  // }

  // console.log(data.results);

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayResults(data.results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.getElementById("search").addEventListener("click", search);

function createRecipeLinks(recipes) {
  const baseUrl = "https://spoonacular.com/recipes";
  const linkContainer = getElementById("results");

  recipes.forEach((recipe) => {
    const title = recipe.title;
    const urlTitle = title.toLowerCase().replace(/ /g, "-");
    const recipeId = recipe.id;
    const recipeUrl = `${baseUrl}/${urlTitle}-${recipeId}`;
  });
}

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Rensa tidigare resultat
  results.forEach((item) => {
    console.log(item);
    const itemDiv = document.createElement("div");
    itemDiv.textContent = item.title; // Visa receptets titel
    itemDiv.addEventListener("click", () => {
      window.location.href = item.sourceUrl;
    });
    resultsDiv.appendChild(itemDiv);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    search();
  }
});
