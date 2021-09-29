export interface IUserPost {
  id: string;
  title: string;
  dateAdded: string;
  brief: string;
}

export interface IUserPostsPage {
  data: {
    allPosts: {
      edges: [];
    };
  };
}
