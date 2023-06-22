import { Component, OnDestroy } from '@angular/core';
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
export class AppComponent implements OnDestroy {
  Tldraw = Tldraw;
  props!: ComponentProps<typeof Tldraw>;

  darkmode = false;

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
}
