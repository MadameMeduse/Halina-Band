import styled from "styled-components";

export const UserName = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Avatar = styled.img`
    display: block;
    margin-top: 30px;
    width: 230px;
    height: 230px;
`;

export const Loading = styled.img`
    width: 300px;
    height: 300px;
`;