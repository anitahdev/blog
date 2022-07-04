import GraphClient from "../../graphClient";
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ArticleCard from "../ArticleCard";
function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <div style={{ marginTop: 80 }}></div>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <ArticleCard post={post} />
              </Grid>
            </Grid>
          </>
        );
      })}
    </>
  );
}

function MainBlog() {
  const client = new GraphClient();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.getPostAuthors().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return <PostList posts={posts} />;
  }
}

export default MainBlog;
