import { useState, useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";
import { ApiContext } from "../hooks/useApi";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getPostAuthors} = useContext(ApiContext)
  useEffect(() => {
    getPostAuthors().then((posts: any) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="main">
          {posts.map((post) => {
            return (
              <>
                <div style={{ marginTop: 80 }}></div>
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <ArticleCard post={post} />
                    </Grid>
                  </Grid>
                </>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Blog;
