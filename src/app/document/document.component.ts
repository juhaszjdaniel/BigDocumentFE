import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BigDocumentService} from '../big-document.service';
import {PageDto} from './page.dto';
import {DocumentDto} from './document.dto';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  @Output() arraySize = new EventEmitter<number>();
  array: Array<DocumentDto> = [];
  throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 1.5;
  size = 15;
  offset = 0;
  page: PageDto;

  constructor(protected service: BigDocumentService) {
  }

  ngOnInit() {
    this.page = new PageDto(this.offset, this.size);
    this.addItems();
  }

  addItems() {
    this.service.getPagedList(this.page).subscribe(list => {
      list.forEach(document => {
        this.array.push(document);
        if (this.array.length > this.size * 2) {
          this.array.splice(0, this.size);
        }
      });
    }, error => null, () => {
      this.arraySize.emit(this.array.length);
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
    }, error => null, () => {
      this.arraySize.emit(this.array.length);
    });
  }

  onScrollDown() {
    this.page.offset += 1;
    this.addItems();
  }

  onUp() {
    if (this.page.offset > 0) {
      this.page.offset -= 1;

      this.shiftItems();
    }
  }

}
