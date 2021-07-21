import axios from "axios";

interface Props {
}

const UserList: React.FC<Props> = (props) => {
  fetch("https://randomuser.me/api/?inc=id,name,gender,email&page=1&results=20").then((data) => console.log(data));
  return (
    <>
      <div className="h-1/2 bg-red-200">USER LIST PAGE</div>
    </>
  );
}

export default UserList;