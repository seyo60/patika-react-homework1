import axios from "axios";

async function getData(number){
  const {data: users} = await axios.get("https://jsonplaceholder.typicode.com/users/" + number);
  const {data: posts} =  await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + number);
  console.log(users);
  console.log(posts);
}

export default getData;