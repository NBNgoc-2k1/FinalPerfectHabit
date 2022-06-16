import {database,authentication} from '../../config'
import { collection, addDoc, getDocs, doc, deleteDoc, query, orderBy, updateDoc } from "firebase/firestore"; 

export async function addNewHabit(habit) {
    // firebase.firestore()
    //     .collection('HabitDetail')
    //     .add(habit)
    //     .then((snapshot) => {
    //         habit.id = snapshot.id;
    //         snapshot.set(dance);
    //     })
    //     .catch((error) => console.log(error));
    try {
        const habitRef = await addDoc(collection(database, "HabitDetail"), habit);
        console.log("Document written with ID: ", habitRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getHabits(setDataList){
    // var snapshot = await firebase.firestore()
    //                                 .collection('HabitDetail')
    //                                 .orderBy('name','asc')
    //                                 .get()
    // snapshot.forEach((doc) => {
    //     const habitDoc = doc.data();
    //     habitDoc.id = doc.id
    //     habitList.push(habitDoc)
    // })
    const habitCollection = collection(database,"HabitDetail");
    const orderByNameQuery = query(habitCollection,orderBy('name','asc'));
    const habitsSnapshot = await getDocs(orderByNameQuery);
    const habitList = [];
    
    habitsSnapshot.forEach((doc) => {
        const habitDoc = doc.data();
        habitDoc.id = doc.id
        habitList.push(habitDoc)
    })

    const filterNormalHabit = habitList.filter(item => (item.isComplete == false && item.isMissed == false))
    const filterCompletedHabit = habitList.filter(item => item.isComplete == true );
    const filterMissedHabit = habitList.filter(item => item.isMissed == true );

    setDataList(filterNormalHabit,filterCompletedHabit,filterMissedHabit);
}

export async function upDateField(habit){
    // firebase.firestore()
    //     .collection("HabitDetail")
    //     .doc(habit.id)
    //     .set(habit)
    //     .catch((error) => console.log(error))
    try {
        await updateDoc(doc(database,'HabitDetail',habit.id),habit)
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function deleteSelectedHabit(habit){
    // firebase.
    //     firestore().
    //     collection("HabitDetail").
    //     doc(habit.id).
    //     delete().
    //     catch((error) => console.log(error))
    try {
        await deleteDoc(doc(database,'HabitDetail',habit.id))
    } catch (e) {
        console.error("Error adding document: ", e);
    }
} 