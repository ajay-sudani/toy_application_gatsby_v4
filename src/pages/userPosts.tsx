import * as React from "react";
import { graphql } from "gatsby";
import UserPosts from "../components/user-posts";

const UserPostsPage = ({ data }) => {
  const allPosts = data?.allPosts?.edges.map(({ node }) => node) || [];
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
