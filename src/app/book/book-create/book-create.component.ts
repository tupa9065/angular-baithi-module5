import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  isSubmit = false;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  create(createForm: NgForm) {
    this.isSubmit = true;
    if (createForm.valid) {
      this.bookService.save(createForm.value).subscribe(() => {
        alert('create success');
      });
      this.book = {};
      this.isSubmit = false;
    } else {
      alert('data invalid');
    }
  }
}
