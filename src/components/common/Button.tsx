import styled from 'styled-components';

const Button = styled.button<{
    active?: boolean;
    width?: string;
    height?: string;
    fontSize?: number;
    bgColor?: string;
    fontColor?: string;
}>`
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
        border-color: ${({ active }) => (active ? '#fff' : '#646cff')};
    }

    border-color: ${({ active }) => (active ? '#fff' : 'transparent')};
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    font-size: ${({ fontSize }) => `${fontSize}px}` || 'inherit'};
    background-color: ${({ bgColor }) => bgColor || '#1a1a1a'};
    color: ${({ fontColor }) => fontColor || '#fff'};

    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;

export default Button;
