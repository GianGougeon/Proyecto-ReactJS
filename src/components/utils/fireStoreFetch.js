import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const fireStoreFetch = async (idCategoria) => {
    let q;
    if (idCategoria) {
        q = query(collection(db, "productos"), where('idCategoria', '==', idCategoria));
    } else {
        q = query(collection(db, "productos"), orderBy('titulo'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const fireStoreFetchOne = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else {
      // doc.data()
      console.log("No such document!");
    }
}