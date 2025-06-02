//Custom Global Css
import "../globals.css";

//Bootstrap Css
import "bootstrap/dist/css/bootstrap.min.css";

//import components jsx
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "ayoubgharts | Contact Us",
  description: "Web Developer Engineer",
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
