import {gql} from "@apollo/client";
import { useState } from "react";
import { useAddUserMutation } from "src/apollo/graphql";

const IndexPage = () => {
  const [file, setFile] = useState<File>();
  const [updateUser] = useAddUserMutation();
  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0]);
    updateUser({ variables: {user: {name:"toki", iconUrl: "http://"}}});
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

export default IndexPage;


gql`
  mutation addUser($user: AppDto!) {
    addUser(user: $user) {
      name
      iconUrl
    }
  }
`