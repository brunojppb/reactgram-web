import styled from 'styled-components'

const StaticLayout = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    gap: 16px;
    padding: 16px;
    justify-items: center;
    margin: auto;
    max-width: 935px;
    width: 100%;

    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export {
  StaticLayout
};