import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
      
    <div className="wrapper" style={{ maxWidth: "960px",
        width: "100%",
        margin: "30px auto",
        transform: "scale(0.8)"}}>
      <div className="landing-page">
        <div style="text-align:center;" className="icon__download"></div>

        <h1> 404 Error.</h1>
        <p> We can't find the page you're looking for.</p>
        <button>Back to home</button>
      </div>
    </div>
  );
};

export default NotFound;
