import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { homeData } from "../App";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
const Header2 =() => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
      dispatch(logout())
  }
  return (
    <header className="head2">
          <section className="over">
            <div>
                <div className="rig">
                <LinkContainer to="/">
                <Nav.Link>
                  <img className="cooltees-logo1" src={homeData.coolteesLogo1} alt="ban"/>
                </Nav.Link>
                </LinkContainer>
                  <Navbar className="set">
                  <LinkContainer to="/search" component={ SearchBox }>
                  <Nav.Link>
                    <img className="search" src={homeData.search} alt="ban"/>
                  </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/cart">
                  <Nav.Link>
                    <img className="cart" src={homeData.cart} alt="ban"/>
                  </Nav.Link>
                  </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    {userInfo ? (
                                <NavDropdown title={userInfo.name}  id='username'>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                              <LinkContainer to='/login'>
                                  <Nav.Link><img className="avatar" src={homeData.avatar} alt="ban"/></Nav.Link>
                              </LinkContainer>
                          )}


                          {userInfo && userInfo.isAdmin && (
                              <NavDropdown title='Admin' id='adminmenue' className='adminmenue'>
                                  <LinkContainer to='/admin/userlist'>
                                      <NavDropdown.Item>Users</NavDropdown.Item>
                                  </LinkContainer>

                                  <LinkContainer to='/admin/productlist'>
                                      <NavDropdown.Item>Products</NavDropdown.Item>
                                  </LinkContainer>

                                  <LinkContainer to='/admin/orderlist'>
                                      <NavDropdown.Item>Orders</NavDropdown.Item>
                                  </LinkContainer>

                              </NavDropdown>
                          )}
                          </Navbar.Collapse>
                        </Navbar>
                </div>
            </div>
          </section>
    </header>
);
};

export default Header2;
