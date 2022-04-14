import React from "react"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <section>
      <h1 className="text-3xl text-center">My blog posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </section>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date
          title
          author
        }
        excerpt
        id
      }
    }
  }
`