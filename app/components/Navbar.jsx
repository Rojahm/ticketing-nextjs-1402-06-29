import Link from "next/link";
import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa";

function Navbar() {
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
        <Link href={"/"}>تیکت</Link>
        <Link href={"/"}>تقویم</Link>
        <Link href={"/"}>اطلاعات</Link>
        <Link href={"/"}>قرارداد</Link>
        <Link href={"/"}>بلاگ</Link>
      </nav>
      <div className="user-nav">
        <Link href={"/login"} className="flex items-center">
          <FaSignInAlt size={20} />
          <span className="mr-2">ورود</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
