import Image from "next/image";
import Link from "next/link";
import DesktopImage from "../../public/airbnb-desktop.png";
import mobileImage from "../../public/airbnb-mobile.webp";
import UserNav from "../UserNav/UserNav";
import SearchModalComponet from "../SearchComponent/SearchModalComponet";

const Navbar = () => {
  return (
    <nav className="flex px-2 items-center justify-between container mx-auto w-full border-b p-0">
      <Link className=" hidden lg:block" href={"/"}>
        <Image
          src={DesktopImage}
          alt="desktop image "
          className="w-32 hidden lg:block "
        />
        {/* <Image
          src={mobileImage}
          alt="mobile image "
          className="w-12    hidden "
        /> */}
      </Link>
     <SearchModalComponet />
 


      <UserNav />
    </nav>
  );
};

export default Navbar;
