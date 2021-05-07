import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;

  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 5px 10px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      a {
        color: #003569;
        text-decoration: none;
      }
    }
  }

  span {
    justify-self: end;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    align-items: center;
    ul {
      text-align: center;
    }
    span {
      justify-self: center;
    }
  }
`

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/help'>Help</Link>
        </li>
        <li>
          <Link to='/privacy'>Privacy</Link>
        </li>
        <li>
          <a href="https://reactgram.dev/" 
              target="_blank" 
              rel="noreferrer">
            Read the Book
          </a>
        </li>
      </ul>
      <span className="subtitle">
        © {currentYear} Reactgram
      </span>
    </FooterWrapper>
  )
}