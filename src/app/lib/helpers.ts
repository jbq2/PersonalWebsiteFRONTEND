export class Helper{
    static monthMap: Map<any, any> = new Map<number, string>([
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

    static convertDate(inputDate: string): string{
        //converts from YYYY-MM-DD to Date Month, Year
        let year = '';
        let month: string | number = '';
        let date: string | number = '';

        year = inputDate.slice(0,4);
        month = this.monthMap.get(+inputDate.slice(5,7));
        date = +inputDate.slice(8);

        return `${date} ${month}, ${year}`;
    }
}