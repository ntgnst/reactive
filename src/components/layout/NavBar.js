import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  li {
    display: inline;
    margin: 2px;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 3px;
  }
  a {
    text-decoration: none;
    color: gray;
    padding: 7px;
  }
  li:hover {
    background-color: brown;
    a {
      color: white;
    }
  }
`;

const selectedStyle = {
  color: 'red'
};

const list = [
  { title: 'Home Page', url: '/' },
  { title: 'Contact', url: '/contact' },
  { title: 'Fetch Users', url: '/fetch/users' },
  { title: 'Fetch Posts', url: '/fetch/posts' },
  { title: 'Form', url: '/form' },
  { title: 'Two Way Binding', url: '/twb' },
  { title: 'Old Page', url: '/old' },
  { title: 'HOC', url: '/hoc' }
];

const NavBar = props => (
  <StyledUl>
    {list.map(item => (
      <li key={item.title}>
        <NavLink to={item.url} exact={true} activeStyle={selectedStyle}>
          {item.title}
        </NavLink>
      </li>
    ))}
  </StyledUl>
);

export default NavBar;
