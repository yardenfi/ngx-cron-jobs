import { Injectable } from '@angular/core';
import { CronConfig, SelectOption } from '../contracts/contracts';

@Injectable()
export class DataService {

  private defaultConfig: CronConfig = {
    quartz: false,
    bootstrap: true,
    multiple: false,
  };

  private daysOfWeekPosix: Array<SelectOption> = [
    {value: 0, label: 'Sunday'},
    {value: 1, label: 'Monday'},
    {value: 2, label: 'Tuesday'},
    {value: 3, label: 'Wednesday'},
    {value: 4, label: 'Thursday'},
    {value: 5, label: 'Friday'},
    {value: 6, label: 'Saturday'}
  ];

  private daysOfWeekQuartz: Array<SelectOption> = [
    {value: 1, label: 'Sunday'},
    {value: 2, label: 'Monday'},
    {value: 3, label: 'Tuesday'},
    {value: 4, label: 'Wednesday'},
    {value: 5, label: 'Thursday'},
    {value: 6, label: 'Friday'},
    {value: 7, label: 'Saturday'}
  ];

  private numeral: Array<SelectOption> = [
    {value: 1, label: '1st'},
    {value: 2, label: '2nd'},
    {value: 3, label: '3rd'},
    {value: 4, label: '4th'},
    {value: 5, label: '5th'},
    {value: 6, label: '6th'},
    {value: 7, label: '7th'},
    {value: 8, label: '8th'},
    {value: 9, label: '9th'},
    {value: 10, label: '10th'},
    {value: 11, label: '11th'},
    {value: 12, label: '12th'},
    {value: 13, label: '13th'},
    {value: 14, label: '14th'},
    {value: 15, label: '15th'},
    {value: 16, label: '16th'},
    {value: 17, label: '17th'},
    {value: 18, label: '18th'},
    {value: 19, label: '19th'},
    {value: 20, label: '20th'},
    {value: 21, label: '21st'},
    {value: 22, label: '22nd'},
    {value: 23, label: '23rd'},
    {value: 24, label: '24th'},
    {value: 25, label: '25th'},
    {value: 26, label: '26th'},
    {value: 27, label: '27th'},
    {value: 28, label: '28th'},
    {value: 29, label: '29th'},
    {value: 30, label: '30th'},
    {value: 31, label: '31st'}
  ];

  private _months: Array<SelectOption> = [
    {value: 1, label: 'January'},
    {value: 2, label: 'February'},
    {value: 3, label: 'March'},
    {value: 4, label: 'April'},
    {value: 5, label: 'May'},
    {value: 6, label: 'June'},
    {value: 7, label: 'July'},
    {value: 8, label: 'August'},
    {value: 9, label: 'September'},
    {value: 10, label: 'October'},
    {value: 11, label: 'November'},
    {value: 12, label: 'December'}
  ];

  private _baseFrequency: Array<SelectOption> = [
    {value: 0, label: 'Please select'},
    {value: 1, label: 'Minute'},
    {value: 2, label: 'Hour'},
    {value: 3, label: 'Day'},
    {value: 4, label: 'Week'},
    {value: 5, label: 'Month'},
    {value: 6, label: 'Year'}
  ];

  private _hours: Array<SelectOption>;
  private _minutes: Array<SelectOption>;


  public get baseFrequency(): Array<SelectOption> {
    return [
      ...this._baseFrequency
    ];
  }

  public get daysOfMonth(): Array<SelectOption> {
    return [
      ...this.numeral
    ];
  }

  public get months(): Array<SelectOption> {
    return [
      ...this._months
    ];
  }

  public get hours(): Array<SelectOption> {
    return [
      ...this._hours
    ];
  }

  public get minutes(): Array<SelectOption> {
    return [
      ...this._minutes
    ];
  }

  constructor() {
    this._hours = [];
    for (let x = 0; x < 24; x++) {
      this._hours.push(<SelectOption>{value: x, label: `${x}`});
    }

    this._minutes = [];
    for (let x = 0; x < 60; x = x + 5) {
      this._minutes.push(<SelectOption>{value: x, label: `${x}`});
    }

  }


  getConfig(config: CronConfig): CronConfig {
    return {
      ...this.defaultConfig,
      ...config
    };
  }

  getDaysOfWeek(quartz: Boolean): Array<SelectOption> {
    if (quartz) {
      return [
        ...this.daysOfWeekQuartz
      ];
    }
    return [
      ...this.daysOfWeekPosix
    ];
  }

}