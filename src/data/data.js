const productos = [
    {
        id: "aBc12",
        name: "Camisa Casual Azul",
        category: "Camisas",
        price: 45000,
        stock: 7,
        image: "/camisa-azul.jpg",
    },
    {
        id: "xYz34",
        name: "Zapatillas Running Pro",
        category: "Zapatillas",
        price: 120000,
        stock: 5,
        image: "/zapatillas-running.jpg",
    },
    {
        id: "qWv56",
        name: "Gorra Deportiva Negra",
        category: "Gorras",
        price: 35000,
        stock: 4,
        image: "/black-cap.jpg",
    },
    {
        id: "LmN78",
        name: "Hoodie Gris con Capucha",
        category: "Hoodies",
        price: 85000,
        stock: 6,
        image: "/gray-hoodie.jpg",
    },
    {
        id: "OpQ90",
        name: "Camisa Cuadros Rojo",
        category: "Camisas",
        price: 55000,
        stock: 3,
        image: "/camisa-cuadros.jpg",
    },
    {
        id: "RsT12",
        name: "Zapatillas Urbanas Blancas",
        category: "Zapatillas",
        price: 130000,
        stock: 8,
        image: "/white-shoes.jpg",
    },
    {
        id: "UvWx34",
        name: "Gorra Snapback Gris",
        category: "Gorras",
        price: 40000,
        stock: 2,
        image: "/backpack-cap.jpg",
    },
    {
        id: "YaZ56",
        name: "Hoodie Negro Básico",
        category: "Hoodies",
        price: 90000,
        stock: 9,
        image: "/black-hoodie.jpg",
    },
];
const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(productos)}, 2000)
    })
}
export { getProducts }