import { Constants } from './constants';
import { Course } from './../interface/course';
import { Project } from 'src/app/interface/project';
export class Helper{

    static convertDate(inputDate: string): string{
        //converts from YYYY-MM-DD to Date Month, Year
        let year = '';
        let month: string | number = '';
        let date: string | number = '';

        year = inputDate.slice(0,4);
        month = Constants.monthMap.get(+inputDate.slice(5,7) - 1);
        date = +inputDate.slice(8);

        return `${date} ${month}, ${year}`;
    }
}