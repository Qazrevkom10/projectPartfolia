const Project = require("../../models/projects");


const createProject = async (req, res) => {
    try {
        let {name, description, photo, link} = req.body;
        const project = new Project({
            name,
            description,
            photo,
            link
        });
        await project.save();
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const projectList = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({projects});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


const updateProject = async (req, res) => {
    try {
        let {name, description, photo, link} = req.body;
        await Project.findByIdAndUpdate(req.params.project_id, {
            name,
            description,
            photo,
            link
        });
        const project = await Project.findById(req.params.project_id);
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.project_id);
        res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    createProject,
    projectList,
    updateProject,
    deleteProject
}
