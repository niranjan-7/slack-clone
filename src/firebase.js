import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3Ljhic1iwpn4Ef0qNSJQ_Ie5teD1lXy0",
  authDomain: "slack-clone-ba473.firebaseapp.com",
  projectId: "slack-clone-ba473",
  storageBucket: "slack-clone-ba473.appspot.com",
  messagingSenderId: "452478117191",
  appId: "1:452478117191:web:6e88922bbb9c23aa809862",
  measurementId: "G-95WSQ84JF5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google:', error.message);
  }
};

export { signInWithGoogle };
