import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from './services/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked {
  title = 'teco';
  $spinner: Observable<boolean>;

  constructor(
    private _spinnerService: SpinnerService,
    private cdRef: ChangeDetectorRef
  ) {
    this.$spinner = this._spinnerService.spinnerState$;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
