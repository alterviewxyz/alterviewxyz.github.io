import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from 'components';
import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;

const UnkonwPage = ({ data }) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>404!</h1>
        <p>
          Sometinhg is not right with me!
        </p>
      </Hero>
      <Content>
        <SectionTitle>These Links May Helop You:</SectionTitle>
          </Content>
    </Wrapper>
  </Layout>
);

export default UnkonwPage;
