const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const { date } = req.body;
    const userId = req.user.userId;
    const appointment = await Appointment.create({ date, userId });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const userId = req.user.userId;
    const appointments = await Appointment.findAll({ where: { userId } });
    res.json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
