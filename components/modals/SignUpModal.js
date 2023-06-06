import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const user = useSelector((state) => state.user) 
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter()

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName : name,
      photoURL : `./assets/profilePictures/pfp${Math.ceil(Math.random() * 10)}.jpg`
    })

    router.reload()
  }

  async function handleGuestSignIn () {
    await signInWithEmailAndPassword(auth, "guest@gmail.com", "Bonba-san27@")
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });
    return unsubscribed;
  }, []);
  console.log(user)  

  return (
    <>
      <button
        className="hover:bg-[#cbd2d7] bg-white border border-white text-black
        w-[160px] h-[40px] rounded-full"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex items-center justify-center"
      >
        <div
          className="bg-black text-white rounded-lg border border-gray-700 w-[90%] h-[600px] md:w-[560px] md:h-[600px]
        flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button onClick={handleGuestSignIn} className="bg-white text-black w-full font-bold text-lg p-2 rounded-lg">
              Sign in as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your account</h1>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-6"
              type="text"
              placeholder="Full Name"
              onChange={e => setName(e.target.value)}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-6"
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-6"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSignUp}
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-lg mt-6"
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
