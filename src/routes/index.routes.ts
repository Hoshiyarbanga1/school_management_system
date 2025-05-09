import { Router } from 'express';

import schoolRoutes from './school.routes';
// import classRoutes from './class.routes';
// import sectionRoutes from './section.routes';
// import studentRoutes from './student.routes';
// import enrollmentRoutes from './enrollment.routes';

const router = Router();

router.use('/schools', schoolRoutes);
// router.use('/classes', classRoutes);
// router.use('/sections', sectionRoutes);
// router.use('/students', studentRoutes);
// router.use('/enrollments', enrollmentRoutes);

export default router;
