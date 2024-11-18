const productos = [
    {
        id: "aBc12",
        name: "Camisa Casual Azul",
        category: "Camisas",
        price: 45000,
        stock: 7,
        image: ["/camisa-azul.jpg", "/camisa-azul-2.jpg" , "/camisa-azul-3.jpg", "/camisa-azul-4.jpg"],
        description: "Camisa casual azul, ideal para eventos informales y reuniones. Confeccionada en material suave y cómodo para uso diario.",
    },
    {
        id: "xYz34",
        name: "Zapatillas Running Pro",
        category: "Zapatillas",
        price: 120000,
        stock: 5,
        image: ["/zapatillas-running.jpg", "/zapatillas-running-2.jpg", "/zapatillas-running-3.jpg", "/zapatillas-running-4.jpg" ],
        description: "Zapatillas especializadas para running, ligeras y con gran soporte, diseñadas para mejorar el rendimiento en cada carrera.",
    },
    {
        id: "qWv56",
        name: "Gorra Deportiva Negra",
        category: "Gorras",
        price: 35000,
        stock: 4,
        image: ["/black-cap.jpg", "/black-cap-2.jpg", "/black-cap-3.jpg", "/black-cap-4.jpg"],
        description: "Gorra deportiva negra, perfecta para entrenamientos y salidas informales, con un diseño versátil y moderno.",
    },
    {
        id: "LmN78",
        name: "Hoodie Gris con Capucha",
        category: "Hoodies",
        price: 85000,
        stock: 6,
        image: ["/gray-hoodie.jpg", "/gray-hoodie-2.jpg", "/gray-hoodie-3.jpg", "/gray-hoodie-4.jpg"],
        description: "Hoodie gris con capucha, ideal para el clima frío, fabricado con materiales suaves y un diseño moderno.",
    },
    {
        id: "OpQ90",
        name: "Camisa Cuadros Rojo",
        category: "Camisas",
        price: 55000,
        stock: 3,
        image: ["/red-shirt.jpg", "/red-shirt-2.jpg", "/red-shirt-3.jpg", "/red-shirt-4.jpg"],
        description: "Camisa a cuadros en tonos rojos, perfecta para un look casual y cómodo. Ideal para combinar con jeans o pantalones de lona.",
    },
    {
        id: "RsT12",
        name: "Zapatillas Urbanas Blancas",
        category: "Zapatillas",
        price: 130000,
        stock: 8,
        image: ["/white-shoes.jpg", "/white-shoes-2.jpg", "/white-shoes-3.jpg", "/white-shoes-4.jpg"],
        description: "Zapatillas urbanas en color blanco, cómodas y con un diseño moderno, ideales para el uso diario y para combinar con cualquier atuendo.",
    },
    {
        id: "UvWx34",
        name: "Gorra Snapback Gris",
        category: "Gorras",
        price: 40000,
        stock: 2,
        image: ["/snapback-cap.jpg", "/snapback-cap-2.jpg", "/snapback-cap-3.jpg", "/snapback-cap-4.jpg"],
        description: "Gorra snapback en color gris, con un estilo clásico y versátil. Perfecta para un look casual.",
    },
    {
        id: "YaZ56",
        name: "Hoodie Negro Básico",
        category: "Hoodies",
        price: 90000,
        stock: 9,
        image: ["/black-hoodie.jpg", "/black-hoodie-2.jpg", "/black-hoodie-3.jpg", "/black-hoodie-4.jpg"],
        description: "Hoodie básico en color negro, perfecto para un estilo casual y cómodo, con capucha para protección en climas fríos.",
    },
];

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(productos)}, 2000)
    })
}
export { getProducts }