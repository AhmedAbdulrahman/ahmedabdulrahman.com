import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const SectionContainer = styled.div<{ narrow?: boolean }>`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 3rem;

  ${mediaqueries.tablet_up`
    max-width: 850px;
  `};

  ${mediaqueries.desktop`
    max-width: 1080px;
  `};

  ${mediaqueries.desktop_medium_up`
    max-width: 1220px;
  `};

  ${p =>
    p.narrow &&
    `
    max-width: 68rem;
    `}

  ${mediaqueries.phablet`
    max-width: 100%;
  `};
`;

const Section = props => {
  const {
    children,
    component: Component = 'section',
    narrow,
    ...other
  } = props;

  return (
    <Component {...other}>
      <SectionContainer narrow={narrow}>{children}</SectionContainer>
    </Component>
  );
};
export default Section;
