async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

export default async function page({ params }) {
  //   console.log(params);
  const user = await getUsers(params.userid);
  console.log(user);
  return (
    <div>
      <h1>User Detail Page</h1>
      <h1>name: {user.name}</h1>
      <h1>last name: {user.lastname}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
}
