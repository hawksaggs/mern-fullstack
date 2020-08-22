import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ayush',
            image: 'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/51137479_2670736682937287_8944568808975106048_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=OkY5zyTqePwAX9ZkQkd&_nc_ht=scontent.fdel8-1.fna&oh=08fd3ff21541b74ce399e9f72454782c&oe=5F653E1D',
            places: 3
        }
    ];

    return <UsersList items={USERS} />
};

export default Users;