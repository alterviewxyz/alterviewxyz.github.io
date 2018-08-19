import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, SectionTitle } from 'components';
import { media } from '../utils/media';

import podcastsData from '../../static/podcasts/index.js'
import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Wrapper>
      <Helmet title={`Podcasts | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <SectionTitle>Podcasts</SectionTitle>
        {podcastsData.map(podcast => (
          <Title key={podcast.id}>
            {console.log(podcast)}
            <Link to={`/podcasts/${kebabCase(podcast.fieldValue)}`}>{podcast.fieldValue}</Link> (
            {podcast.totalCount}
            )
          </Title>
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      group(field: frontmatter___podcast) {
        fieldValue
        totalCount
      }
    }
  }
`;
