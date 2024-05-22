import Image from "next/image";
import Searchbar from "@/app/components/searchbar"

export default function Header() {
  return (
    <div>
    <div className="h-12 bg-red-600">
   
    </div>

<div className="h-12 flex gap-8  bg-gray-900 w-full items-center text-center justify-around text-white">
<h1 className="">Acharya Prashant is dedicated to building a brighter future for you
</h1>
<button>Extend your hand</button>
</div>
<Searchbar />
</div>
  );
}
