const Task = require('../models/task');

exports.createTask = async (req, res) => {
  const { title, description, status, priority, due_date } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      due_date,
      userId: req.user.id,
    });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: 'Creating task failed' });
  }
};

exports.getTasks = async (req, res) => {
  const { status, priority, due_date, page = 1, limit = 10 } = req.query;
  const filters = { userId: req.user.id };
  if (status) filters.status = status;
  if (priority) filters.priority = priority;
  if (due_date) filters.due_date = due_date;

  try {
    const tasks = await Task.findAndCountAll({
      where: filters,
      limit,
      offset: (page - 1) * limit,
    });

    res.json({
      totalTasks: tasks.count,
      totalPages: Math.ceil(tasks.count / limit),
      currentPage: page,
      tasks: tasks.rows,
    });
  } catch (error) {
    res.status(500).json({ error: 'Fetching tasks failed' });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, status, priority } = req.body;
  try {
    const task = await Task.findByPk(req.params.taskId);
    if (!task || task.userId !== req.user.id) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.priority = priority || task.priority;
    await task.save();
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: 'Updating task failed' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    if (!task || task.userId !== req.user.id) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Deleting task failed' });
  }
};
