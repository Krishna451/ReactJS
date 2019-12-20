import React from 'react'

function UserGreeting(){


    return<h1>Welcome User</h1>
}

function GuestGreeting(){


    return<h1>Welcome Guest</h1>
}

function GreetUser(props){

    const isloggedIn=props.isloggedIn;

    if(isloggedIn){

        return <UserGreeting></UserGreeting>
    }
    else{
        return <GuestGreeting></GuestGreeting>
    }
}
export default GreetUser;