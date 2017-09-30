import {Component, OnInit, Input} from '@angular/core';
import { YouTubeSearchService } from "./you-tube-search.service";
import {SearchResultModel} from "./search-result.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Hello';
  videos: any[];
  video: object;

  @Input() results: SearchResultModel;

  constructor(private service: YouTubeSearchService) {}

  ngOnInit() {
    this.service.getVideos()
      .subscribe(response => {
        this.videos = response.json().items;
        });
      }
}


