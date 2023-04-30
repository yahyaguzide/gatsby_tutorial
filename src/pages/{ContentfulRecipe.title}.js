import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const query = graphql`
  query getSingleRecipe($id: String) {
    contentfulRecipe(id: { eq: $id }) {
      title
      cookTime
    }
  }
`

const RecipeTemplate = () => {
  const {
    contentfulRecipe: { title, cookTime }
  } = useStaticQuery(query)
  return (
    <div>
      {title} {cookTime}
    </div>
  )
}

export default RecipeTemplate
