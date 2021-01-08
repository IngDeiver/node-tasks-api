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
    @IsNotEmpty()
    @IsString()
    public title: string;

    /**
   * Creates an instance of TaskDTO.
   * @param {string} title - the tile of task
   * @memberof TaskDTO
   */
    constructor(title: string) {
      this.title = title;
    }
}

export default TaskDTO;
