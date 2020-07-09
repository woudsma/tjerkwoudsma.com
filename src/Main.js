import "./scss/Main.scss";
import React, { Component } from "react";
import classNames from "classnames";

class Main extends Component {
  render() {
    const mainClass = classNames("Main");

    return (
      <div className={mainClass}>
        Tjerk Woudsma
        <br />
        <br />
        <a
          href="https://www.linkedin.com/in/tjerk-woudsma-662432157"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/woudsma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        Currently working as JavaScript Consultant at&nbsp;
        <a
          href="https://passionatepeople.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Passionate People
        </a>
        <br />
        Contact:&nbsp;
        <a href="mailto:tjerkwoudsma@gmail.com?Subject=Contact" target="_top">
          mail
        </a>
        <br />
        <br />
      </div>
    );
  }
}

export default Main;
