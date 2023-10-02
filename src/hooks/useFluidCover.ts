import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useFluidCovers } from './useFluidCovers';

type UseFluidCoverProps = {
  imagePath?: string | null | undefined,
};

export const useFluidCover = (
  props: UseFluidCoverProps,
): IGatsbyImageData | undefined | null => {
  const { imagePath } = props;
  const allImages = useFluidCovers();

  if (!imagePath) {
    return undefined;
  }

  const foundNode = allImages.find(
    (node: { relativePath: string; }) => {
      return node.relativePath === imagePath;
    },
  );

  if (!foundNode) {
    return undefined;
  }

  return foundNode?.childImageSharp?.gatsbyImageData;
};