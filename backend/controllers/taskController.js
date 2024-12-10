const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;

    try {
        const newTask = new Task({
            userId: req.user.id,
            title,
            description,
            dueDate,
        });

        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, dueDate, status } = req.body;

    try {
        let task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });

        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        task = await Task.findByIdAndUpdate(
            req.params.id,
            { $set: { title, description, dueDate, status } },
            { new: true }
        );

        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });

        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Task.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Task removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
