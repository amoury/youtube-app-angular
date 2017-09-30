import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResultModel} from "../search-result.model";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() results: EventEmitter<SearchResultModel[]>

  constructor() { }

  ngOnInit() {
  }

  getSearchQuery(query) {
    console.log(query.value);
  }


}
