"use strict";

import AircraftAir from "./AircraftAir.js";

const api = 'https://aircraft-nation.onrender.com/aircrafts';
const searchInput = document.querySelector("[data-searc]");

// I got this new code form ChatGpt <---https://chat.openai.com/share/ad98f9ab-c8e5-4830-af9f-e140d19d364c--->
// Voeg een event listener toe aan de categorieën radio-buttons
document.querySelectorAll('input[type="radio"][name="aircraft"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedCategory = this.getAttribute('category');
        app.filterByCategory(selectedCategory);
    });
});

const app = {
    aircraftList: [],
    init: function () {
        app.getData();
    },

    // Om de data ramdom te krijgen heb ik gebruik gemaakt van ChatGPT <<https://chat.openai.com/share/ff0d06db-dc62-4428-9724-b4e3b9dd2846>>
    getData: async function () {
        try {
            const response = await fetch(api);
            const allData = await response.json();
            app.aircraftList = allData.map(function (aircraft) {
                return new AircraftAir(aircraft.picture, aircraft.name, aircraft.categories, aircraft.categories, aircraft.shortDescription);
            }).sort(function () {
                return 0.5 - Math.random();
            });

            app.filterByCategory();
            app.search();
            app.render();
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    },

    render: function () {
        let htmlStringAircrafts = ``;
        app.aircraftList.forEach(function (air) {
            htmlStringAircrafts += air.htmlStringAircrafts;
        });
        document.getElementById('aircraftContainer').innerHTML = htmlStringAircrafts;
    },

    search: function () {
        document.addEventListener('keyup', e => {

            const value = e.target.value.toLocaleLowerCase();
            if (e.target.matches('#search')) {
                document.querySelectorAll('.card').forEach(airCraft => {
                    airCraft.textContent.toLocaleLowerCase().includes(value) ?
                        airCraft.classList.remove('filterSearch') :
                        airCraft.classList.add('filterSearch');
                });
            }
        });
    },

    // I got this new code form ChatGpt <---https://chat.openai.com/share/ad98f9ab-c8e5-4830-af9f-e140d19d364c--->
    filterByCategory: function (category) {
        if (category === "all") {
            app.render();
        } else {
            const filteredAircraft = app.aircraftList.filter(air => air.categories.includes(category));
            let htmlStringFilteredAircrafts = ``;
            filteredAircraft.forEach(function (filteredAircraft) {
                htmlStringFilteredAircrafts += filteredAircraft.htmlStringFilteredAircrafts;
            });
            document.getElementById('aircraftContainer').innerHTML = htmlStringFilteredAircrafts;
        }
    }
};

app.init();