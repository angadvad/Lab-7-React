import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Icon, TextField, Paper, Typography, Grid } from "@mui/material";
import { useReducer } from 'react'


function deletePost() {

  axios.get('http://localhost:8000/posts/').then(res => {
    let id = res.data.length;
    axios({
      method: 'delete',
      url: `http://localhost:8000/posts/${id}`,
    });
  })


}



const PostsList = ({ posts }) => (
  <div>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            Published by 🤖 <strong> {post.author}</strong> on{" "}
            {post.publishedAt}
          </p>
        </li>
      ))}
    </ul>
    <MaterialUIFormSubmit formName="Create New Post"></MaterialUIFormSubmit>
    <button onClick={deletePost}>DELETE POST</button>
  </div>
);




export function MaterialUIFormSubmit(props) {


  function getDateToday() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;
    return formattedToday;

  }

  function postForm(output) {

    axios({
      method: 'post',
      url: 'http://localhost:8000/posts/',
      data: {
        "id": output.formInput.id,
        "title": output.formInput.title,
        "content": output.formInput.content,
        "author": output.formInput.author,
        "publishedAt": output.formInput.publishedAt
      }
    });
  }

  function getNewId() {
    axios.get('http://localhost:8000/posts/').then(res => {
      console.log(res.data.length + 1);
      return res.data.length + 1;
    })
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: getNewId(),
      title: "",
      content: "",
      author: "",
      publishedAt: getDateToday()

    }
  );

  const handleSubmit = () => {

    let data = { formInput };
    postForm(data);

  };

  const handleInput = e => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFormInput({ [name]: newValue }); //calling this onchange means it's doing the id request on line 78 every time you type a character, not great for performance
  };


  return (
    <div style={{paddingTop: "20px"}}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <TextField
                label="Title"
                id="margin-normal"
                name="title"
                defaultValue={formInput.title}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Author"
                id="margin-normal"
                name="author"
                defaultValue={formInput.author}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Content"
                id="margin-normal"
                name="content"
                multiline rows={4}
                defaultValue={formInput.content}
                onChange={handleInput}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
    </div >
  );
}




export default PostsList