# JSON Schema Builder

A dynamic React application for building and editing nested JSON schemas through an intuitive form interface.

![App Screenshot](https://github.com/user-attachments/assets/b5be6286-e36d-418b-854a-863cc74a6b32)

## Features

- 🏗️ Create complex nested JSON structures
- 🔄 Real-time schema preview
- ✨ Multiple field types:
  - String
  - Number
  - Boolean
  - Nested Objects
- 📱 Responsive layout:
  - Form fields on left
  - JSON Schema preview on right
- ➕/➖ Add/remove fields easily

## Tech Stack

- **Frontend**:
  - React (Functional Components + Hooks)
  - Bootstrap 5 (Styling)
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/json-schema-builder.git
   cd json-schema-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## How It Works

### Component Architecture

```
src/
├── App.jsx           # Root component
├── components/
│   ├── AddItem.jsx   # Manages field list
│   └── FieldRow.jsx  # Recursive field component
```

### Key Functionality

- **State Management**: Uses React's `useState` to track form state
- **Recursive Components**: `FieldRow` renders itself for nested fields
- **Real-time Updates**: JSON preview updates on every change

## Usage Example

1. Click "Add Field" to create new entries
2. Select field type from dropdown
3. For nested fields:
   - Select "Nested" type
   - Click "Add Nested Field"
4. Watch the JSON Schema update automatically:

```json
{
  "name": "string",
  "age": "number",
  "address": {
    "street": "string",
    "city": "string"
  }
}
```

## Roadmap

- [ ] Field validation
- [ ] JSON import/export
- [ ] Undo/redo functionality
- [ ] TypeScript migration
- [ ] Schema validation rules

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by [Shivam]
```
