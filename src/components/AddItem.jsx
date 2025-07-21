import { useState } from 'react';
import FieldRow from './FieldRow';

const AddItem = ({ onUpdate }) => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    const newFields = [...fields, { name: "", type: "" }];
    setFields(newFields);
    updateJson(newFields);
  };

  const updateJson = (fields) => {
    const jsonData = {};
    fields.forEach(field => {
      if (field.type === "nested") {
        jsonData[field.name || ""] = field.nestedValue || {};
      } else {
        jsonData[field.name || ""] = field.type || "";
      }
    });
    onUpdate(jsonData);
  };

  const handleFieldChange = (index, name, type, nestedValue) => {
    const newFields = [...fields];
    newFields[index] = { 
      ...newFields[index], 
      name, 
      type,
      nestedValue
    };
    setFields(newFields);
    updateJson(newFields);
  };

  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
    updateJson(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <FieldRow
          key={index}
          index={index}
          field={field}
          onChange={handleFieldChange}
          onRemove={removeField}
        />
      ))}
      <button 
        className="btn btn-primary mt-2 w-100"
        onClick={addField}
      > +Add Item
      </button>
    </div>
  );
};

export default AddItem;