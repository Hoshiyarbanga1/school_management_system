import School from '../models/school.model';

export default class SchoolService {
  static async create(data: any) {
    return await School.create(data);
  }

  static async getAll() {
    return await School.find();
  }

  static async getSchoolId(id:any) {
    return await School.findById(id);
  }

  static async updateSchool(id:any , data:any) {
    return await School.findByIdAndUpdate(id, data, { new: true });
  }
  static async deleteSchool(id:any) {
    return await School.findByIdAndDelete(id);
  }
}
