import HeroSection from "../Componenets/Hero";
import PortfolioSection from "../Componenets/Portfolio";
import ServicesSection from "../Componenets/Services";
import TestimonialsSection from "../Componenets/Testimonals";

export default function Home(){
    return(
        <>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        </>
    )
}