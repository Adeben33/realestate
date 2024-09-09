import "./AboutUsPage.css"
import OurAchievements from "../components/OurAcievements";
import OurJourney from "../components/OurJourney";
import ValuesSection from "../components/ValueSection";
import Experience from "../components/Experience";
import EstateinTeam from "../components/EstateinTeam";
import ClientSection from "../components/clients/ClientsSection";


function AboutUsPage() {
    
    return (
         <section className="aboutUsPage">
            <OurJourney />
            <ValuesSection />
            <OurAchievements />
            <Experience />
            <EstateinTeam />
            <ClientSection />
         </section>
    )
}

export default AboutUsPage;