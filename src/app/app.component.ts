import {
  Component,
  HostListener,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { App, Tldraw } from '@tldraw/tldraw';

import type { ComponentProps } from 'react';
import { Utils } from './utils/urls';
import { customTldrawConfig, customOverride } from './config';
import { TlappService } from './services/tlapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
  Tldraw = Tldraw;
  props!: ComponentProps<typeof Tldraw>;

  darkmode = false;

  @ViewChild('topdiv') topdiv: ElementRef<HTMLDivElement> | undefined;

  tldrawheight = {
    height: '100%',
  };

  constructor(private appsvc: TlappService) {
    const assetsurl = Utils.getAssetUrlsByMetaUrl({
      baseUrl: 'http://localhost:4200',
    });

    this.props = {
      assetUrls: assetsurl,

      onMount: this.handleMount.bind(this),
      config: customTldrawConfig,
      overrides: [customOverride],
    };
  }
  ngAfterViewInit(): void {
    this.onWindowResized();
  }
  ngOnDestroy(): void {
    this.appsvc.Dispose();
  }

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
    this.appsvc.SetDarkMode(this.darkmode);
  }

  handleMount(app: App) {
    this.appsvc.app = app;
    app.setGridMode(true);

    app.updateInstanceState({
      isDebugMode: false,
    });

    app.updateUserDocumentSettings({
      isDarkMode: this.darkmode,
      isSnapMode: true,
    });
  }

  @HostListener('window:resize', [])
  public onWindowResized() {
    if (this.topdiv && this.topdiv.nativeElement) {
      const div: HTMLDivElement = this.topdiv.nativeElement;
      if (!!div) {
        const rect = div.getBoundingClientRect();
        const availableheight =
          Math.round(window.innerHeight - rect.bottom) - 1;
        this.tldrawheight.height = `${availableheight}px`;
      }
    }
  }
}
