import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAZI4eczygJqVMQNN1xsG9pacdW7a2s4gc",
  authDomain: "manchestercity-6ffe5.firebaseapp.com",
  projectId: "manchestercity-6ffe5",
  storageBucket: "manchestercity-6ffe5.appspot.com",
  messagingSenderId: "925686037892",
  appId: "1:925686037892:web:37d304171328bc5e8431d1"
};

firebase.initializeApp(firebaseConfig)

export {
  firebase
}
