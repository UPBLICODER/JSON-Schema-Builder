import { useState } from 'react';

const FieldRow = ({ index, field, onChange, onRemove, depth = 0 }) => {
  const [nestedFields, setNestedFields] = useState([]);

  const handleTypeChange = (type) => {
    if (type === "nested") {
      onChange(index, field.name, type, {});
      setNestedFields([{ name: "", type: "" }]);
    } else {
      onChange(index, field.name, type, null);
      setNestedFields([]);
    }
  };

  const handleNestedChange = (nestedIndex, nestedName, nestedType, nestedValue) => {
    const updatedNested = [...nestedFields];
    updatedNested[nestedIndex] = { 
      name: nestedName,
      type: nestedType,
      nestedValue
    };
    setNestedFields(updatedNested);
    
    // Build complete nested object
    const nestedObject = {};
    updatedNested.forEach(f => {
      nestedObject[f.name || ""] = f.type === "nested" ? (f.nestedValue || {}) : f.type || "";
    });
    
    // Update parent with the complete nested structure
    onChange(index, field.name, "nested", nestedObject);
  };

  const addNestedField = () => {
    const newNestedFields = [...nestedFields, { name: "", type: "" }];
    setNestedFields(newNestedFields);
    
    // Update parent with empty nested field
    const nestedObject = {};
    newNestedFields.forEach(f => {
      nestedObject[f.name || ""] = f.type === "nested" ? {} : "";
    });
    onChange(index, field.name, "nested", nestedObject);
  };

  return (
    <div className={`mb-3 ${depth > 0 ? 'ps-4 border-start' : ''}`}>
      <div className="row g-2 align-items-center">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Field name"
            value={field.name}
            onChange={(e) => {
              onChange(
                index, 
                e.target.value, 
                field.type,
                field.type === "nested" 
                  ? nestedFields.reduce((obj, f) => ({
                      ...obj,
                      [f.name || ""]: f.type === "nested" ? (f.nestedValue || {}) : f.type || ""
                    }), {})
                  : null
              );
            }}
          />
        </div>
        <div className="col">
          <select 
            className="form-select"
            value={field.type} 
            onChange={(e) => handleTypeChange(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="nested">Nested</option>
          </select>
        </div>
        <div className="col-auto">
          <button 
            className="btn btn-sm btn-danger px-3"
            onClick={() => onRemove(index)}
            style={{ width: '40px' }}
          >
            X
          </button>
        </div>
      </div>

      {field.type === "nested" && (
        <div className="mt-2 ms-3">
          {nestedFields.map((nestedField, nestedIndex) => (
            <FieldRow
              key={nestedIndex}
              index={nestedIndex}
              field={nestedField}
              onChange={handleNestedChange}
              onRemove={(i) => {
                const updated = nestedFields.filter((_, idx) => idx !== i);
                setNestedFields(updated);
                
                // Update parent after removal
                const nestedObject = {};
                updated.forEach(f => {
                  nestedObject[f.name || ""] = f.type === "nested" ? (f.nestedValue || {}) : f.type || "";
                });
                onChange(index, field.name, "nested", nestedObject);
              }}
              depth={depth + 1}
            />
          ))}
          <button
            className="btn btn-primary mt-2 w-100"
            onClick={addNestedField}
          >+Add Item
          </button>
        </div>
      )}
    </div>
  );
};

export default FieldRow;