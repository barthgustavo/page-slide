import { useParams } from "react-router-dom";
import { Button } from "../_shared/Button";
import { MenuWrapper } from "../_shared/MenuWrapper";

function Select() {

  let { videoId } = useParams<{ videoId: string }>();

  return (
    <>
    <div>
      <h3>ID: {videoId}</h3>
    </div>
    <MenuWrapper>
      <Button>&larr;</Button>
      <Button>+</Button>
      <Button>⏯</Button>
      <Button>&rarr;</Button>
    </MenuWrapper>
    </>
  );
}

export default Select;