import { Component, Input, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private _hackerNewsApiService: HackernewsApiService) { }

  ngOnInit() {
    this._hackerNewsApiService.fetchItem(this.itemID)
              .subscribe(
                data => {this.item = data;},
                error => console.log('Could not load item' + this.itemID));
  }

}
