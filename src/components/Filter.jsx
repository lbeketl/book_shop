import React from 'react';
import { Menu, Input } from 'semantic-ui-react';




const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
    
    return (
        <Menu secondary>
          <Menu.Item
            // name='all'
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
          >
              Всі
          </Menu.Item>
          <Menu.Item
            // name='popular'
            active={filterBy === 'popular'}
            onClick={setFilter.bind(this, 'popular')}
          >
              Популярні
          </Menu.Item>
          <Menu.Item
            // name='hight_price'
            active={filterBy === 'hight_price'}
            onClick={setFilter.bind(this, 'hight_price')}
          >
              Дорогі
          </Menu.Item>
          <Menu.Item
            // name='low_price'
            active={filterBy === 'low_price'}
            onClick={setFilter.bind(this, 'low_price')}
          >
              Дешеві
          </Menu.Item>
          <Menu.Item
            // name='author'
            active={filterBy === 'author'}
            onClick={setFilter.bind(this, 'author')}
          >
              Автор
          </Menu.Item>
          <Menu.Item>
              <Input 
                icon='search' 
                onChange={event => setSearchQuery(event.target.value)} 
                placeholder='Введіть запит' 
                value={searchQuery}>
              </Input>
          </Menu.Item>
        </Menu>
      )
}

export default Filter;
  