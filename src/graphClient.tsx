import { GraphQLClient, gql } from "graphql-request";
import { getPostAuthorsQuery } from "./query";

class GraphClient {
  graphcms: GraphQLClient;
  constructor() {
    this.graphcms = new GraphQLClient(
      "https://api-eu-west-2.graphcms.com/v2/cl4y5o95c0zdw01upgxblg69l/master"
    );
  }
  get_query(query: string) {
    return gql`
      ${query}
    `;
  }
  async getPostAuthors() {
    const { posts } = await this.graphcms.request(
      this.get_query(getPostAuthorsQuery)
    );
    return posts;
  }
  async getSinglePost(postId) {
    const { post } = await this.graphcms.request(
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
}

export default GraphClient;
