const path = require(`path`)

exports.createPages = async ({ graphql, actions }: any) => {
    const { createPage } = actions
    const result : any = await graphql(`
    query CreatePostPagesQuery {
      allMdx {
        nodes {
          frontmatter{
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

    result.data.allMdx.nodes.forEach( (node: { frontmatter: any; internal: any;}) => {
      createPage({
        path: node.frontmatter.slug,
        component: `${path.resolve('./src/templates/post.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          title: node.frontmatter.title,
          slug: node.frontmatter.slug
        },
      })
    })
  }