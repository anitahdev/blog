import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";
function SinglePostContent({ post }) {
  return (
    <Typography variant="body1" color="text.secondary">
      {post.content.text}
    </Typography>
  );
}
function MainBlogPagePostContent({ post }) {
  return (
    <>
      {" "}
      <Typography variant="body1" color="text.secondary">
        {post.content.text.replace(/^(.{800}[^\s]*).*/, "$1")}...
      </Typography>
      <button
        className="readmore"
        style={{
          padding: "5px",
          backgroundColor: "black",
          borderRadius: "5px",
          marginTop: 15,
          justifyContent: "right",
        }}
      >
        <Link
          to={`post/${post.id}`}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          read more
        </Link>
      </button>
    </>
  );
}
function PostContent({ post, isOnSinglePostPage }) {
  if (isOnSinglePostPage) {
    return <SinglePostContent post={post} />;
  } else {
    return <MainBlogPagePostContent post={post} />;
  }
}
function ArticleCard({ post, isOnSinglePostPage }) {
  let cardStyle = isOnSinglePostPage
    ? { maxWidth: "100%", marginTop: 10, marginBottom: 10 }
    : { maxWidth: "100%", marginLeft: "15%" };
  return (
    <Card sx={cardStyle}>
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
              <PostContent
                post={post}
                isOnSinglePostPage={isOnSinglePostPage}
              />
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default ArticleCard;
