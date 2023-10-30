

// Define a Table component
function Table() {
  const data = [
    { name: "Row 1", value1: "Data 1", value2: "Data 2" },
    { name: "Row 2", value1: "Data 3", value2: "Data 4" },
  ];

  return (
    <div>
      <h2>My Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value 1</th>
            <th>Value 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.value1}</td>
              <td>{item.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Table;