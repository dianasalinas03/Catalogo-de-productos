const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragmento = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('app.json'); 
        const data = await res.json();
        console.log(data);
        mostrarProductos(data);
    } catch (error) {
        console.log(error);
    }
};

const mostrarProductos = (data) => {
    data.forEach((producto) => {
        templateCard.querySelector('h3').textContent = producto.nombre;
        templateCard.querySelector('p').textContent = producto.precio;
            const imgUrl=producto.imgUrl || producto.imgUrl;
        templateCard.querySelector('img').setAttribute('src',imgUrl);
            

        const clone = templateCard.cloneNode(true);
        fragmento.appendChild(clone); 
    });
    items.appendChild(fragmento);
};

