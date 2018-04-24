import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackernewsApiService} from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: number[];

  constructor(private _hackerNewsApiService: HackernewsApiService) {}
   

  ngOnInit() {
    this._hackerNewsApiService.fetchStories()
              .subscribe(
                items => this.items = items,
              error => console.log('Error fetching stories'));
  }

}
