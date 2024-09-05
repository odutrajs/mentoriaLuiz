async function fetchDesserts() {
    try {
        const response = await fetch('https://my-json-server.typicode.com/odutrajs/mentoriaLuiz/db');
        const data = await response.json();
        return data.desserts;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        return [];
    }
}

async function renderDesserts() {
    const desserts = await fetchDesserts();
    const container = document.getElementById('dessert-list');

    container.innerHTML = desserts.map(dessert => `
        <div class="card">
            <img src="${dessert.image}" alt="${dessert.name}">
            <div class="card-content">
                <div class="add-to-cart">
                    <img src="./assets/images/icon-add-to-cart.svg" alt="Add to Cart">
                    <span>Add to Cart</span>
                </div>
                <p class="card-subtitle">${dessert.subtitle}</p>
                <h3 class="card-title">${dessert.name}</h3>
                <p class="card-price">${dessert.price}</p>
            </div>
        </div>
    `).join('');
}

window.onload = renderDesserts;
