import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";

export default function ArticleCard({ post, isOnSinglePostPage }) {
  return (
    <Card sx={{ maxWidth: 1800 }}>
      <CardActionArea>
        <Grid container spacing={24}>
          <Grid item md={6}>
            <CardMedia
              component="img"
              height="600"
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
              {post.content.text.length > 700 && !isOnSinglePostPage ? (
                <>
                  <Typography variant="body1" color="text.secondary">
                    {`${post.content.text.slice(0, 1000)}...`}
                  </Typography>
                  {!isOnSinglePostPage ? (
                    <button>
                      <Link to={`post/${post.id}`}> read more</Link>
                    </button>
                  ) : null}
                </>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  {post.content.text}
                </Typography>
              )}
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
