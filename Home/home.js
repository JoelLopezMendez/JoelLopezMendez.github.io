"use strict";

const api = 'https://aircraft-nation.onrender.com/aircrafts';

// deze code komt van ChatGPT <<<https://chat.openai.com/share/6e9ae3f5-161a-47d4-96c6-f37fbdeb1c76>>>
async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fout bij het ophalen van gegevens van de API:', error);
    }
}

async function showRandomData() {
    const aircraftContainerRows = document.querySelectorAll('.aircraftContainerRow');
    const aircraftData = await getData();

    const randomAircraftData = aircraftData.sort(() => Math.random() - 0.5);

    let dataIndex = 0;

    // Loop door elke aircraftContainerRow div en voeg gegevens toe
    aircraftContainerRows.forEach(containerRow => {
        const cards = containerRow.querySelectorAll('.card');

        cards.forEach(card => {
            if (dataIndex < randomAircraftData.length) {
                const aircraft = randomAircraftData[dataIndex];

                const cardPicture = card.querySelector('.card_image img');
                const aircraftName = card.querySelector('.aircraftName');
                const categories = card.querySelectorAll('.categorie .aircraftCategories');

                if (cardPicture) {
                    cardPicture.src = aircraft.picture;
                }

                if (aircraftName) {
                    aircraftName.textContent = aircraft.name;
                }

                categories.forEach((category, index) => {
                    category.textContent = aircraft.categories[index];
                });

                dataIndex++;
            }
        });
    });
}

showRandomData();