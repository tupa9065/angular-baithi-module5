import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};
  isSubmit = false;
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
  edit(id , editForm) {
    this.isSubmit = true;
    if (editForm.valid) {
      this.bookService.update(id, editForm.value).subscribe(() => {
        alert('edit success');
      });
      this.isSubmit = false;
    } else {
      alert('data invalid');
    }
  }
}
