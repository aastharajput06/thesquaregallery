import * as firebase from 'firebase/app' ;
import 'firebase/storage';     // storage to store our images
import 'firebase/firestore';  //firestore is the database , these are the two different services that we are going to use


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD2giKtRGy-0AUNZvKNYG0rfi1Oa4mjOMY",
    authDomain: "thesquaregallery-80b52.firebaseapp.com",
    projectId: "thesquaregallery-80b52",
    storageBucket: "thesquaregallery-80b52.appspot.com",
    messagingSenderId: "700031428277",
    appId: "1:700031428277:web:fa900cb4770c80008cc0fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();  //starts our storage service
  const projectFirestore = firebase.firestore();

  export {projectFirestore, projectStorage};