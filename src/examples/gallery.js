import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        size
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: DOMINANT_COLOR
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
};

export default Gallery;
