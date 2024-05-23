//const apiKey = "959001848c85469da0d74049624a2b72";
const apiKey = document.getElementById("apiKey").value;

document.getElementById("search").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchBar").value;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    searchTerm
  )}&apiKey=${apiKey}`;

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
});
function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Rensa tidigare resultat
  results.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = item.title; // Visa receptets titel
    resultsDiv.appendChild(itemDiv);
  });
}

document.getElementById("randomButton").addEventListener("click", function () {
  const randomDiv = document.getElementById("randomDiv");
  const apiUrl = `https://api.spoonacular.com/recipes/random&apiKey=${apiKey}
  
  `;
});
