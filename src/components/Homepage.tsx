import SearchBar from "./SearchBar";
import CTASection from "./Section/CTASection";
import FeatureSection from "./Section/FeatureSection";
import HeroPage from "./Section/Heropage";
import ProblemSection from "./Section/ProblemSection";
import SolutionSection from "./Section/SolutionSection";

const Homepage = () => {
    return (
        <div>
            <div className="text-center text-3xl pt-5 px-8 md:px-10">
                <h1 className="font-bold text-3xl lg:text-5xl py-8 text-[#20253d]">Xin chào, đây là <span className="text-4xl lg:text-5xl font-black lg:font-bold">Easy Contract</span></h1>
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
