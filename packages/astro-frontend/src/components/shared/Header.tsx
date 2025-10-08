import { useState } from 'react'
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Header as HeaderDRK,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  LinkListItem,
  LinkList,
  Row,
  Headers,
  Nav,
  NavItem,
  NavLink,
  Icon,
  HeaderToggler,
  Collapse,
  HeaderLinkZone,
} from 'design-react-kit'
// import { getLangFromUrl, useTranslations } from '../i18n/utils'

const CenterHeader: React.FC = () => {
  const a = 'a'
  // const lang = getLangFromUrl(window.location.href);
  // const t = useTranslations(lang);
  return (
    <HeaderDRK type="center" theme={'dark'} small={true}>
      <HeaderContent>
        <HeaderBrand>
          <h2>Catalogo delle API</h2>
          <h3>Le API della Pubblica Amministrazione</h3>
        </HeaderBrand>
      </HeaderContent>
    </HeaderDRK>
  )
}
const NavHeader: React.FC = () => {
  const [isOpenSide, setIsOpenSide] = useState(false)
  return (
    <HeaderDRK type="navbar" theme={'dark'}>
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          onClick={(): void => {
            /* set logic open state  */
            setIsOpenSide(!isOpenSide)
          }}
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse
          navbar
          header
          isOpen={isOpenSide}
          onOverlayClick={(): void => {
            /* set close logic here */
            setIsOpenSide(!isOpenSide)
          }}
        >
          <div className="menu-wrapper">
            <Nav navbar>
              <NavItem>
                <NavLink href="#" active>
                  <span>link 1 active </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link 4</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </HeaderDRK>
  )
}

const SlimHeader: React.FC<{
  brandText1: string
  brandText2: string
}> = ({ brandText1, brandText2 }) => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false)
  return (
    <HeaderDRK type="slim" theme={'dark'}>
      <HeaderContent>
        <HeaderBrand>{brandText1}</HeaderBrand>
        <span className="navbar-brand d-none d-xl-inline mx-2">e</span>
        <HeaderBrand>{brandText2}</HeaderBrand>
        <HeaderLinkZone aria-label="Navigazione accessoria">
          <HeaderToggler
            isOpen={isOpenCollapse}
            onClick={(): void => {
              setIsOpenCollapse(!isOpenCollapse)
            }}
          >
            <span>{brandText1}</span>
            <span className="d-inline d-xl-none mx-2">e</span>
            <span>{brandText2}</span>
            <Icon icon="it-expand" />
          </HeaderToggler>
          <Collapse isOpen={isOpenCollapse} header>
            <LinkList noWrapper>
              <LinkListItem href="#">Link 1</LinkListItem>
              <LinkListItem href="#" active>
                Link 2 Active
              </LinkListItem>
            </LinkList>
          </Collapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <Dropdown inNavbar>
            <DropdownToggle caret>ITA</DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem inDropdown href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
        </HeaderRightZone>
      </HeaderContent>
    </HeaderDRK>
  )
}

const Header: React.FC = () => (
  <Headers>
    <SlimHeader brandText1="Ente di appartenenza" brandText2="Ente di appartenenza" />
    <div className="it-nav-wrapper">
      <CenterHeader />
      <NavHeader />
    </div>
  </Headers>
)

export default Header
