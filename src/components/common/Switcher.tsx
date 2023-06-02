import React from 'react';
import styled from 'styled-components';

const Label = styled.label<{ width?: number }>`
    display: inline-block;
    width: ${({ width }) => (width ? `${width}px` : '80px')};
    height: ${({ width }) => (width ? `${Math.floor(width / 2.3)}px` : '34px')};
    position: relative;
`;

const Input = styled.input<{ width?: number }>`
    display: none;

    &:checked + span {
        background-color: #4caf50;
    }

    &:checked + span:before {
        transform: ${({ width }) =>
            width ? `translateX(${Math.floor(width / 1.74)}px)` : 'translateX(46px)'};
    }
`;

const Slider = styled.span<{ width?: number }>`
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    border-radius: ${({ width }) => (width ? `${Math.floor(width / 2.3)}px` : '34px')};

    &:before {
        border-radius: ${({ width }) => (width ? `${Math.floor(width / 2.3)}px` : '34px')};
        background-color: white;
        bottom: 4px;
        content: '';
        width: ${({ width }) => (width ? `${Math.floor(width / 2.3) - 10}px` : '24px')};
        height: ${({ width }) => (width ? `${Math.floor(width / 2.3) - 10}px` : '24px')};
        left: 4px;
        position: absolute;
        transition: 0.4s;
    }
`;

interface Props {
    isChecked: boolean;
    onChange: () => void;
    width?: number;
}

const Switcher: React.FC<Props> = ({ isChecked, onChange, width }) => {
    return (
        <Label width={width}>
            <Input width={width} type="checkbox" checked={isChecked} onChange={onChange} />
            <Slider width={width} />
        </Label>
    );
};

export default Switcher;
