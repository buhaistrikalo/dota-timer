import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 80px;
`;

const Input = styled.input`
  display: none;

  &:checked + span {
    background-color: #4CAF50;
  }

  &:checked + span:before {
    transform: translateX(46px);
  }
`;

const Slider = styled.span`
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
  border-radius: 34px;

  &:before {
    border-radius: 34px;
    background-color: white;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }
`;

interface Props {
  isChecked: boolean;
  onChange: () => void;
}

const Switcher: React.FC<Props> = ({ isChecked, onChange }) => {
  return (
    <Label>
      <Input type="checkbox" checked={isChecked} onChange={onChange} />
      <Slider />
    </Label>
  );
};

export default Switcher;
