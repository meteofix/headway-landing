import styled from 'styled-components';

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 112px;
  height: 56px;
  margin-top: 16px;
  margin-bottom: 24px;
  input {
    display: none;
  }
  input:checked + span:before {
    transform: translateX(54px);
  }
`;
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  box-sizing: border-box;
  :before {
    position: absolute;
    content: '';
    height: 48px;
    width: 48px;
    top: 3px;
    left: 4px;
    bottom: 4px;
    background-color: #0066ff;
    transition: 0.3s;
    border-radius: 50%;
  }
`;
export const Icon = styled.img`
  position: absolute;
  z-index: 100;
  cursor: pointer;
`;
export const AudioIcon = styled(Icon)`
  left: 16px;
  top: 16px;
`;
export const TextIcon = styled(Icon)`
  top: 16px;
  right: 16px;
`;
