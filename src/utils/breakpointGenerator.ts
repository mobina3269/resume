export const breakpointGenerator = (
    fontSizeArray: [number, number, number]
  ) => {
    return {
      fontSize: `${fontSizeArray[0]}px`,
      "@media (minWidth:600px)": {
        fontSize: `${fontSizeArray[0]}px`,
      },
      "@media (minWidth:900px)": {
        fontSize: `${fontSizeArray[1]}px`,
      },
      "@media (minWidth:1200px)": {
        fontSize: `${fontSizeArray[2]}px`,
      },
      "@media (minWidth:1344px)": {
        fontSize: `${fontSizeArray[2]}px`,
      },
    };
  };