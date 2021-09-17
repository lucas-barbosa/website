import React, { FormEvent } from "react";
import AboutMe from "./AboutMe";
import styles from "../../../styles/projects/dashboard/categories.module.scss";

type categories = { _id: string; category: string; projectsCount: number }[];

interface CategoriesProps {
  categories: categories;
  setCategory: Function;
  isPending: boolean;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  setCategory,
  isPending,
}) => {
  return (
    <div className="container-lg col-md-12 col-lg-6 rounded pb-3">
      <AboutMe />
      <div className="d-flex align-items-center justify-content-center">
        <h4 className="fs-3 text-center my-4 ms-2">BROWSE BY CATEGORIES</h4>
      </div>
      <div
        className="buttons d-flex flex-wrap justify-content-center"
        role="group"
      >
        {/* all category button (is seperate becuase we need empty id) */}
        <button
          id=""
          type="button"
          className={`m-1 p-2 ${styles.allButton}`}
          onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
          disabled={isPending}
        >
          All projects
        </button>

        {categories?.map((category) => (
          <button
            id={category.category}
            type="button"
            className={`${styles.buttons} text-center m-1 p-2 ps-3`}
            key={category._id}
            disabled={isPending}
            onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
          >
            {category.category}
            <span className={`badge count ms-1 text-dark ${styles.count}`}>
              {category.projectsCount}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
