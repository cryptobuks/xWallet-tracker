import Styled from 'styled-components';

export const P = Styled.p.attrs({
  color: props => props.color || 'red',
}) `
  color: ${props => props.color};
`;

export const Title = Styled.h1.attrs({
  color: props => props.color || 'red',
  margin: props => props.margin || '1rem',
}) `
  color: ${props => props.color};
  margin-top: ${props => props.margin};
`;

export default P;