import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAK97xWB07KLnozBSwfzkzGpBYHxo2r-dA",
    authDomain: "react-tutorial-clothing-app.firebaseapp.com",
    databaseURL: "https://react-tutorial-clothing-app.firebaseio.com",
    projectId: "react-tutorial-clothing-app",
    storageBucket: "react-tutorial-clothing-app.appspot.com",
    messagingSenderId: "297647434003",
    appId: "1:297647434003:web:654670c0d69e085a96d2e6"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
