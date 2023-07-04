import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const UserCard = ({user}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.username}
        </Card.Text>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Card.Text>
          {user.adress}
        </Card.Text>
        <Button variant="primary">
            <Link to={`/profile/${user.id}`}><p style={{color:'black'}}>GO TO USER PROFILE</p></Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard