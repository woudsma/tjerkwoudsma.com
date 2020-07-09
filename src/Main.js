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
        Currently working as a JavaScript Consultant at&nbsp;
        <a
          href="https://passionatepeople.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Passionate People
        </a>
        <br />
        Contact:&nbsp;
        <a href="mailto:tjerkwoudsma@gmail.com?Subject=Hello" target="_top">
          mail
        </a>
        <br />
        <br />
        WIP weekend projects:
        <br />
        —&nbsp;
        <a
          href="https://swarmlet.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swarmlet
        </a>
        &nbsp;
        <br />
        —&nbsp;
        <a
          href="https://pixel.voyage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixel Voyage
        </a>
        <br />
        — ..
        <br />
        <br />
      </div>
    );
  }
}

export default Main;
