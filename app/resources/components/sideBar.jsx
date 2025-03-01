'use client'
import { useState } from 'react';

const Sidebar = ({ onSelect }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
    onSelect(item); // Notify the parent component about the selected item
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Menu</h2>
      <ul style={styles.menuList}>
        {['Videos & OCRs', 'Reports', 'Articles','Gallery'].map((item) => (
          <li
            key={item}
            style={{
              ...styles.menuItem,
              backgroundColor: item === activeItem ? '#ddd' : 'transparent',
            }}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: '48px',
    left: '0',
    zIndex: '1000',
    overflow: 'auto'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  menuList: {
    listStyle: 'none',
    padding: '0',
  },
  menuItem: {
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '10px',
  },
};

export default Sidebar;
