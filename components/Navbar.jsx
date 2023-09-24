import Link from "next/link";
import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa";
import LogOut from "./LogOut";

function Navbar({ user }) {
  return (
    <div className="Navbar">
      <Link href={"/"}>
        <Image
          src={
            "/img/lssi-high-resolution-logo-color-on-transparent-background.webp"
          }
          width={120}
          height={120}
          alt="site logo"
        />
      </Link>
      <nav>
        <Link href={"/tickets"}>تیکت</Link>
        <Link href={"/"}>تقویم</Link>
        <Link href={"/"}>اطلاعات</Link>
        <Link href={"/"}>قرارداد</Link>
        <Link href={"/"}>بلاگ</Link>
      </nav>
      <div className="user-nav">
        {user && (
          <div className="flex items-center">
            <LogOut />
            <span className="mr-2">{user.user.email}, درود</span>
          </div>
        )}
        {!user && (
          <Link href={"/login"} className="flex items-center">
            <FaSignInAlt size={20} />
            <span className="mr-2">ورود</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
