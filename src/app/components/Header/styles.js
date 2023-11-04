import styled from 'styled-components';

const HeaderStyled = styled.div`
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  padding: 30px 0;
  display: flex;
  justify-content: center;

  .navbar {
    display: flex;
    gap: 40px;

    .navbar-item {
      display: inline-block;
      font-weight: 600;

      & > a {
        text-decoration: none;
        color: rgba(99, 110, 114, 1);

        &:hover {
          color: rgba(162, 155, 254, 1);
        }
      }
    }
  }
`;

export default HeaderStyled;
