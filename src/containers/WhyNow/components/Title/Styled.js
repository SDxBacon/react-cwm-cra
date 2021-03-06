import styled from 'styled-components';
import media from 'styled-media-query';
import Box from 'common/Box';
import pxToRem, { mPxToRem } from 'utils/pxToRem';

export const Wrapper = styled(Box)`
  ${media.greaterThan('large')`
    margin-bottom: ${pxToRem(174)};
  `}

  ${media.lessThan('large')`
    margin-bottom: ${mPxToRem(58.6)};
  `}
`;

export default Wrapper;
