import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAN5pbeTQ0uLw13puZQRYgqF41DxAsAuII",
  authDomain: "twitter-clone-too-point-oh.firebaseapp.com",
  projectId: "twitter-clone-too-point-oh",
  storageBucket: "twitter-clone-too-point-oh.appspot.com",
  messagingSenderId: "498880818267",
  appId: "1:498880818267:web:5a2fc647f3351a785a637e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)