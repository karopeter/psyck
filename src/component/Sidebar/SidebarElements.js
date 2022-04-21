import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  background: #191919;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`

export const CloseIcon = styled(FaTimes)`
   color: #fff;
`

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   cursor: pointer
   outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-widthL 480px) {
      grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled.li`
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 1.8rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;
   color: #fff;
   cursor: pointer

   &:hover {
     color: #B89F1B;
     transition: 0.2s ease-in-out;
   }
`