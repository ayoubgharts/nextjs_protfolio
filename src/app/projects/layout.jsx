//Custom Global Css
import "../globals.css";

//Bootstrap Css
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "ayoubgharts | Projects",
  description: "Web Developer Engineer",
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
