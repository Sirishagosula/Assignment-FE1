import React, { useState } from 'react';

const YourComponent = () => {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    // Use setShowList to update the state
    setShowList(!showList);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle List</button>

      {showList && (
        <ul>
          {/* Your list items go here */}
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default YourComponent;
