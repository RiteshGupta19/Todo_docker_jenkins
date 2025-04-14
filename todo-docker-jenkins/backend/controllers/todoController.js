const Todo = require('../models/todoModel');

 const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

 const createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Title is required');
  }

  const todo = await Todo.create({ title });
  res.status(201).json(todo);
};

 const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedTodo);
};

 const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }

  await todo.deleteOne();
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
