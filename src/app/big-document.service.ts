import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DocumentDto} from './document/document.dto';
import {PageDto} from './document/page.dto';

@Injectable({
  providedIn: 'root'
})
export class BigDocumentService {


  constructor(protected http: HttpClient) {
  }

  get(): Observable<DocumentDto> {
    return this.http.get<DocumentDto>('http://localhost:8080/api/big-document');
  }

  getList(): Observable<Array<DocumentDto>> {
    return this.http.get<Array<DocumentDto>>('http://localhost:8080/api/big-document/list');
  }

  getPagedList(page: PageDto): Observable<Array<DocumentDto>> {
    return this.http.post<Array<DocumentDto>>('http://localhost:8080/api/big-document', page);
  }
}
