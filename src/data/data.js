// array productos
const productos = [{
        id: 1,
        categoria: "Jean",
        titulo: "Jean con lunares Rosa",
        talle: "3t",
        descripcion: "Jean con lunares rosa con cintura ajustable elastizado",
        precio: 260,
        stock: 1,
        imagenURL: "https://i.ibb.co/FHncs5R/281489759-1905146419675418-2330629955635064811-n.jpg",
        imagenURL2: "https://i.ibb.co/gSHbsHk/282035344-424369182447057-7089374981565222818-n.jpg",
        imagenURL3: "https://i.ibb.co/88F9snk/282685922-759292418768281-8808850199621431724-n.jpg",
        imagenURL4: "",
    },
    {
        id: 2,
        categoria: "Jean",
        titulo: "Jean Otherside",
        talle: "3t",
        descripcion: "Jean Otherside, mide 53 cm de largo",
        precio: 260,
        stock: 3,
        imagenURL: "https://i.ibb.co/Fx58Gv8/281576704-7382524795155843-542529735822360991-n.jpg",
        imagenURL2: "https://i.ibb.co/pbf4450/281419847-337751021718356-1387937766769260766-n.jpg",
        imagenURL3: "https://i.ibb.co/MfJHbDj/281597573-372042461559984-9017441200369243353-n.jpg",
        imagenURL4: "",
    },
    {
        id: 3,
        categoria: "Pantalon",
        titulo: "Pantalón Carters",
        talle: "24 meses",
        descripcion: "Pantalón Carters, mide 50 CM de largo",
        precio: 270,
        stock: 2,
        imagenURL: "https://i.ibb.co/DtNcndk/281369206-431158815505726-5551100738152044812-n.jpg",
        imagenURL2: "https://i.ibb.co/VtMGGgj/281436747-317240650568918-489659510121486219-n.jpg",
        imagenURL3: "https://i.ibb.co/64mRjJW/281917655-1060314791505729-2621595552385085-n.jpg",
        imagenURL4: "",
    },
    {
        id: 4,
        categoria: "Saquito",
        titulo: "Saquito tejido",
        talle: "24 meses",
        descripcion: "",
        precio: 250,
        stock: 5,
        imagenURL: "https://i.ibb.co/d29WQzx/281642602-558356435695105-5992104654962743647-n.jpg",
        imagenURL2: "https://i.ibb.co/YtqPDdk/281390003-4928041313960708-9169068746418832144-n.jpg",
        imagenURL3: "",
        imagenURL4: "",
    },
    {
        id: 5,
        categoria: "",
        titulo: "Campera GAP",
        talle: "3t",
        descripcion: "",
        precio: 470,
        stock: 0,
        imagenURL: "https://i.ibb.co/jbjzM0K/279662921-1059419788317576-3090044238474935643-n.jpg",
        imagenURL2: "https://i.ibb.co/zHLb7yq/279716585-1657112271324233-8760382211639714565-n.jpg",
        imagenURL3: "https://i.ibb.co/rp8dcxt/279771953-5061328803943523-1101928064862233516-n.jpg",
        imagenURL4: "",
    },
    {
        id: 6,
        categoria: "Bata de baño",
        titulo: "Bata de baño",
        talle: "4-5 años",
        descripcion: "Bata de baño Renner súper gruesa",
        precio: 490,
        stock: 3,
        imagenURL: "https://i.ibb.co/P9qHfB3/279240863-2235709636591865-4723453757372354907-n.jpg",
        imagenURL2: "https://i.ibb.co/wW8TYDW/279134956-1603487440034509-1806258948191827770-n.jpg",
        imagenURL3: "https://i.ibb.co/k67ydmN/279182167-157808850044991-8731173984068071573-n.jpg",
        imagenURL4: "",
    },
]

export const getData = new Promise((resolve, reject) => {
    //accion
    let condicion = true
    // Timeout de 2 s
    setTimeout(() => {
        if (condicion) {
            resolve(productos)
        } else {
            reject()
        }

    }, 2000);
})
export default productos;