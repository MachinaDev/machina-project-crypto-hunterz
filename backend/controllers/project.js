import express from "express";
import mongoose from "mongoose";

import Project from "../models/Project.js";

const router = express.Router();

export const getProjects = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await Project.countDocuments({});
    const Projects = await Project.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: Projects,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProjectsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const cryptoName = new RegExp(searchQuery, "i");

    const projects = await Project.find({
      $or: [{ cryptoName }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: projects });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProjectsByCreator = async (req, res) => {
  const { name } = req.query;

  try {
    const projects = await Project.find({ name });

    res.json({ data: projects });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body;

  const newProject = new Project({
    ...project,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    cryptoName,
    ticker,
    contract,
    website,
    concept,
    advantage,
    opinion,
    exchange,
    risk,
    creator,
    tags,
    selectedFile,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedProject = {
    cryptoName,
    ticker,
    contract,
    website,
    concept,
    advantage,
    opinion,
    exchange,
    risk,
    creator,
    tags,
    selectedFile,
    _id: id,
  };

  await Project.findByIdAndUpdate(id, updatedProject, {
    new: true,
  });

  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  await Project.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export const likeProject = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const project = await Project.findById(id);

  const index = project.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    project.likes.push(req.userId);
  } else {
    project.likes = project.likes.filter((id) => id !== String(req.userId));
  }

  const updatedProject = await Project.findByIdAndUpdate(id, project, {
    new: true,
  });

  res.status(200).json(updatedProject);
};

export const commentProject = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const project = await Project.findById(id);

  project.comments.push(value);

  const updatedProject = await Project.findByIdAndUpdate(id, project, {
    new: true,
  });

  res.json(updatedProject);
};

export default router;
