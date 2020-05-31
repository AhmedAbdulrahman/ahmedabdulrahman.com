import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const SectionContainer = styled.div<{ narrow?: boolean }>`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 3rem;

  ${mediaqueries.desktop`
    max-width: 850px;
  `};

  ${p =>
    p.narrow
      ? mediaqueries.tablet`
          padding: 0 3rem;
          max-width: 527px;
        `
      : mediaqueries.tablet`
          padding: 0 3rem;
          max-width: 567px;
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
