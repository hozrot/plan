import firebase from '../Services/firebasebd'

export async function  showSchool(schoolRetrived){

    var schoolList=[]
    var snapshot = await firebase.firestore()
                                  .collection('school')
                                  .orderBy("schoolname")
                                  .get()
    
    snapshot.forEach((doc)=> {
        const schoolDoc =doc.data()
        schoolList.push(schoolDoc)
    })
    schoolRetrived(schoolList)

}