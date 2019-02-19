import React, { Fragment } from "react";
import classesName from "classnames";
import classes from "./Layout.css";

const Layout = props => {
  return (
    <Fragment>
      <header className={classes.mainheader}>
        <div>
          <a href="index.html" className={classes.mainheaderbrand}>
            uHost
          </a>
        </div>
        <nav className={classes.mainnav}>
          <ul className={classes.mainnavitems}>
            <li className={classes.mainnavitem}>
              <a href="packages/index.html">Packages</a>
            </li>
            <li className={classes.mainnavitem}>
              <a href="customers/index.html">Customers</a>
            </li>
            <li
              className={classesName(
                classes.mainnavitem,
                classes.mainnavitemcta
              )}
            >
              <a href="start-hosting/index.html">Start Hosting</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
