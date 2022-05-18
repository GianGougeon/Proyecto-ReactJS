import ItemCount from "./ItemCount";

const ItemListContainer = ({Contenido}) =>{
    return(
        <>
            <div>
            <h1 style={{justifyContent: 'center', display: 'flex', paddingTop: '10vh'}}>{Contenido}</h1>
            
            <ItemCount stock="5" initial="1" />
            </div>
        </>
        

    )
}
export default ItemListContainer;