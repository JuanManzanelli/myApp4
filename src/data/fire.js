import { initializeApp } from "firebase/app";
import { getFirestore, 
        doc, 
        getDoc,
        query, 
        where, 
        collection, 
        getDocs,
        Timestamp,
        setDoc,
        addDoc,
       } from "firebase/firestore/lite";
import { createBrowserHistory } from "history";

import Item from "../components/Item";

const firebaseConfig = {
  apiKey: "AIzaSyBLjnB6XQu2QYxDmvVa7X-PvVrL_Wu05kg",
  authDomain: "my-sleep31220.firebaseapp.com",
  projectId: "my-sleep31220",
  storageBucket: "my-sleep31220.appspot.com",
  messagingSenderId: "709283967278",
  appId: "1:709283967278:web:e07a355ba9125c8a364abf"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function  getAllItems() {
  const miColec = collection(firestoreDB, 'colchones');
  /*getDocs(miColec).then(reslt => miVariable = result */
  const colchonSnap = await getDocs(miColec);

  return colchonSnap.docs.map(doc => {
    return { 
     ...doc.data(),
     id: doc.id
    }
  });
}

export async function getItemsByCategory(categoryId){
  const miColec = collection(firestoreDB,'colchones');
  const queryColchon = query (miColec, where("genre","==", categoryId));

  const colchonSnap = await getDocs(queryColchon);

  return colchonSnap.docs.map(doc => {
    return { 
     ...doc.data(),
     id: doc.id
    }
  });
}

export async function getItem(id){
  const miColec = collection(firestoreDB,'colchones');
  const colchonRef = doc (miColec,id);
  const colchonSnap = await getDoc(colchonRef);

  return { ...colchonSnap.data(),id: colchonSnap.id};
}

export function dataToFirebase() {
  const PRODUCTS = [ 
    {
        id: 1,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "King Silver",
        color: "Crimson",
        price: "$14987.06",
        stock: 11,
        genre: "Low"
      }, {
        id: 2,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "King Golden",
        color: "Orange",
        price: "$19067.34",
        stock: 18,
        genre: "Low"
      }, {
        id: 3,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "Queen Silver",
        color: "Violet",
        price: "$10955.20",
        stock: 21,
        genre: "Low"
      }, {
        id: 4,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "King Master Golden",
        color: "Puce",
        price: "$22886.71",
        stock: 6,
        genre: "Medium"
      }, {
        id: 5,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "Quenn Golden Plus",
        color: "Maroon",
        price: "$26105.25",
        stock: 4,
        genre: "Medium"
      }, {
        id: 6,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "Place Base",
        color: "Teal",
        price: "$11501.03",
        stock: 5,
        genre:"Medium"
      }, {
        id: 7,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "Place Eco",
        color: "Yellow",
        price: "$10977.69",
        stock: 12,
        genre:"High"
      }, {
        id: 8,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "Place Small",
        color: "Blue",
        price: "$17004.13",
        stock: 8,
        genre:"High"
      }, {
        id: 9,
        imgUrl:"https://picsum.photos/id/900/600",
        title: "Place Master",
        color: "Aquamarine",
        price: "$28754.98",
        stock: 1,
        genre:"High"
      },
    ];

  const miColeccion= collection (firestoreDB,'colchones');

  PRODUCTS.forEach((item) => {
    const newDoc = doc(miColeccion);
    setDoc(newDoc, item)
    .then(() => {
      console.log("Document written with id: ", newDoc.id)})
      .catch((err) => {
        console.error("Error adding document: ",err);
      });
    });
}


export async function createBuyOrder(orderData) {
  const buyTimestamp = Timestamp.now();
  const orderWithDate = {
    ...orderData,
  date: buyTimestamp
};

const miColec = collection(firestoreDB,"buyOrders");
const orderDoc= await addDoc(miColec, orderWithDate);


  console.log("orden lista con el ID:", orderDoc.id);
  
}
