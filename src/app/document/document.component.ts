import {Component, OnInit} from '@angular/core';
import {BigDocumentService} from '../big-document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  document: String;
  constructor(protected service: BigDocumentService) {
  }

  ngOnInit() {
    this.getDocument();
  }

  getDocument(): void{
    this.service.get().subscribe(value => this.document = value.document);
  }
}
