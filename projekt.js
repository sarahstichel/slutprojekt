//const apiKey = "959001848c85469da0d74049624a2b72";

const search = function () {
  const apiKey = document.getElementById("apiKey").value;
  const searchTerm = document.getElementById("searchBar").value;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    searchTerm
  )}&apiKey=${apiKey}&addRecipeInformation=true`;

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

document.getElementById("search").addEventListener("click", search);
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    search();
  }
});
