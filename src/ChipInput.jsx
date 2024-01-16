import React, { useState, useEffect, useRef } from 'react';

import Avatar from './Avatar';
import './ChipInput.css';

const ChipInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([
    { id: '1', username: 'Letitia George', email: 'g.letitia@gmail.com' },
    { id: '2', username: 'Denise Hall', email: 'd.hall@gmail.com' },
    { id: '3', username: 'Calvin Jones', email: 'j.calvin@gmail.com' },
    { id: '4', username: 'Ken Alverez', email: 'k.alverez@gmail.com' },
    { id: '5', username: 'Brad Grant', email: 'g.brad@gmail.com' },
    { id: '6', username: 'Tracy Bing', email: 't.bracy@gmail.com' },
    { id: '7', username: 'Bradley Wells', email: 'w.bradley@gmail.com' },
    { id: '8', username: 'Tim Hall', email: 't.hall@example.com' },
    { id: '9', username: 'Tamara Cox', email: 't.cox@example.com' },
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleItemSelect = (user) => {
   
    setSelectedItems([...selectedItems, user]);
    setAvailableItems(availableItems.filter((item) => item.id !== user.id));
    setInputValue('');
  };

  const handleChipDelete = (userToRemove) => {
    const updatedItems = selectedItems.filter((user) => user !== userToRemove);
    setSelectedItems(updatedItems);
    setAvailableItems([...availableItems,userToRemove]);
  };

  const inputContainerWidth = selectedItems.length > 0 ? selectedItems.length * 200 : '100%';

  const containerStyle = {
    width: inputContainerWidth,
    overflow: 'hidden', // Hide the scrollbar
  };

  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0; // Reset scroll left position
    }
  }, [selectedItems]);

  return (
    <div className="chip-input-container">
      <div className="chips-container" style={containerStyle} ref={containerRef}onWheel={(e) => {
        
          if (e.deltaX !== 0) {
            e.preventDefault();
          }
        }}>
        {selectedItems.map((user) => (
          <div key={user.id} className="chip">
            <Avatar username={user.username} />
            <div>
              <p>{user.username}   {user.email}
              </p>
         
            </div>
            <span onClick={() => handleChipDelete(user)}>X</span>
          </div>
        ))}
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add new users"
      />
      </div>
      {inputValue && (
        <ul className="user-list">
          {availableItems
            .filter((user) => !selectedItems.includes(user))
            .filter(
              (user) =>
                user.username.toLowerCase().includes(inputValue.toLowerCase()) ||
                user.email.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((user) => (
              <li key={user.id} onClick={() => handleItemSelect(user)}>
                <Avatar username={user.username} />
                <div>
                  <p>{user.username}   {user.email}</p>

                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ChipInput;
