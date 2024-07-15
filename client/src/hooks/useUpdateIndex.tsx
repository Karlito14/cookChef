import { useEffect, useState } from "react";
import { RecipeInterface } from "../types/types";

export const useUpdateIndex = (recipes: RecipeInterface[]) => {
  const [index, setIndex] = useState(6);

  useEffect(() => {
    const updateIndex = () => {
      const pageHeight = window.innerHeight;
      const positionScroll = document.documentElement.scrollTop;
      const pageHeightTotal = document.documentElement.offsetHeight;

      if (
        pageHeight + positionScroll >= pageHeightTotal &&
        index < recipes.length
      ) {
        setIndex((i) => i + 6);
      }
    };

    window.addEventListener('scroll', updateIndex);

    return () => {
      window.removeEventListener('scroll', updateIndex);
    };
  }, [index, recipes]);
  
  return index;
};
