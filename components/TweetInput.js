import { auth } from "@/firebase";
import { signoutUser } from "@/redux/userSlice";
import {
  PhotoIcon,
  ChartBarIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

export default function TweetInput() {
  const { photoUrl } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  
  async function handleSignOut() {
    await signOut(auth);
    dispatch(signoutUser());
  }

  return (
    <div className="p-3 flex space-x-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover cursor-pointer"
        src={
          photoUrl ||
          "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
        }
        onClick={handleSignOut}
      />
      <div className="w-full">
        <textarea
          className="bg-transparent resize-none outline-none w-full min-h-[52px]
        text-lg"
          placeholder="What's on your mind?"
        />
        <div className="flex justify-between border-t border-gray-700 pt-4">
          <div className="flex space-x-0">
            <div className="iconsAnimation">
              <PhotoIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="iconsAnimation">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="iconsAnimation">
              <FaceSmileIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="iconsAnimation">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="iconsAnimation">
              <MapPinIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
          </div>
          <button className="bg-[#1d9bf0] rounded-full px-4 py-1.5 font-semibold">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
