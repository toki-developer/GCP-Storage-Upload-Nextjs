
import { useState } from "react";
import { useForm } from "react-hook-form";


const IndexPage = () => {
  const { register, handleSubmit } = useForm({defaultValues: {name:"", iconUrl:""}});
  const [file, setFile] = useState<File>();
  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  const handleClick = handleSubmit((data) => {
    console.log(file)
  })
  return (
    <>
    <div>
      写真
      <input
        type="file"
        accept="image/*"
        onChange={handleChangeFile}
        id="icon"
      />
      <input type="submit" onClick={handleClick} />
    </div>
    </>
  )
}

export default IndexPage;
