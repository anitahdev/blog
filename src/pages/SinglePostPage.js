import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GraphClient from "../graphClient";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core/";

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
    return <p>no results matched</p>;
  }
  if (!isLoading)
    return (
      <>
        <Card sx={{ maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          <CardActionArea>
            <Grid container spacing={12}>
              <Grid item md={6}>
                <CardMedia
                  component="img"
                  height="100%"
                  img
                  src={post.coverPhoto.url}
                  alt={post.title}
                />
              </Grid>
              <Grid item md={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    author: {post.author.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {post.content.text}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </>
    );
}

export default SinglePostPage;
