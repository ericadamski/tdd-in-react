import Link from "../components/link";
import Button from "../components/button";
import Colors from "../utils/colors";
import CodeIcon from "react-ionicons/lib/MdCode";
import SlidesIcon from "react-ionicons/lib/MdPaper";
import AddIcon from "react-ionicons/lib/MdAdd";
import { Page, FlashContainer, Flash } from "./styled/index.styled.js";

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
        <Flash label="Full Screen">
          <Button circle color={Colors.purple} href="/code-samples">
            <AddIcon color={Colors.white} />
          </Button>
        </Flash>
      </FlashContainer>
    </Page>
  );
}

export default Home;
