import React from 'react';
import '../../styles/friendlist.css';

const FriendList = ({ users }) =>{
    if (!users) {
        return <h3>No Friends Yet</h3>;
      }
      return (
        <div className='friendlist'>
               <h3>Friend List</h3>
          <div className="justify-space-between my-4">

            {users &&
              users.map((user, key) =>(     
                <div key={key}> 
                <p> {user.username}</p>
                </div>         
                ))}
            
          </div>
        </div>
      );


}

export default FriendList;