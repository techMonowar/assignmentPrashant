import Image from "next/image";

export default function Searchbar() {
  return (
      <div className="bg-white h-20 flex">
          <input  type="text" placeholder="Search for video series" />
          <button className="bg-red-400">Login </button>
      </div>
  );
}
