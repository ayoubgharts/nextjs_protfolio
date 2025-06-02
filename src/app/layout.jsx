
//Custom Global Css
import "./globals.css";

//Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';

//import components jsx
import Header from '@/components/header/Header';
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "ayoubgharts | Home Page",
  description: "Web Developer Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
