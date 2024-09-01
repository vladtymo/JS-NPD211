const api = "https://dummyjson.com/products";
const list = document.querySelector('.product-list');
const loadBtn = document.querySelector('#loadBtn');

const pagination = {
    total: null,
    skip: 0,
    limit: 50,
    next() {
        this.skip += this.limit;
    },
    isAvailable() {
        return this.skip < this.total;
    }
}

async function loadProducts()
{
    const res = await fetch(api + `?skip=${pagination.skip}&limit=${pagination.limit}`);
    const data = await res.json();

    pagination.total = data.total;
    pagination.next();

    loadBtn.disabled = !pagination.isAvailable();

    console.log(data);

    for (const i of data.products) {
        list.innerHTML +=  `<div class="col">
                                <div class="card h-100">
                                    <img src="${i.thumbnail}" class="card-img-top" alt="${i.title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${i.title}</h5>
                                        <p class="card-text">${i.category} - Rating: ${i.rating}</p>
                                        
                                    </div>
                                    <div class="card-footer">
                                        <button type="button" class="btn btn-success w-100">Buy</button>
                                    </div>
                                </div>
                            </div>`;
    }
    
}

loadProducts();

loadBtn.onclick = () => {
    loadProducts();
}