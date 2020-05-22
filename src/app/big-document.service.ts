import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DocumentDto} from './document/document.dto';

@Injectable({
  providedIn: 'root'
})
export class BigDocumentService {


  constructor(protected http: HttpClient) {
  }

  get(): Observable<DocumentDto> {
    return this.http.get<DocumentDto>('http://localhost:8080/api/big-document');
  }
}
