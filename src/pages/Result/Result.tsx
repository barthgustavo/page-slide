import { useParams } from "react-router-dom";
import { Button } from "../_shared/Button";
import { MenuWrapper } from "../_shared/MenuWrapper";

function Result() {

  let { videoId } = useParams<{ videoId: string }>();

  return (
    <>
    <div>
      <h3>ID: {videoId}</h3>
    </div>
    <MenuWrapper>
      <Button>Home</Button>
    </MenuWrapper>
    </>
  );
}

export default Result;