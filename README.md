JSON-Schema-Builder APP

A dynamic JSON editor built with React that allows users to create and edit nested JSON structures through a form interface.

<img width="1920" height="813" alt="image" src="https://github.com/user-attachments/assets/b5be6286-e36d-418b-854a-863cc74a6b32" />

#Features
-Add fields with key-value pairs
-Nested objects support
-Real-time JSON preview
-Field types: String, Number, Boolean, Nested Object
-Responsive layout (fields on left, JSON Schema preview on right)

#Tech Stack
- React 
- Bootstrap

#How It Works
-Component Structure
--App: Root component with layout
--AddItem: Manages the list of fields
--FieldRow: Recursive component for each field (supports nesting)
-Key Logic:
--Uses useState to track form state
--Recursive rendering for nested fields
--Dynamic JSON generation on every change
-Example Usage:
--Click "Add Field" to create new entries
--Select field type (String/Number/Boolean/Nested)
--For nested fields, click "Add Nested Field"
-JSON updates automatically:

json
{
  "name": "string",
  "age": "number",
  "address": {
    "street": "string",
    "city": "string"
  }
}
