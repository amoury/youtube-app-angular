import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { SearchResultModel } from "./search-result.model";

const ApiKEY = 'AIzaSyAyOMdHs0WivaEr5-TDK3pPyvH2gvlaGzI';

@Injectable()
export class YouTubeSearchService {
  private url = `https://www.googleapis.com/youtube/v3/search?q=suits&maxResults=10&part=snippet&key=${ApiKEY}`;

  data: any[];

  constructor(private http: Http) {}

  getVideos() {
    return this.http.get(this.url);
  }
}
