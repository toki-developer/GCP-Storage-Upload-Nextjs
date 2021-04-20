import { useState } from "react";

const IndexPage = () => {
  const [file, setFile] = useState<File>();
  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  console.log(file)
  return (
    <>
    <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeFile}
            id="icon"
          />
    </div>
    </>
  )
}

export default IndexPage
