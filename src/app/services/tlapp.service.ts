import { Injectable } from '@angular/core';
import { App } from '@tldraw/tldraw';

@Injectable({
  providedIn: 'root',
})
export class TlappService {
  public app!: App;

  constructor() {}

  public Dispose() {
    this.app?.dispose();
  }

  public SetDarkMode(darkmode: boolean) {
    this.app?.setDarkMode(darkmode);
  }

  public addState(shape: any) {
    const startshape = this.app?.getShapeById(shape.id);
    if (!startshape) return;
    const newshape = JSON.parse(JSON.stringify(startshape));
    newshape.id = this.app?.createShapeId();
    newshape.y = startshape.y + 150;

    let arrow = {
      id: this.app?.createShapeId(),
      type: 'arrow',
      x: startshape.x,
      y: startshape.y,
      props: {
        start: {
          type: 'binding',
          isExact: false,
          normalizedAnchor: { x: 0.5, y: 0.5 }, // center!
          boundShapeId: shape.id,
        },
        end: {
          type: 'binding',
          isExact: false,
          normalizedAnchor: { x: 0.5, y: 0.5 }, // center!
          boundShapeId: newshape.id,
        },
      },
    };

    this.app?.createShapes([newshape, arrow]);
  }

  public hasBoundStartArrow(shape: any) {
    if (!shape) return false;
    const arrows = this.app?.getArrowsBoundTo(shape.id);
    if (!arrows) return false;
    const arrow = arrows.find((x) => x.handleId === 'start');
    return arrow !== undefined;
  }
}
