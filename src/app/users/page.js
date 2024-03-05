import Link from "next/link";
import "./style.css";
import DeleteUser from "@/util/DeleteUser";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function page() {
  const users = await getUsers();
  //   console.log(users);
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <div className="User-item">
          <span>
            <Link href={`users/${item.id}`}>{item.name}</Link>
          </span>

          <span>
            <Link href={`users/${item.id}/update`}>Edite</Link>
          </span>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}
