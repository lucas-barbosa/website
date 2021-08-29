import React from "react";

// components
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="intro bg-light">
        <Image
          width="500"
          height="300"
          loader={()=>process.env.language_states}
          src={process.env.language_states}
          alt="alguerocode"
        />
        &nbsp;
        <Image
          width="500"
          height="300"
          loader={()=>process.env.github_states}
          src={process.env.github_states}
          alt="alguerocode"
        />
        <Image
          width="400"
          height="300"
          loader={()=>process.env.streak_states}
          src={process.env.streak_states}
          alt="alguerocode"
        />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
