import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {FetchData} from './app/fetch-data/fetch-data'
@Component({
  selector: 'app-root',
  imports:[FetchData],

  template: `
    <h1>{{name}}</h1>
    <app-fetch-data></app-fetch-data>
  `,
})
export class App {
  name = 'Fetch Data';
}

bootstrapApplication(App);
