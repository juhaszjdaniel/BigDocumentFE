import {Component, OnInit} from '@angular/core';
import {BigDocumentService} from '../big-document.service';
import {PageDto} from './page.dto';
import {DocumentDto} from './document.dto';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  array: Array<DocumentDto> = [];
  throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 1.5;
  size = 100;
  offset = 0;
  page: PageDto;

  constructor(protected service: BigDocumentService) {
  }

  ngOnInit() {
    this.page = new PageDto(this.offset, this.size);
    this.getDocumentList(this.page);
  }

  getDocumentList(page: PageDto): void {
    this.service.getPagedList(page).subscribe(list => list.forEach(document => this.array.push(document)));
  }

  addItems() {
    this.service.getPagedList(this.page).subscribe(list => {
      list.forEach(document => {
        this.array.push(document);
        if (this.array.length > this.size * 2) {
          this.array.splice(0, this.size);
        }
      });
      console.log(this.array);
    });
  }

  shiftItems() {
    this.service.getPagedList(this.page).subscribe(list => {
      list.reverse().forEach(document => {
        this.array.unshift(document);
        if (this.array.length > this.size * 2) {
          this.array.splice(this.array.length - this.size, this.size);
        }
      });
      console.log(this.array);
    });
  }

  appendItems() {
    this.addItems();
  }

  prependItems() {
    this.shiftItems();
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
