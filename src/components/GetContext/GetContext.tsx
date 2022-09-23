import React from "react";
import ThemeContext from "../../context/ThemeContext";

import defaultColorSet from "../../styles";

const GetContext = (WrappedComponent: React.FC<any>): React.FC => {
  console.log("theme");

  return (props: any) => {
    const theme = React.useContext(ThemeContext);

    React.useEffect(() => {
      const root = document.documentElement;
      if (theme)
        root?.style.setProperty(
          `--aui-button-primaryColor`,
          theme?.primaryColor as string
        );
    }, [theme]);

    return (
      <ThemeContext.Consumer>
        {(context) => {
          const overrideStyle = {
            ...defaultColorSet,
            ...context,
          };
          return <WrappedComponent {...props} context={overrideStyle} />;
        }}
      </ThemeContext.Consumer>
    );
  };
};

export default GetContext;
