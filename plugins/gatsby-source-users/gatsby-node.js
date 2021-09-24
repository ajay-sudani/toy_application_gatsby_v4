const { request, gql } = require("graphql-request");

exports.sourceNodes = async (
  { actions, createContentDigest },
  { userName }
) => {
  const API_ENDPOINT = "https://api.hashnode.com/";

  // pass the variable into the query
  const query = gql`
    query ($userName: String!) {
      user(username: $userName) {
        publication {
          posts {
            _id
            title
            brief
            slug
            dateAdded
          }
        }
      }
    }
  `;

  const response = await request(API_ENDPOINT, query, { userName });
  const {
    user: {
      publication: { posts },
    },
  } = response;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    actions.createNode({
      id: post._id,
      internal: {
        type: `HashnodePost`,
        content: JSON.stringify(post), // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/node-interface/#content
        contentDigest: createContentDigest(post),
      },
      ...post,
    });
  }
  return;
};
