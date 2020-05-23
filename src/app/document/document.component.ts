import {Component, OnInit} from '@angular/core';
import {BigDocumentService} from '../big-document.service';
import {PageDto} from './page.dto';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  array = [];
  throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 1.5;
  size = 25;
  offset = 0;
  page: PageDto;

  constructor(protected service: BigDocumentService) {
  }

  ngOnInit() {
    this.page = new PageDto(this.offset, this.size);
    this.getDocumentList(this.page);
  }

  getDocumentList(page: PageDto): void {
    this.service.getPagedList(page).subscribe(list => list.forEach(document => this.array.push(document.document)));
  }

  addItems(_method) {
    this.service.getPagedList(this.page).subscribe(list => list.forEach(document => this.array[_method](document.document)));
  }

  appendItems() {
    this.addItems('push');
  }

  prependItems() {
    this.addItems('unshift');
  }

  onScrollDown(ev) {
    this.page.offset += 1;
    console.log('down stuff', this.size, this.page.offset, ev);
    this.appendItems();
  }

  onUp(ev) {
    console.log('uuuuuup');
    if (this.page.offset > 0) {
      this.page.offset -= 1;
      console.log('up stuff', this.page.pageSize, this.page.offset, ev);

      this.prependItems();
    }
  }

}
