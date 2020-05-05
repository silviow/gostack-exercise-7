import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 15px;
  padding: 64px;
  box-shadow: 1px 1px 130px rgba(84, 53, 206, 0.03);
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #1d3557;
    color: #fff;
    border-radius: 10px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;
    -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
          bottom, from(transparent), color-stop(30%, transparent), to(rgba(250, 250, 250, 0.1)));

    &:hover {
      background: ${shade(0.2, '#1d3557')};
    }
  }
`;
