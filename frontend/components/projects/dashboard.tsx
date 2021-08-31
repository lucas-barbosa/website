import React, { ReactElement } from "react";

interface ProjectCategories {
  category: string;
  count: number;
}

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <section id="dashboard" className="pb-3">
        <div className="row d-flex align-items-start justify-content-center m-3">
          <div className="container-lg col-md-5 border border-primary border-1 col-ms-8 rounded pb-3">
            <h4 className="text-primary lead text-start my-2 ms-2">
              <i className="bi bi-bookmarks fs-4 me-1"></i>Browse by Categories
            </h4>
            <div
              className="buttons d-flex flex-wrap justify-content-start"
              role="group"
            >
              {/* <button type="button" className="btn btn-outline-primary m-1">Left</button> */}
              {process.env.project_categories?.map((tag: ProjectCategories) => (
                <button type="button" className="btn btn-primary m-1">
                  {tag.category}
                  <span className="badge count-span ms-2">{tag.count}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="container-lg col-md-6 border border-primary border-1 col-sm-8 rounded mt-sm-3 mt-md-0 pb-3">
            <h4 className="text-primary lead text-start my-2 ms-2">
              <i className="bi bi-clipboard-check fs-4 me-1"></i>my projects
            </h4>
            <div className="buttons" role="group">
              <a href="https://github.com/alguerocode/simple-react-ssr">
                <img
                  className="img-fluid"
                  src="https://gh-card.dev/repos/alguerocode/simple-react-ssr.svg"
                />
              </a>
              <a href="https://github.com/alguerocode/simple-react-ssr">
                <img
                  className="img-fluid"
                  src="https://gh-card.dev/repos/alguerocode/simple-react-ssr.svg"
                />
              </a>
              <a href="https://github.com/alguerocode/simple-react-ssr">
                <img
                  className="img-fluid"
                  src="https://gh-card.dev/repos/alguerocode/simple-react-ssr.svg"
                />
              </a>
              <a href="https://github.com/alguerocode/simple-react-ssr">
                <img
                  className="img-fluid"
                  src="https://gh-card.dev/repos/alguerocode/simple-react-ssr.svg"
                />
              </a>
              <a href="https://github.com/alguerocode/simple-react-ssr">
                <img
                  className="img-fluid"
                  src="https://gh-card.dev/repos/alguerocode/simple-react-ssr.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
