import { gql, GraphQLClient } from "graphql-request";
import { createContext } from "react";
import { Post } from "../components/types";
import { getPostAuthorsQuery } from "../query";
const graphcms = new GraphQLClient(
    "https://api-eu-west-2.graphcms.com/v2/cl4y5o95c0zdw01upgxblg69l/master"
  );
 function getQuery(query: string) {
    return gql`
${query}`;
}

 async function getPostAuthors() {
    const { posts } = await graphcms.request(
        getQuery(getPostAuthorsQuery)
    );
    return posts;
}

async function getOnePost(postId: string) : Promise<Post>{
    const { post } = await graphcms.request(
        gql`
          {
            post(where: { id: "${postId}" }) {
              id
              title
              coverPhoto {
                id
                url
              }
              content {
                text
              }
              author {
                name
              }
            }
          }
        `
    );
    return post;
}

export const context = {
    getQuery: getQuery,
    getPostAuthors: getPostAuthors,
    getOnePost: getOnePost
}
export const ApiContext = createContext(context);
