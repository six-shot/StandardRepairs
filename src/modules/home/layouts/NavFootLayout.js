import Footer from "../feautures/footer";
import FooterBottom from "../feautures/footer/FooterBottom";
import Navbar from "../feautures/navbar";

export default function NavFootLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
      <FooterBottom/>
    </div>
  );
}
