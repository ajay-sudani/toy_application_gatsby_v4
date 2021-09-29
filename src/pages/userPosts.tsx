import * as React from "react";
import { graphql } from "gatsby";
import UserPosts from "../components/user-posts";
import { IUserPost, IUserPostsPage } from "../interfaces/UserPosts";

const UserPostsPage = ({ data }: IUserPostsPage) => {
  const allPosts =
    data?.allPosts?.edges.map(({ node }: { node: IUserPost }) => node) || [];
  return <UserPosts data={allPosts}></UserPosts>;
};

export default UserPostsPage;

export const query = graphql`
  query {
    allPosts: allHashnodePost {
      edges {
        node {
          id
          title
          dateAdded(formatString: "DD MMMM, YYYY")
          brief
          slug
        }
      }
    }
  }
`;
