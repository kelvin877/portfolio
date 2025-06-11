import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import handleScroll from '../../utils/handleScroll';

const SocialMediaIcons = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;   
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Navbar = () => {
  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);
  const anchor = 'top';
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpenMenuBar(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        {/* Desktop */}
        <NavItems>
          <NavLink onClick={() => handleScroll('about')}>About</NavLink>
          <NavLink onClick={() => handleScroll('skills')}>Skills</NavLink>
          <NavLink onClick={() => handleScroll('experience')}>Experience</NavLink>
          <NavLink onClick={() => handleScroll('education')}>Education</NavLink>
          <NavLink onClick={() => handleScroll('projects')}>Projects</NavLink>
        </NavItems>
        <SocialMediaIcons>
          
          <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        {/* Mobile */}
        <MobileIcon>
          <FaBars onClick={() => {setIsOpenMenuBar(!isOpenMenuBar)}} />
        </MobileIcon>
        <SwipeableDrawer
          anchor={anchor}
          open={isOpenMenuBar}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <MenuContainer>
            <MobileLink onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
              handleScroll('about')
            }}>About</MobileLink>
            <MobileLink onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
              handleScroll('skills')
            }}>Skills</MobileLink>
            <MobileLink onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
              handleScroll('experience')
            }}>Experience</MobileLink>
            <MobileLink onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
              handleScroll('education')
            }}>Education</MobileLink>
            <MobileLink onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
              handleScroll('projects')
            }}>Projects</MobileLink>
            {/*  */}
            <MobileLink href={Bio.portfoiloGame} onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
            }}>Portfoilo Game</MobileLink>
            <MobileLink href={Bio.linkedin} onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
            }}>LinkedIn</MobileLink>
            <MobileLink href={Bio.github} onClick={() => {
              setIsOpenMenuBar(!isOpenMenuBar)
            }}>GitHub</MobileLink>
            <MobileLink onClick={()=>{setIsOpenMenuBar(!isOpenMenuBar)}}><HighlightOffIcon/></MobileLink>
          </MenuContainer>
        </SwipeableDrawer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;