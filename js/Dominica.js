let countriesDetail = [];
let countryDetail = document.getElementById('countryDetail');

/////////////////////////
const url = "https://restcountries.com/v3.1/all";
fetch(url)
  .then(response => response.json())
  .then(data => {
    countriesDetail = data.slice(0, 8);
    displayCountriesDetail(5); // Display details for the 6th country (index 5)
  })
  .catch((error) => {
    console.error("Error:", error);
  });

///////////////////
function displayCountriesDetail(countryIndex) {
    if (countriesDetail.length === 0 || countryIndex < 0 || countryIndex >= countriesDetail.length) {
      // Handle invalid index or empty data
      return;
    }
  
    let result = ''; // Initialize the result variable
  
    result += `
    <div class="row mt-5">
    <div class="col-md-6 col-sm-12  pt-lg-5 ">
        <h2 class="mt-3 mb-4">${countriesDetail[countryIndex].name.common}</h2>
        <div class="fw-lighter fs-6 detail">
            <ul class="list-unstyled">
                <li><b>Native Name</b>: ${
                  countriesDetail[countryIndex].name.native
                    ? countriesDetail[countryIndex].name.native.common
                    : 'N/A'
                }</li>
                <li><b>Population</b>: ${countriesDetail[countryIndex].population || 'N/A'}</li>
                <li><b>Region</b>: ${countriesDetail[countryIndex].region || 'N/A'}</li>
                <li><b>Sub Region</b>: ${countriesDetail[countryIndex].subregion || 'N/A'}</li>
                <li><b>Capital</b>: ${
                  countriesDetail[countryIndex].capital
                    ? countriesDetail[countryIndex].capital[0]
                    : 'N/A'
                }</li>
            </ul>
        </div>
    `;

    countryDetail.innerHTML = result;
}
