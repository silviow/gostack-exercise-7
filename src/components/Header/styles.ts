import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #f1faee;
        padding: 5px 0;
        font-size: 16px;
        text-decoration: none;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          color: #cecece;
        }
      }

      .current_page {
        border-bottom: 2px solid #f1faee;
      }
    }
  }
`;
