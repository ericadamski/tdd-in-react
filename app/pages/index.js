import React from "react";
import CodeIcon from "react-ionicons/lib/MdCode";
import SlidesIcon from "react-ionicons/lib/MdPaper";
import AddIcon from "react-ionicons/lib/MdAdd";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import Link from "../components/link";
import Button from "../components/button";
import Colors from "../utils/colors";
import { Page, FlashContainer, Flash } from "./styled/index.styled.js";
import App from "./app";

function Home() {
  return (
    <Page>
      <FlashContainer>
        <Flash label="Slides">
          <Button circle color={Colors.purple} href="/presentation">
            <SlidesIcon color={Colors.white} />
          </Button>
        </Flash>
        <Flash label="Code">
          <Button circle color={Colors.purple} href="/code-samples">
            <CodeIcon color={Colors.white} />
          </Button>
        </Flash>
        {/* <Flash label="Full Screen">
          <Button circle color={Colors.purple} href="/app">
            <AddIcon color={Colors.white} />
          </Button>
        </Flash> */}
        <Flash label="Github">
          <Button
            circle
            color={Colors.purple}
            onClick={() =>
              window.open("https://github.com/ericadamski/tdd-in-react")
            }
          >
            <LogoGithub color={Colors.white} />
          </Button>
        </Flash>
        <Flash label="Twitter">
          <Button
            circle
            color={Colors.purple}
            onClick={() => window.open("https://twitter.com/zealigan")}
          >
            <LogoTwitter color={Colors.white} />
          </Button>
        </Flash>
      </FlashContainer>
      <App />
    </Page>
  );
}

export default Home;
