import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);
  //const recipes = data.allContentfulRecipe.nodes
  return (
    <div>
      <h4>AllRecipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default AllRecipes;
