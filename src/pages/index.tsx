import {gql} from "@apollo/client";
import { useState } from "react";
import { useAddUserMutation, useUploadFileMutation, AppDto } from "src/apollo/graphql";
import { useForm } from "react-hook-form";


const IndexPage = () => {
  const { register, handleSubmit } = useForm<AppDto>({defaultValues: {name:"", iconUrl:""}});
  const [file, setFile] = useState<File>();
  const [updateUser] = useAddUserMutation();
  const [ uploadFile ] = useUploadFileMutation();
  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0]);
  };
  const handleClick = handleSubmit((data) => {
    // updateUser({ variables: {user: {name:data.name, iconUrl: data.iconUrl}}});
    console.log(file)
    const a = uploadFile({ variables: {file: file}})
    console.log(a);
  })
  return (
    <>
    <div>
      {/* 名前
      <input {...register("name", { required: true })}/>
      iconUrl
      <input {...register("iconUrl", { required: true })}/> */}
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


gql`
  mutation addUser($user: AppDto!) {
    addUser(user: $user) {
      name
      iconUrl
    }
  }
  mutation uploadFile ($file: Upload!) {
    uploadFile(file: $file)
  }
`