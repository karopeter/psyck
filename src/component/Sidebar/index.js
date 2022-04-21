import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink onClick={toggle}>Trade</SidebarLink>
              <SidebarLink onClick={toggle}>Market</SidebarLink>
              <SidebarLink onClick={toggle}>About Us</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
     </SidebarContainer>
    );
};

export default Sidebar;