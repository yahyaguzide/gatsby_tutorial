import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/*  Using Aliases for querries
 *   changes siteMetadata in the response to siteMetadata
 */
const getData = graphql`
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
const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>title: {title}</h2>
    </div>
  );
};

export default FetchData;
