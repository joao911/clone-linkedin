import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:100%100%;

  .left-column,
  .right-clomn,
  .add-banner{
    display: none;
  }
  >span{
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1180px){
      >main{
        margin: 0 30px;
        display: flex;
        justify-content: center;
      }
      >span{
        margin-top: 52px;
        padding: 8px 0;
      }
      .left-column,
      .right-clomn,
      .add-banner{
         display:unset;
        }
        .middle-column{
            margin: 0 25px 16px;
        }
      }
`;
