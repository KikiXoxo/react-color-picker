import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = e => {
    setColor(e.target.value);
  };

  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{ backgroundColor: color }}>
        {/* Double curly braces for style because the outer ones show its a JS expression being paseed in, and the inner ones are cuz styles are always in an object */}
        <p>Selected Color: {color}</p>
      </div>

      <label>Select Color:</label>
      <input type='color' value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
