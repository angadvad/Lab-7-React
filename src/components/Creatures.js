import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "../style/creatures.css"
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Creatures = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAllUsers = () => {
    setIsLoading(true);
    axios.get("https://reqres.in/api/users?page=0").then(res => {
      setUsers(res.data.data);
      setIsLoading(false);
    })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAllUsers();
    return function cleanup() {
      setUsers([]);
    };
  }, []);

  const renderUser = (
    <>
      {/* <div className="userlist-container">
        {users.map((item, index) => (
          <div className="user-container" key={index}>
            <img src={item.avatar} alt="" />
            <div className="userDetail">
              <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
              <div className="last-name">{item.email}</div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="userlist-container">
        {users.map((item, index) => (
          <Card key = {index}>
            <CardMedia
              component="img"
              image={item.avatar}
              alt="avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.first_name} {item.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Creatures;


