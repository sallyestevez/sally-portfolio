import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <h1 className="PageTitle">About</h1>
        <AboutSection />
        <h1 className="PageTitle">Contact</h1>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
