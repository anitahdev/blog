import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GraphClient from "../graphClient";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { Grid } from "@material-ui/core";

function SinglePostPage() {
  const { postId } = useParams();
  const client = new GraphClient();
  const [post, setPost] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(postId);
    client.getSinglePost(postId).then((p) => {
      if (p === null) {
        setNotFound(true);
      }
      console.log(p);
      setPost(p);
      setIsLoading(false);
    });
  }, []);
  if (notFound) {
    return <p>nIe ma takiego bloga</p>;
  }
  if (!isLoading)
    return (
      <>
        {" "}
        <ArticleCard post={post} isOnSinglePostPage />
        <Link to={`/`}> Back</Link>
      </>
    );
}

export default SinglePostPage;
