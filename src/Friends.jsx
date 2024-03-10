import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
  const [friends, setFriendds] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriendds(data));
  }, []);
  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend=><Friend friend={friend}></Friend>)
      }
    </div>
  );
}

// import { useEffect, useState } from "react";
// import Friend from "./User";
// export default function Users() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   const UserContainerStyle = {
//     border: "2px solid tomato",
//     margin: "15px",
//     padding: "15px",
//     borderRadius: "20px",
//   };
//   return (
//     <div style={UserContainerStyle}>
//       <h3>Users : {users.length}</h3>
//       {
//         users.map((friend)=>{
//           <Friend friend={friend}></Friend>
//         })
//       }
//     </div>
//   );
// }
