import {
  TLAlignType,
  TLBaseShape,
  TLBoxTool,
  TLColorType,
  TLDashType,
  TLFillType,
  TLFontType,
  TLGeoUtil,
  TLOpacityType,
  TLShapeDef,
  TLSizeType,
  TLUnknownShape,
} from '@tldraw/editor';

import parse from 'html-react-parser';

export type TLStateShapeProps = {
  geo: string;
  labelColor: TLColorType;
  color: TLColorType;
  fill: TLFillType;
  dash: TLDashType;
  size: TLSizeType;
  opacity: TLOpacityType;
  font: TLFontType;
  align: TLAlignType;
  url: string;
  w: number;
  h: number;
  text: string;
  growY: number;
  customdata: any;
};

export type StateShape = TLBaseShape<'state', TLStateShapeProps>;

export class TLStateUtil extends TLGeoUtil {
  static override type = 'state' as const;

  override canResize = (_shape: any) => false;

  override canEdit = () => false;

  static propsForNextShape: any = {
    opacity: '1',
    dash: 'solid',
    size: 'm',
    fill: 'solid',
    color: 'orange',
    labelColor: 'black',
    arrowheadStart: 'dot',
    arrowheadEnd: 'arrow',
    font: 'sans',
    align: 'middle',
    geo: 'rectangle',
    icon: 'geo',
    spline: 'line',
  };

  override onDoubleClick = (shape: any) => {
    console.log('onDoubleClick ', shape);

    this.app.cancelDoubleClick();
    return shape;
  };

  // override onClick = (shape: any) => {
  //   console.log('onClick ', shape);
  // };

  override onBeforeCreate = (shape: any) => {
    shape.props.text = 'State';
    shape.props.w = 150;
    shape.props.h = 80;
    return shape;
  };

  override render = (shape: any) => {
    const parm = btoa(JSON.stringify(shape));
    return parse(`
    <app-customshape shape="${parm}"></app-tlstate>
    `) as JSX.Element;
  };
}

export class StateTool extends TLBoxTool {
  static override id = 'state';
  static override initial = 'idle';
  override shapeType = 'state';
}

export const StateShapeDef: TLShapeDef<StateShape, any> = {
  type: 'state',
  createShapeUtils: (app) => new TLStateUtil(app, 'geo'),
  is: (shape: TLUnknownShape): shape is StateShape => {
    return shape.type === TLStateUtil.type;
  },
  migrations: {
    firstVersion: 0,
    currentVersion: 0,
    migrators: {},
  },
  validator: {
    validate: (shape: any) => {
      return shape;
    },
  },
};
