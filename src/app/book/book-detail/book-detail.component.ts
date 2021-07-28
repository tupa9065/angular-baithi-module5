import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};
  constructor(private activatedRouter: ActivatedRoute,
              private bookService: BookService) {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getBook(id);
    });
  }

  ngOnInit() {
  }

  private getBook(id) {
    this.bookService.getById(id).subscribe(book => this.book = book);
  }
}
