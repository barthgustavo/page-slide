import React, { useState } from "react";

import { Button } from "../_shared/Button";
import { MenuWrapper } from "../_shared/MenuWrapper";
import { useHistory } from 'react-router-dom'
import upload from "../../services/Upload";

const Upload = () => {
  let history = useHistory();

  const [selectedFile, setSelectedFile] = useState();

  const handleFile = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    upload(selectedFile).then((result: any) => {
      history.push(`/select/${result.data.filename}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFile} />
      <MenuWrapper>
        <Button width="100%" type="submit">Próximo</Button>
      </MenuWrapper>
    </form>
  );
}

export default Upload;