/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { IsString, IsNotEmpty } from 'class-validator';

/**
 *
 * DTO for task resource
 * @class TaskDTO
 *
 */
class TaskDTO {
    public _id: string

    @IsNotEmpty()
    @IsString()
    public title: string;

    /**
   * Creates an instance of TaskDTO.
   * @param {string} title - the tile of task
   * @memberof TaskDTO
   */
    constructor(_id: string, title: string) {
      this.title = title;
      this._id = _id;
    }
}

export default TaskDTO;
