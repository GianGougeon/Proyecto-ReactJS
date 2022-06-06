// array productos Categorias Superior 1 inferior 2 calzado 3
export const productos = [
    {
        id: 1,
        idCategoria: 2,
        categoria: "Jean",
        estado: "Usado",
        titulo: "Jean con lunares Rosa",
        talle: "3t",
        descripcion: "Jean con lunares rosa con cintura ajustable elastizado",
        precio: 260,
        stock: 4,
        imagenURL: "https://i.ibb.co/FHncs5R/281489759-1905146419675418-2330629955635064811-n.jpg",
        imagenURL2: "https://i.ibb.co/gSHbsHk/282035344-424369182447057-7089374981565222818-n.jpg",
        imagenURL3: "https://i.ibb.co/88F9snk/282685922-759292418768281-8808850199621431724-n.jpg"
    }, {
        id: 2,
        idCategoria: 2,
        categoria: "Jean",
        estado: "Usado",
        titulo: "Jean Otherside",
        talle: "3t",
        descripcion: "Jean Otherside, mide 53 cm de largo",
        precio: 260,
        stock: 3,
        imagenURL: "https://i.ibb.co/Fx58Gv8/281576704-7382524795155843-542529735822360991-n.jpg",
        imagenURL2: "https://i.ibb.co/pbf4450/281419847-337751021718356-1387937766769260766-n.jpg",
        imagenURL3: "https://i.ibb.co/MfJHbDj/281597573-372042461559984-9017441200369243353-n.jpg"
    }, {
        id: 3,
        idCategoria: 2,
        categoria: "Pantalon",
        estado: "Usado",
        titulo: "Pantalón Carters",
        talle: "24 meses",
        descripcion: "Pantalón Carters, mide 50 CM de largo",
        precio: 270,
        stock: 2,
        imagenURL: "https://i.ibb.co/DtNcndk/281369206-431158815505726-5551100738152044812-n.jpg",
        imagenURL2: "https://i.ibb.co/VtMGGgj/281436747-317240650568918-489659510121486219-n.jpg",
        imagenURL3: "https://i.ibb.co/64mRjJW/281917655-1060314791505729-2621595552385085-n.jpg"
    }, {
        id: 4,
        idCategoria: 1,
        categoria: "Saquitos",
        estado: "Usado",
        titulo: "Saquito tejido",
        talle: "24 meses",
        descripcion: "",
        precio: 250,
        stock: 5,
        imagenURL: "https://i.ibb.co/d29WQzx/281642602-558356435695105-5992104654962743647-n.jpg",
        imagenURL2: "https://i.ibb.co/YtqPDdk/281390003-4928041313960708-9169068746418832144-n.jpg",
        imagenURL3: ""
    }, {
        id: 5,
        idCategoria: 1,
        categoria: "Camperas",
        estado: "Usado",
        titulo: "Campera GAP",
        talle: "3t",
        descripcion: "",
        precio: 470,
        stock: 1,
        imagenURL: "https://i.ibb.co/jbjzM0K/279662921-1059419788317576-3090044238474935643-n.jpg",
        imagenURL2: "https://i.ibb.co/zHLb7yq/279716585-1657112271324233-8760382211639714565-n.jpg",
        imagenURL3: "https://i.ibb.co/rp8dcxt/279771953-5061328803943523-1101928064862233516-n.jpg"
    }, {
        id: 6,
        idCategoria: 1,
        categoria: "Bata de baño",
        estado: "Usado",
        titulo: "Bata de baño",
        talle: "4-5 años",
        descripcion: "Bata de baño Renner súper gruesa",
        precio: 490,
        stock: 3,
        imagenURL: "https://i.ibb.co/P9qHfB3/279240863-2235709636591865-4723453757372354907-n.jpg",
        imagenURL2: "https://i.ibb.co/wW8TYDW/279134956-1603487440034509-1806258948191827770-n.jpg",
        imagenURL3: "https://i.ibb.co/k67ydmN/279182167-157808850044991-8731173984068071573-n.jpg"
    }, {
        id: 7,
        idCategoria: 3,
        categoria: "",
        estado: "Usado",
        titulo: "Zapatos Náuticos",
        talle: "25",
        descripcion: "Zapatos Marca Náutica en Impecable estado",
        precio: 390,
        stock: 1,
        imagenURL: "https://i.ibb.co/WvS0HxK/275767615-457824436078040-6614828358435784267-n.jpg",
        imagenURL2: "https://i.ibb.co/ngMFSN0/275789754-5001964119888516-5028230397417896278-n.jpg",
        imagenURL3: "https://i.ibb.co/993SsFz/275858863-699947964351867-2022876808227066298-n.jpg"
    }
];

export const getData = (tiempo, t) => {
    let condicionk = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condicionk) {
                resolve(t);
            } else {
                reject("Error");
            }
        }, tiempo);
    });
}
