import express from "express";

import {
  getProjects,
  getProject,
  getProjectsBySearch,
  getProjectsByCreator,
  createProject,
  updateProject,
  deleteProject,
  likeProject,
  commentProject,
} from "../controllers/project.js";

const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/creator", getProjectsByCreator);
router.get("/search", getProjectsBySearch);
router.get("/", getProjects);
router.get("/:id", getProject);

router.post("/", auth, createProject);
router.patch("/:id", auth, updateProject);
router.delete("/:id", auth, deleteProject);
router.patch("/:id/like-crypto-project", auth, likeProject);
router.post("/:id/comment-crypto-project", auth, commentProject);

export default router;
