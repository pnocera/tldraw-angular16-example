import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

interface Data {
  title: string;
}

@Component({
  templateUrl: './hellodialog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloDialogComponent {
  ref: DialogRef<Data, boolean> = inject(DialogRef);

  get title() {
    if (!this.ref.data) return 'Hello world';
    return this.ref.data.title;
  }
}
