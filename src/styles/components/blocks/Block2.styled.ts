import styled from 'styled-components';
import { Block } from '../../components';

export const Block2 = styled(Block)`
  position: relative;
  background: ${({ theme }) => theme.colors.bgBlock2};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock2};
`;
export const Reviewers = styled.div`
  position: relative;
  width: 327px;
  height: 180px;
  margin-top: 25px;
`;
export const ImageNYT = styled.img`
  position: absolute;
  left: 50px;
  top: 17px;
`;
export const ImageAMAZON = styled.img`
  position: absolute;
  left: 170px;
  top: 68px;
`;
export const ImageHBR = styled.img`
  position: absolute;
  left: 160px;
`;
export const Image04 = styled.img`
  width: 265px;
  height: 124px;
  margin-top: 61px;
  margin-bottom: 37px;
`;
export const Image05 = styled.img`
  width: 265px;
  height: 124px;
  margin-top: 44px;
  margin-bottom: 20px;
`;
