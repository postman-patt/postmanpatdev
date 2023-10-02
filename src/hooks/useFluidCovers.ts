import { graphql, useStaticQuery } from 'gatsby';

export const useFluidCovers = () => {
  const images = useStaticQuery(graphql`
    query UseImagesQuery {
      allFile(
        filter: {sourceInstanceName: {eq: "images"}}
      ) {
        nodes {
          base
          name
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH,
              quality: 95,
              transformOptions: {
                fit: COVER,
                cropFocus: CENTER,
                grayscale: false,
              },
            )
          }
        }
      }
    }
  `);
  return images.allFile.nodes;
};