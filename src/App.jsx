import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductTeam from "./components/ProductTeam";
import EngineeringTeams from "./components/EngineeringTeams";
import Testimonial from "./components/Testimonial";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div
        className="min-h-[700px] bg-gradient-to-b from-[#FFFFFF] to-[#E2F1FF]  flex flex-col items-center justify-center pb-40 mb:p-0 "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)" }}
      >
        <Header />
        <Hero />
      </div>
      <About />
      <ProductTeam />
      <EngineeringTeams />
      <Testimonial />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default App;
