interface Post {
  id: string;
  title: string;
  coverPhoto: CoverPhoto;
  content: Content;
  author: Author;
}

interface Author {
  name: string;
}

interface Content {
  text: string;
}

interface CoverPhoto {
  id: string;
  url: string;
}
export type { Post, Author, Content, CoverPhoto };
