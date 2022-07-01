const getPostAuthorsQuery = `
  {
  posts {
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

`;
export { getPostAuthorsQuery };
