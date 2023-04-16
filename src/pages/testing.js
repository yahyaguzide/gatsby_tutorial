import React from "react";
import { graphql } from "gatsby";

const Testing = ({ data }) => {
  const author = data.site.info.author;
  return <h2>auhtor: {author}</h2>;
};

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;
export default Testing;
