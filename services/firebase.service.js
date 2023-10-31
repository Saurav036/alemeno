import {
  collection,
  onSnapshot,
  serverTimeStamp,
  addDoc,
  doc, getDoc 
} from "firebase/firestore";
import { FirebaseDb } from "../firebase/firebaseConfig";

export const getCourses = async () => {
  const res = await fetch("http://192.168.1.8:8081/db/courseList.json");
  const data = await res.json();
  return data;
};

// const onSnap = async (c) => {
//   let data = [];
//   await onSnapshot(c, async (snapshot) => {
//     const courseList = await snapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() };
//     });
//     data = courseList;
//     console.log("\n\n courseLIST are here", courseList);
//   });
//   return data;
// };

export const getCourseById = async (id) => {
  try {
      const docRef = await doc(FirebaseDb, "courses", id)
        const docSnap = await getDoc(docRef);
         console.log('\n\n doc ref is here ', docSnap)
        return docSnap.data();
    } catch(error) {
        console.log(error)
    }
};


   // const courses = collection(FirebaseDb, "courses");
    // onSnapshot(courses, (snapshot) => {
    //   const courseList = snapshot.docs.map((doc) => {
    //     return { id: doc.id, ...doc.data() };
    //   });
    //   setData(courseList);
    // });