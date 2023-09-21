import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-evenly">
      <Link href={"/"}>تیکت</Link>
      <Link href={"/"}>تقویم</Link>
      <Link href={"/"}>اطلاعات</Link>
      <Link href={"/"}>قرارداد</Link>
      <Link href={"/"}>بلاگ</Link>
    </nav>
  );
}

export default Navbar;
