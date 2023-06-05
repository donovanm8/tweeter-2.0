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
        <button className="hover:bg-[#cbd2d7] bg-transparent border border-white text-white
        w-[160px] h-[40px] rounded-full">
          Log In
        </button>
        <button className="hover:bg-[#cbd2d7] bg-white border border-white text-black
        w-[160px] h-[40px] rounded-full">Sign Up</button>
      </div>
    </div>
  );
}
