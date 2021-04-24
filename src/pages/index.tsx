
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";


const IndexPage = () => {
  const { handleSubmit } = useForm({defaultValues: {name:"", iconUrl:""}});
  const [file, setFile] = useState<File>();
  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  const uploadImg = useCallback(async (file:File) => {
    const fileName = "imgfile"
    const res = await fetch(`/api/upload?file=${fileName}`);
    const url = await res.json();
    const body = new FormData();
    body.append('file', file as string | Blob);
    const upload = await fetch(url, {method:"POST", body});
    if (upload.ok) {
      console.log('Uploaded successfully!');
      return fileName;
    } else {
      console.error('Upload failed.');
    }
  },[])


  const handleClick =  handleSubmit ( async () => {
    if(file) {
      uploadImg(file)
    }
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
