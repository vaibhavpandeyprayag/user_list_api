interface Props {
  email: string
  gender: string
}

const UserRow: React.FC<Props> = (props) => {
  return (
    <div className="flex ml-4 justify-between w-5/12">
      <div>Email: {props.email}</div>
      <div>Gender: {props.gender}</div>
    </div>
  );
}

export default UserRow;