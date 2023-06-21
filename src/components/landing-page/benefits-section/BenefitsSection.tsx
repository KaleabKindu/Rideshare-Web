import text from "@/data/benfits/benefits.json";
import BenefitsImage from "@/components/landing-page/benefits-section/BenefitsImage";
import TextSection from "@/components/landing-page/benefits-section/TextSection";

const BenefitsSection: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-poppins text-center">
        <div className=" pt-8">
          <h1 className="text-5xl font-semibold">
            Ride<span className="text-primary">Share</span> Benefits
          </h1>
        </div>
        {text.map((data, index) => (
          <div
            key={index}
            className={`flex flex-col lg:justify-between md:flex-row justify-center mt-20 items-center md:justify-start mr-4 md:mr-8 mb-4 md:mb-0 gap-x-48 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:max-w-xs ">
              <TextSection
                count={data.count}
                heading={data.heading}
                paragraph={data.paragraph}
              />
            </div>
            <div className="">
              <BenefitsImage image={data.imageURL} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
