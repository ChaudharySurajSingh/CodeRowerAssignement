import React, { useState } from "react";

function FetchConfig() {
  const [configId, setConfigId] = useState("");
  const [output, setOutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/api/configurations/${configId}`);
      if (!res.ok) {
        setOutput("Configuration not found");
        return;
      }
      const data = await res.json(); 
      setOutput(data);
    } catch (err) {
      setOutput("Failed to fetch");
    }
  };

  const renderOutput = () => {
    if (!output) return "";
    if (Array.isArray(output)) {
      return output.map((row) => row.join(",")).join("\n");
    }
    return output;
  };

  return (
    <div>
      <h2>Fetch Config</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Config To Load (configId):{" "}
          <input
            type="text"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
  Click the "Submit" button and the configId with this if will get from
  {" http://localhost:8080/api/configurations/{id} "} and shown below
  <br />
</p>

<p>
  <strong>
    GET: http://localhost:8080/api/configurations/{configId}
  </strong>
</p>

      <p>Output:</p>
      <pre>{renderOutput()}</pre>
    </div>
  );
}

export default FetchConfig;
