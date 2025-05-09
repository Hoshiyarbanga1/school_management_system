import { Request, Response } from 'express';
import SchoolService from '../services/school.service';

export default class SchoolController {
  static async createSchool(req: Request, res: Response) {
    try {
        const school = await SchoolService.create(req.body);
        res.status(201).json(school);
    } catch (err) {
        res.status(500).json('error creating school');
    }
  }

  static async getAllSchools(req: Request, res: Response) {
    const schools = await SchoolService.getAll();
    res.json(schools);
  }

  static async getSchoolById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const school = await SchoolService.getSchoolId(id);
      if (!school) {
        return res.status(404).json({ message: 'School not found' });
      }
      res.status(200).json(school);
    } catch (error) {
        res.status(500).json('error creating school');
    }
  }

  static async updateSchool(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updatedSchool = await SchoolService.updateSchool(id , req.body);
        if (!updatedSchool) {
        return res.status(404).json({ message: 'School not found' });
        }
        res.status(200).json(updatedSchool);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
  };

  static async deleteSchool (req: Request, res: Response) {
    try {
        const { id } = req.params;
        const deletedSchool = await SchoolService.deleteSchool(id);
        if (!deletedSchool) {
        return res.status(404).json({ message: 'School not found' });
        }
        res.status(200).json({ message: 'School deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
 };
}
