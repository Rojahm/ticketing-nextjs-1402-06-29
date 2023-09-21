import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="Navbar">
      <Image
        src={
          "/img/lssi-high-resolution-logo-color-on-transparent-background.webp"
        }
        width={120}
        height={120}
        alt="site logo"
      />
      <nav>
        <Link href={"/"}>تیکت</Link>
        <Link href={"/"}>تقویم</Link>
        <Link href={"/"}>اطلاعات</Link>
        <Link href={"/"}>قرارداد</Link>
        <Link href={"/"}>بلاگ</Link>
      </nav>
    </div>
  );
}

export default Navbar;
