const { Schema, model } = require('mongoose');

const employeeSchema = Schema({
  employee_name: {
    type: String,
  },
  employee_lastname: {
    type: String,
  },
  employee_joined: {
    type: Date,
  },
  // employee_documents: {

  // },
  employee_payment: {
    type: Number,
  },
  employee_schedule: {
    type: Schema.Types.ObjectId,
    ref: 'schedule',
  },
  employee_role: {
    type: Schema.Types.ObjectId,
    ref: 'rol',
  },
});

export const Employee = model('employee', employeeSchema);
