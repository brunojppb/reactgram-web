import styled from 'styled-components'

const StaticLayoutWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    gap: 16px;
    padding: 16px;
    justify-items: center;
    margin: auto;
    max-width: 935px;
    width: 100%;
`;

export const StaticLayout = ({ children }) => {
  return(
    <>
      <StaticLayoutWrapper>
        {children}
      </StaticLayoutWrapper>
    </>
  )
}