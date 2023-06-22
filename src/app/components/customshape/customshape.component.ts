import { Component, HostBinding, Input, inject } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { HelloDialogComponent } from '../hellodialog/hellodialog.component';
import { TlappService } from 'src/app/services/tlapp.service';

@Component({
  templateUrl: './customshape.component.html',
  styleUrls: ['./customshape.component.scss'],
})
export class CustomshapeComponent {
  @HostBinding('style.--fa-primary-color')
  @Input()
  primarycolor: string = 'white';

  @HostBinding('style.--fa-secondary-color')
  @Input()
  secondarycolor: string = '#4263eb';

  public shapec: any;

  private dialog = inject(DialogService);

  private appsvc = inject(TlappService);

  @Input() set shape(val: string) {
    try {
      this.shapec = JSON.parse(atob(val));
    } catch (error) {
      console.error('set shape error ', error, val);
    }
  }

  get shapeid() {
    return this.shapec?.id || 'shapeid';
  }

  get text() {
    return this.shapec?.props?.text || 'text';
  }

  get hasBoundStartArrow() {
    return this.appsvc.hasBoundStartArrow(this.shapec);
  }

  onClick(evt: any) {
    console.log('click', evt);
  }

  onMouseDown(evt: any) {
    console.log('mousedown', evt);
    const dialogRef = this.dialog.open(HelloDialogComponent, {
      // data is typed based on the passed generic
      data: {
        title: 'Hello ' + this.text + ', your id is ' + this.shapeid,
      },
    });
    dialogRef.afterClosed$.subscribe((result) => {
      console.log(`After dialog has been closed ${result}`);
    });
  }

  onMouseUp(evt: any) {
    console.log('mouseup', evt);
  }

  addState() {
    this.appsvc.addState(this.shapec);
  }
}
