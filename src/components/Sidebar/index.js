import React from "react";
import {
  CloseIcon,
  Icon,
  SideBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            
            Sobre nós
          </SidebarLink>

          <SidebarLink to="discover" onClick={toggle}>
            Depósitos
          </SidebarLink>

          <SidebarLink to="services" onClick={toggle}>
            Jogar
          </SidebarLink>

          <SidebarLink to="signup" onClick={toggle}>
            Inscreva-se
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="./signin"> Login </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
