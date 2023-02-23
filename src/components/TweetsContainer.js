import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);

  function changeTweet(key) {
      const newUserArray = users.filter(user => user.id !== key)
      setUsers(newUserArray)
    // console.log(newUserArray)
  }

  //console.log("In TweetsContainer, state is", userData);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={changeTweet}/>
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
