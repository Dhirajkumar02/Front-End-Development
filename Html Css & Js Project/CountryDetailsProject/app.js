let xhr, countriesList, countriesArr;
let endPoint = "https://restcountries.com/v2/all";
function loadCountries() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = processCountries;
  xhr.open("GET", endPoint, true);
  xhr.send(null);
}
function processCountries() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    countriesList = document.getElementById("countries");
    countriesArr = JSON.parse(xhr.responseText);
    let countryNames = "";
    countriesArr.forEach((c) => {
      countryNames += `<option>${c.name}</option>`;
    });
    countriesList.innerHTML = countryNames;
  } else if (xhr.readyState == 4 && xhr.status !== 200) {
    alert("Sorry! The request cannot be processed\nReason:" + xhr.statusText);
  }
}
function showDetails() {
  let countryIndex = countriesList.selectedIndex;
  let country = countriesArr[countryIndex];
  let myHtml = `<table border='2'>
                    <tr>
                      <th>Capital City</th>
                      <td>${country.capital}</td>
                    </tr>
                    <tr>
                      <th>Flag</th><td><img src='${country.flags.png}'</td>
                    </tr>
                    <tr>
                      <th>Currency</th><td>${country.currencies[0].name}</td>
                    </tr>
                </table>`;
  let countryDetails = document.getElementById("countrydetails");
  countryDetails.innerHTML = myHtml;
}
