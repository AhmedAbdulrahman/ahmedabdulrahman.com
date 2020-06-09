import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
  display: inline-block;
  position: relative;
  color: ${p => p.theme.colors.articleText};

  @media (min-width: 33.8125em) {
    &:before,
    &:after {
      content: '';
      display: block;
      height: 0.5em;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0.2em;
      z-index: -1;
      background-color: ${p => p.theme.colors.border};
    }

    &:after {
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover {
      &:after {
        transform: scaleX(1);
        background-color: ${p => p.theme.colors.accent};
      }
    }
  }

  @media (max-width: 33.75em) {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: ${p => p.theme.colors.border};
  }
`;

export default Link;
