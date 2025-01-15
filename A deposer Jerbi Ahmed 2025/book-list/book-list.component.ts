import { Component } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  book_title='';
  book_cover='';
  book_description='';
  book_author='';

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.libraryService.getBooks().subscribe(
      books => this.books = books
    );
    this.get_best_sellers()
  }

  books_best_sellers: any[] = [];
  get_best_sellers(){
    this.libraryService.get_best_sellers().subscribe(
      (data:any)=>{
        this.books_best_sellers = data.results.lists[0].books;
        
      }
    )
  }

  open_book(book:any){
    this.book_title=book.title;
    this.book_cover=book.book_image;
    this.book_description=book.description;
    this.book_author=book.author;
    let dialog = document.getElementById('dialog');
    if(dialog){
      dialog.style.display='block';
    }


  }

  close_dialog(){
    let dialog = document.getElementById('dialog');
    if(dialog){
      dialog.style.display='none';
    }
  }

}
