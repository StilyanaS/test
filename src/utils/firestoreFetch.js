import {
  query,
  where,
  collection,
  getDocs,
  doc,
  getDoc,
} from "@firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (categoryName) => {
  let q;
  if (categoryName) {
    q = query(
      collection(db, "products"),
      where("category", "==", categoryName)
    );
  } else {
    q = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(q);
  const productsFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return productsFromFirestore;
};

export const firestoreFetchItem = async (itemId) => {
  const docRef = doc(db, "products", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: itemId, ...docSnap.data() };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
