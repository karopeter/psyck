import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  height: 80px;
  z-index: 0;
  top: 0;
  justify-content: center;

  @media screen and (max-width: 960px) {
     transition: 0.8s all ease;
  }
`

export const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
`

export const Header = styled.div`
  color: #fff;
  justify-content: flex-start;
  cursor: pointer; 
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
   }
`

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: --22px;

   @media screen and (max-width: 768px) {
      display: none;
   }
`

export const NavLinks = styled.li`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer

   &.active {
      border-bottom: 3px solid #B89F1B;
   }
`