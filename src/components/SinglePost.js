import React from "react";

function SinglePost() {
  let params = useParams();
  let postId = params.postId;
  // postId= cl4zfjje50loj0alb1zcjrxuh
  const [post, setPost] = useState([]);

  useEffect(() => {
    client.getSinglePost((postId = postId)).then((post) => {
      console.log(post);
      setPost(post);
    });
  }, []);
  return <div>SinglePost</div>;
}

export default SinglePost;
