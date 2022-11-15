import { Grid, Button } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

//run this command on a separate terminal to get json server running
//npx json-server --watch posts.json --port 8000

const App = () => {
  const navigate = useNavigate();
  const id = Math.floor(Math.random() * 100);
  const operation = "sum";
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <Button onClick={() => navigate("/home")}>Home</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/posts")}>Posts</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/creatures")}>Creature</Button>
        </Grid>
      </Grid>
      <AppRoutes />
      
    </div>
  );
};

export default App;

