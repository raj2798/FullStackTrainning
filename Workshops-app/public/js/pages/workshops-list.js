import { getWorkshops } from "../services/workshops.js";

function populateWorkshops(workshops) {
  const workshopsListEl = document.querySelector("#workshops-list");

  workshopsListEl.innerHTML = "";

  workshops.forEach((workshop) => {
    workshopsListEl.innerHTML += `
            <a class="workshops-list-item" href="workshop-details.html?id=${workshop.id}&name=${workshops.name}">
                <div class="img-wrapper">
                    <img
                        src="${workshop.imageUrl}"
                        alt="${workshop.name}"
                        class="img-fluid"
                    />
                </div>
                <h2>${workshop.name}</h2>
                <div class="item-details">
                    <div class="my-sm">
                        ${workshop.startDate}
                        -
                        ${workshop.endDate}
                    </div>
                    <div class="my-sm">
                        ${workshop.time}
                    </div>
                </div>
            </a>
        `;
  });
}

function getAndPopulateWorkshops() {
  getWorkshops()
    .then((data) => {
      populateWorkshops(data);
    })
    .catch((error) => console.log(error.message));
}

function init() {
  getAndPopulateWorkshops();
}

init();
