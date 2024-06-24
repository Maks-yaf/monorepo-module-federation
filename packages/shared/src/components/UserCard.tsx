import React from 'react';

const UserCard = ({username}: {username?:string}) => {
    return (
        <div style={{border: '3px solid green', padding: 20}}>
            <div>username: {username ?? 'user'}</div>
            <div>password: 123</div>
        </div>
    );
};

export default UserCard;