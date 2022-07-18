import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";

export default function ArticleCard({ post }) {
  let a = { maxWidth: "100%", marginLeft: "15%" };
  return (
    <Card sx={a}>
      <Grid container>
        <Grid item md={6}>
          <CardMedia
            component="img"
            height="100%"
            src={post.coverPhoto.url}
            alt={post.title}
          />
        </Grid>
        <Grid item md={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 1 }}
            >
              author: {post.author.name}
            </Typography>
            {post.content.text.length > 700 ? (
              <>
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
            ) : (
              <Typography variant="body1" color="text.secondary">
                {post.content.text}
              </Typography>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
