const { request, gql } = require("graphql-request");

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { userName }
) => {
  const API_ENDPOINT = "https://api.hashnode.com/";
  const { createNode } = actions;

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
    const node = {
      id: createNodeId(post._id),
      parent: null,
      children: [],
      internal: {
        type: `HashnodePost`,
        mediaType: `application/json`, // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/node-interface/#mediatype
        content: JSON.stringify(post), // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/node-interface/#content
        contentDigest: createContentDigest(post),
      },
      ...post,
    };
    createNode(node);
  }
  return;
};
