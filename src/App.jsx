import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const [jsonData, setJsonData] = useState({});

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {/* Fields Column */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <AddItem onUpdate={setJsonData} />
            </div>
          </div>
        </div>

        {/* JSON Preview Column */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-light">
              <h5 className="mb-0">JSON Schema</h5>
            </div>
            <div className="card-body">
              <pre className="mb-0 bg-light p-3 rounded">
                {JSON.stringify(jsonData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;