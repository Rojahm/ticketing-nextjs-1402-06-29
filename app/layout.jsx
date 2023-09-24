import "./globals.css";
//custom
import Footer from "../components/Footer";

export const metadata = {
  title: "LSSI | IT Dep",
  description: "Portal for IT management of LSSI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
