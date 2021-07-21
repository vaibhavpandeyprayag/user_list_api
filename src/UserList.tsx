import axios from "axios";
import { useEffect, useState } from "react";
import UserRow from "./UserRow";

interface Props {
  page: number;
  title: string
}

const UserList: React.FC<Props> = (props) => {

  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    axios(
      "https://randomuser.me/api/?inc=id,name,gender,email&page=" + props.page + "&results=20"
    )
      .then((response) => {
        setUsers(response.data.results)
      });
  }, [props.page])

  return (
    <>
      <div className="rounded-xl bg-blue-600 p-4 text-white">
        <div className="text-xl font-bold mb-2">USER LIST PAGE</div>
        {
          users.map((user: any) => <UserRow email={user.email} gender={user.gender} />)
        }
      </div>
    </>
  );
}

export default UserList;