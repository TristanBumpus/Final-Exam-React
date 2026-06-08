import { bd, COLL_MENU } from "./init";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function getMenu() {
  const coll = query(collection(bd, COLL_MENU), orderBy("prix", "asc"));

  const refDoc = await getDocs(coll);

  const doc = refDoc.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return doc;
}
