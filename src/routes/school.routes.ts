import { Router } from 'express';
import SchoolController from '../controllers/school.controller';

const router = Router();
const asyncHandler = (fn: any) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post('/', SchoolController.createSchool);
router.get('/', SchoolController.getAllSchools);
router.get('/:id', asyncHandler(SchoolController.getSchoolById));
router.get('/', SchoolController.getAllSchools);

export default router;
