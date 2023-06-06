import { auth } from "@/firebase";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  async function handleSignIn () {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn () {
    await signInWithEmailAndPassword(auth, "guest@gmail.com", "Bonba-san27@")
  }

  return (
    <>
      <button
        className="hover:bg-[#cbd2d7] bg-transparent border border-white text-white
        w-[160px] h-[40px] rounded-full"
        onClick={() => dispatch(openLoginModal())}
      >
        Log in
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex items-center justify-center"
      >
        <div
          className="bg-black text-white rounded-lg border border-gray-700 w-[90%] h-[600px] md:w-[560px] md:h-[600px]
        flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl">Sign in to your account</h1>
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
            <button onClick={handleSignIn} className="bg-white text-black w-full font-bold text-lg p-2 rounded-lg mt-6">
              Sign in
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>

            <button onClick={handleGuestSignIn} className="bg-white text-black w-full font-bold text-lg p-2 rounded-lg mt-4">
              Sign in as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
