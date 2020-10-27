exports.onCreateNode = ({ node }) => {};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      author: AuthorsJson @link(by: "github")
    }
  `;
  createTypes(typeDefs);
};
