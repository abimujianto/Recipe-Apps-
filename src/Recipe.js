import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.img}>
        <ol>
          {ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}
        </ol>
        <img className={style.image} src={image} alt="" />
      </div>
      <p>
        <span>Calories </span>
        {calories}
      </p>
    </div>
  );
};

export default Recipe;
