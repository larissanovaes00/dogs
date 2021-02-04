import React from 'react'
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

function UserProfile() {
const {user} = useParams();

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed user={user}/>
      <Head title={user} description={`Perfil | ${user}`} /> 
    </section>
  )
}

export default UserProfile
