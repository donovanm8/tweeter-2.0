import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignUpModal";

export default function BottomBanner() {
  return (
    <div className="fixed bottom-0 xl:space-x-[200px] flex justify-center items-center w-full h-[80px] bg-[#1d9bf0]">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold">Dont miss what's happening</h1>
        <span className="text-[18px] font-normal">
          People on Twitter are the first to know.
        </span>
      </div>
      <div className="space-x-3">
        <LoginModal />
        <SignupModal />
      </div>
    </div>
  );
}
