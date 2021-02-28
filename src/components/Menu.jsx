import React from 'react';
import { Menu, Button, Image, List, Popup } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart }) => (
    <List divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button onClick={removeFromCart.bind(this, id)} color="red">Видалити</Button>
        </List.Content>
        <Image avatar src={image} />
<List.Content>{title}</List.Content>
      </List.Item>
    </List>
  )
  
  

const MenuComponent = ({ totalPrice, count, items }) => {
    
    return(
        <Menu>
        <Menu.Item name="browse">Магазин книг</Menu.Item>
    
        <Menu.Menu position="right">
          <Menu.Item name="signup">
            Разом: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
          </Menu.Item>
    
          <Popup
            trigger={
              <Menu.Item name="help">
                Кошик (<b>{count}</b>)
              </Menu.Item>
            }
            content={items.map(book => (
              <CartComponent {...book} />
            ))}
            on="click"
            hideOnScroll
          />
        </Menu.Menu>
      </Menu>
    )
}

export default MenuComponent;