import { Link, useParams } from "react-router-dom";
import posts from "../posts.json";

const PostDetails = ({ post }) => {
  let { id } = useParams();
  //Finding post by ID
  const postDetail = posts.posts.find(item => item.id === parseInt(id));
  return (
    <div>
      <h2>{postDetail.title}</h2>
      <div>{postDetail.content}</div>
      <p>
        <Link to="/posts">👈 Back</Link>
      </p>
    </div>
  );
};


export default PostDetails;
