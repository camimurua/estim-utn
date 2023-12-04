import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Genre, GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css'],
})
export class GenreFormComponent {
  @Input() genre: Genre | undefined;

  genreForm: FormGroup;

  constructor(private fb: FormBuilder, private genreService: GenreService) {
    this.genreForm = this.fb.group({
      id: [],
      name: [''],
      minAge: [],
    });
  }

  ngOnChanges(): void {
    if (this.genre) {
      this.genreForm.patchValue(this.genre);
    }
  }

  onSubmit(): void {
    const formValue = this.genreForm.value;

    if (this.genre) {
      this.genreService.updateGenre(formValue);
    } else {
      this.genreService.addGenre(formValue);
    }

    this.genreForm.reset();
  }

  onDelete(): void {
    if (this.genre) {
      this.genreService.deleteGenre(this.genre.id);
    }

    this.genreForm.reset();
  }
}