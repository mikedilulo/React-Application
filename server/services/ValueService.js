import { dbContext } from "../database/DbContext";
import { BadRequest } from "../utilities/Errors";

class ValuesService {
  async find(query = {}) {
    let values = await dbContext.Values.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const valuesService = new ValuesService();