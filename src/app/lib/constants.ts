import { Course } from "../interface/course";
import { Project } from "../interface/project";

export class Constants{
    static readonly monthMap: Map<any, any> = new Map<number, string>([
        [0, 'January'],
        [1, 'February'],
        [2, 'March'],
        [3, 'April'],
        [4, 'May'],
        [5, 'June'],
        [6, 'July'],
        [7, 'August'],
        [8, 'September'],
        [9, 'October'],
        [10,'November'],
        [11,'December']
      ]);

    static readonly emptyProject: Project = {
    id: -1,
    name: '',
    description: '',
    course: '',
    startdate: '',
    enddate: '',
    url: '',
    servedurl: ''
    };

    static readonly emptyCourse: Course = {
    id: -1,
    code: '',
    title: '',
    startdate: '',
    enddate: ''
    };
}