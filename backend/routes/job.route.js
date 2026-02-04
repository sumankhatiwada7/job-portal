import express from 'express';

const router=express.Router();
import { createJob, alljobs, jobbyId, adminjobs } from '../controller/job.controller.js';
import isAuthenticated from '../middleware/isauthenticated.js';

router.post('/postjob',isAuthenticated,createJob);
router.get('/alljobs',alljobs);
router.get('/job/:id',jobbyId);
router.post('/adminjobs',isAuthenticated,adminjobs);

export default router;