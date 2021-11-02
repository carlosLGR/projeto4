
import * as Styled from './styles';
import {KeyboardArrowUp} from '@styled-icons/material-outlined/KeyboardArrowUp'

export const GoTop = ({ children }) => {
  return (
    <Styled.Container href="#" aria-label="Go To Top" title='Go to Top'>
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
