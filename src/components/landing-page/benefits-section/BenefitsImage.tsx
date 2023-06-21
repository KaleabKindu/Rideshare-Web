import React from "react";
import Image from "next/image";

interface BenefitsImageProps {
  image: string;
}
const BenefitsImage: React.FC<BenefitsImageProps> = ({ image }) => {
  return (
    <div className="relative inline-block  " data-testid="image">
      <Image
        width={302}
        height={352}
        className="aspect-auto"
        src={`/images/landing-page/benefits/${image}`}
        alt="image"
      />
    </div>
  );
};

export default BenefitsImage;
