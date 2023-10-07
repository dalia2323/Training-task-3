let countries=[];
let container=document.getElementById('container');
let search=document.querySelector(".search");
console.log(search.value)
console.log(container)
let category=document.querySelector('.category')
console.log(category)
////////////////////
search.addEventListener('keyup', displayCountries);
category.addEventListener('change',displayCountries);
///////////////////
const url="https://restcountries.com/v3.1/all";
    fetch(url)
.then(response=>response.json()
      )
      .then( data=>{
        countries=data.slice(0,44);
        displayCountries(); 
        console.log(countries.length)
      })
      .catch((error) =>{
        console.error("Error:", error);
      });
/////////////////////
function displayCountries() {
  let result = '';
  let searchValue = search.value.toLowerCase();
  let categoryValue = category.value.toLowerCase();
  let matchingCountries = countries.filter(country => {
    return (!searchValue || country.name.common.toLowerCase().includes(searchValue)) &&
           (categoryValue === 'no filter' || categoryValue === 'filter by region' || country.region.toLowerCase().includes(categoryValue));
  });

  if (matchingCountries.length === 0) {
    result = '<div class="col-12 text-center">No results found</div>';
  } else {
    matchingCountries.forEach(country => {
      result += `
        <div class="col-lg-3 col-md-3 col-sm-6 mt-sm-2 mb-3">
          <div class="card rounded-3 m-3 shadow-sm">
            <img src='${country.flags.svg}' class="card-img-top" alt="...">
            <div class="card-body mb-3">
              <h5 class="card-">${country.name.common}</h5>
              <p class="card-text">
                <span class="country-detail">Population</span>: <span class="country-detail-2">${country.population}</span> <br>
                <span class="country-detail">Region</span>: <span class="country-detail-2">${country.region}</span> <br>
                <span class="country-detail">Capital</span>:<span class="country-detail-2"> ${country.capital[0]}</span>
              </p>
            </div>
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = result;
}

  
////////////////////////
function toggleDarkMode() {
  const body = document.body;
  const container = document.getElementById('container');
  const darkModeIcon = document.getElementById('darkModeIcon');
  body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
      darkModeIcon.classList.remove("fa-moon");
      darkModeIcon.classList.add("fa-sun");
  } else {
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
  }
}

const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", toggleDarkMode);
