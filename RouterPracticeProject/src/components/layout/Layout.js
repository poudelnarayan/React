import classes from "./Layout.module.css";

import MainNavigation from "./MainNavigation";
import React from "react";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.mainStyle}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
