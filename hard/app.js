const express = require('express');
const employees = require('./employees.json');

const app = express();

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employees.find(emp => emp.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
