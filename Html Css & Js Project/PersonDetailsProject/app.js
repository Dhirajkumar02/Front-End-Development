function renderPerson() {
    let btn = document.querySelector("input");
    btn.value = "";
    btn.style.backgroundImage = "url('loading4.gif')";
    btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundPosition = "center";
  
    let div = document.querySelector("#person");
    let endPoint = "https://randomuser.me/api";
    fetch(endPoint)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`${response.status}-${response.statusText}`);
        }
        return response.json();
      })
      .then((persons) => {
        console.log("inside then");
        let pr = persons.results[0];
        let img = document.createElement("img");
        img.src = pr.picture.large;
        let article = document.createElement("article");
        article.innerHTML = `<p><strong>Name:</strong>${pr.name.first} ${pr.name.last}</p>`;
        article.innerHTML += `<p><strong>Gender:</strong>${pr.gender}</p>`;
        article.innerHTML += `<p><strong>Phone:</strong>${pr.phone}</p>`;
        div.innerHTML = "";
        div.appendChild(img);
        div.appendChild(article);
      })
      .catch((error) => {
        console.log("Could not comm with the server", error);
        alert(`Error in server comm${error}`);
      })
      .finally(() => {
        btn.style.backgroundImage = null;
        btn.value = "Show Person";
      });
  }
  