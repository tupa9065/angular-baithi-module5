import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.bookService.getAll().subscribe(book => { this.books = book; });
  }

  delete(id: number) {
    // tslint:disable-next-line:ban-types
    let isOk: Boolean = false;
    this.bookService.getById(id).subscribe(book => {
       isOk = confirm(' Delete book: ' + book.title);
      }
    );
    // tslint:disable-next-line:ban-types
    if (isOk) {
      this.bookService.delete(id).subscribe(() => {
        this.getAll();
      });
    }
  }
}
