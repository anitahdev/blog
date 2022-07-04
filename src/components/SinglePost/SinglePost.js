import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GraphClient from "../../graphClient";

import ArticleCard from "../ArticleCard";
function SinglePost() {
  const { postId } = useParams();
  const client = new GraphClient();
  const [post, setPost] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.getSinglePost(postId).then((post) => {
      if (post === null) {
        setNotFound(true);
      }
      setPost(post);
      setIsLoading(false);
    });
  }, []);
  if (notFound) {
    return <p>no results matched</p>;
  }
  if (!isLoading) return <ArticleCard post={post} isOnSinglePostPage />;
}
export default SinglePost;
