"use strict";

export default class AircraftAir {
    constructor(picture, name, category, categories, shortdescription) {
        this.picture = picture;
        this.name = name;
        this.category = category;
        this.categories = categories;
        this.shortdescription = shortdescription;
    }

    get htmlStringAircrafts() {
        return `
        <div class="card">
            <div class="card_image">
                <img class="aircraftImage" src="${this.picture}">
            </div>
            <div class="aircraftName">${this.name}</div>
            <div class="categorie">
                <li class="aircraftCategories">${this.category[0]}</li>
                <li class="aircraftCategories">${this.category[1]}</li>
            </div>
            <div class=" aircraftShortInfo">
                ${this.shortdescription}
            </div>
            <div class="btn_send">
                <a href="/AircraftInfo/aircraftInfo.html">
                    <button>
                        <span></span>
                        <h3>See more</h3>
                        <span></span>
                    </button>
                </a>
            </div>
        </div>
        `;
    }

    get htmlStringFilteredAircrafts() {
        return `
        <div class="card">
            <div class="card_image">
                <img class="aircraftImage" src="${this.picture}">
            </div>
            <div class="aircraftName">${this.name}</div>
            <div class="categorie">
                <li class="aircraftCategories">${this.category}</li>
            </div>
            <div class=" aircraftShortInfo">
                ${this.shortdescription}
            </div>
            <div class="btn_send">
                <a href="/AircraftInfo/aircraftInfo.html">
                    <button>
                        <span></span>
                        <h3>See more</h3>
                        <span></span>
                    </button>
                </a>
            </div>
        </div>
        `;
    }
}