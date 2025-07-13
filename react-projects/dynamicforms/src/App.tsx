import './App.css';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [formData, setFormData] = useState({
        text: '',
        checkbox: false,
        radio: '',
        select: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="form-wrapper">
            <h1>React TypeScript Form</h1>
            <form className="form">
                {/* Text Input */}
                <div className="form-group">
                    <label htmlFor="text">Text:</label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Enter some text"
                    />
                </div>

                {/* Checkbox */}
                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        checked={formData.checkbox}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkbox">Check me</label>
                </div>

                {/* Radio Buttons */}
                <div className="form-group">
                    <label>Choose an option:</label>
                    <div className="radio-options">
                        <label>
                            <input
                                type="radio"
                                name="radio"
                                value="Option 1"
                                checked={formData.radio === 'Option 1'}
                                onChange={handleChange}
                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="radio"
                                value="Option 2"
                                checked={formData.radio === 'Option 2'}
                                onChange={handleChange}
                            />
                            Option 2
                        </label>
                    </div>
                </div>

                {/* Dropdown */}
                <div className="form-group">
                    <label htmlFor="select">Select:</label>
                    <select
                        id="select"
                        name="select"
                        value={formData.select}
                        onChange={handleChange}
                    >
                        <option value="">-- Choose --</option>
                        <option value="option1">Dropdown Option 1</option>
                        <option value="option2">Dropdown Option 2</option>
                    </select>
                </div>
            </form>

            {/* Display Form Data */}
            <div className="form-display">
                <h2>Form Output</h2>
                <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
                <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
                <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
                <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
            </div>
        </div>
    );
};

export default App;
