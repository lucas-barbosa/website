import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <React.Fragment>
      <div className="justify-content-center d-flex flex-column align-items-center">
        <h4 className="fs-3 text-start my-2 ms-2">ABOUT ME</h4>
        <Image
          src="https://avatars.githubusercontent.com/u/75932477?v=4"
          width="130"
          height="130"
          className="rounded-circle"
          unoptimized={true}
          loader={({ src }) => src}
        ></Image>
        <p className="text-muted lead ms-3 mt-2 text-center px-5">
          Hi, I am full-stack web developer backend and frontend, I intersting
          in open source projects and I love to show my skills to public
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
