import React, { useState } from "react";

function UpdateRemark() {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [output, setOutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/api/configurations/${configId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ remark }),
      });
      const data = await res.json();
      setOutput(data.message);
    } catch (err) {
      setOutput("Failed to update");
    }
  };

  return (
    <div>
      <h2>Update Remark</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Config To Update (configId):{" "}
          <input
            type="text"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Remark{" "}
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>
        Click the "Submit" button - the configId and remark will be "PUT" on api
        <br />
        "http://localhost:8080/api/configurations/{"{id}"}" and remark field
        gets updated for the provided configId.
      </p>

      <p>
        <strong>
          PUT: http://localhost:8080/api/configurations/{configId}
        </strong>
      </p>

      <p>{output}</p>
    </div>
  );
}

export default UpdateRemark;
