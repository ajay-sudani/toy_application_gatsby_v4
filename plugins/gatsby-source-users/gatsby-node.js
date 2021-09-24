const { request, gql } = require("graphql-request");

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
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
    // createNode function can be used to create the node itself, so that we can later use it in GraphQL queries.
    actions.createNode({
      // Each node needs a unique identifier. With createNodeId function, we can also make sure that these identifiers are unique across all nodes, even those from other sources
      id: createNodeId(post._id),
      internal: {
        type: `HashnodePost`,
        // To verify that the content has or hasn’t changed.
        contentDigest: createContentDigest(post),
      },
      ...post,
    });
  }
  return;
};
