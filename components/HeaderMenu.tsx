import React from 'react';
import {
  Segment,
  Menu,
  Container,
  Button
} from 'semantic-ui-react';

interface Props {
  fixed: boolean
}

const HeaderMenu = ({ fixed }: Props) => {
  return (
    <Segment
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Menu
        fixed="top"
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='small'
      >
        <Container>
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item position='right'>
            <Button as='a'>
              Log in
            </Button>
            <Button as='a' primary style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    </Segment>
  );
}

export default HeaderMenu;
