import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Set the Default value as an Empty array, so if no recipes where provided it does not returns an error
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
