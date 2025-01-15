import { Component } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
 
  searched: boolean = false;
  livres:any[]=[];
  constructor(private libraryService: LibraryService) {}

  rechercherLivre(titre: string) {
    this.libraryService.rechercherLivre(titre).subscribe((data: any) => {
      this.livres = data.items;
    });
  }

}
