"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-start  relative bg-transparent px-4 pt-6 h-28">
      <div className="text-white mt-3 mx-4 font-sans font-bold text-xl">
        <div>MUZIFY</div>
      </div>
      <div className=" mt-auto mx-auto">
        {/* <header className="">
          <h1 className="text-3xl md:text-4xl font-bold text-center">MUZIFY</h1>
          <p className="text-center text-gray-400 mt-2">
            Public Music Platform
          </p>
        </header> */}
      </div>
      <div className="size-10 min-h-10 ml-16 rounded-full aspect-square cursor-pointer">
        {/* {!data?.user?.name ? "signIn" : "signOut"} */}
        {/* <div> */}
        <Avatar>
          <AvatarImage src={"https://github.com/shadcn.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* </div> */}
        {/* <div>{data?.user?.name}</div> */}
      </div>
    </nav>
  );
};

export default Navbar;
//bg-gradient-to-tr from-[#db2348] to-[#933c3c]
