import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
`;
export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;

    span {
      text-align: center;
    }
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const Paragraph = styled.p`
  font-size: 25px;
`;
