import styled from 'styled-components';
import { colors } from '../../styles/Colors';

export const Button = styled.button.attrs((props: any) => ({
    width: props.width || "100%",
}))`
    flex: 1;
    background-color: ${colors[2]};
    width: ${props => props.width};
    min-height: 100%;
`;