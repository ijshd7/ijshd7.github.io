import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              url
            }
          }
        }
      `
    )
  
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title
    const metaUrl = site.siteMetadata.url
    const metaTitle = site.siteMetadata.title
  
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title ? title : metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: metaUrl,
          },
        ].concat(meta)}
      />
    )
  }
  
  Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
  }
  
  Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }
  
  export default Seo