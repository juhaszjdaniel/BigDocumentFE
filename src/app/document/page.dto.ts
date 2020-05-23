export class PageDto {
  offset = 0;
  pageSize: number;

  constructor(offset: number, pageSize: number) {
    this.offset = offset;
    this.pageSize = pageSize;
  }
}
