import CTASection from "../Homepage/CTASection";
import FeatureSection from "../Homepage/FeatureSection";
import HeroPage from "../Homepage/Heropage";
import ProblemSection from "../Homepage/ProblemSection";
import SolutionSection from "../Homepage/SolutionSection";
import SearchBar from "./SearchBar";

const Homepage = () => {
    return (
        <div>
            <div className="text-center text-3xl pt-5 px-8 md:px-10">
                <h1 className="font-bold text-3xl lg:text-5xl py-8 text-econtract">Xin chào, đây là <span className="block md:inline text-4xl lg:text-5xl font-black lg:font-bold">Easy Contract</span></h1>
                <SearchBar />
                <HeroPage />
            </div>
            <div className="text-center mt-20"><ProblemSection /></div>
            <div className="px-10 text-center">
                <SolutionSection />
            </div>
            <div>
                <FeatureSection />
                <CTASection />
            </div>
        </div>
    );
};

export default Homepage;
