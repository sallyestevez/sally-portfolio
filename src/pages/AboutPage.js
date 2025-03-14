import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <AboutSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
