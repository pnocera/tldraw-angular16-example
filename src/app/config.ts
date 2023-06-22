import { TldrawEditorConfig, App } from '@tldraw/editor';
import {
  TldrawUiOverrides,
  toolbarItem,
  MenuGroup,
  menuItem,
} from '@tldraw/ui';

import {
  StateShapeDef,
  StateTool,
  TLStateUtil as SU,
} from './components/customshape/customshape';

// Collect the custom tools and shapes into a config object
export const customTldrawConfig = new TldrawEditorConfig({
  tools: [StateTool],
  shapes: [StateShapeDef],
  allowUnknownShapes: true,
});

export const customOverride: TldrawUiOverrides = {
  tools(app: App, tools) {
    // In order for our custom tool to show up in the UI...
    // We need to add it to the tools list. This "toolItem"
    // has information about its icon, label, keyboard shortcut,
    // and what to do when it's selected.
    tools[SU.type] = {
      id: SU.type,
      icon: 'geo-rectangle',
      label: 'State' as any,
      kbd: 's',
      readonlyOk: false,
      onSelect: () => {
        app.updateInstanceState({
          propsForNextShape: SU.propsForNextShape,
        });
        app.setSelectedTool(SU.type);
      },
    };

    return tools;
  },
  toolbar(app, toolbar, { tools }) {
    // The toolbar is an array of items. We can add it to the
    // end of the array or splice it in, then return the array.
    toolbar.splice(4, 0, toolbarItem(tools[SU.type]));
    return toolbar;
  },
  keyboardShortcutsMenu(app, keyboardShortcutsMenu, { tools }) {
    // Same for the keyboard shortcuts menu, but this menu contains
    // both items and groups. We want to find the "Tools" group and
    // add it to that before returning the array.
    const toolsGroup = keyboardShortcutsMenu.find(
      (group) => group.id === 'shortcuts-dialog.tools'
    ) as MenuGroup;
    toolsGroup.children.push(menuItem(tools[SU.type]));
    return keyboardShortcutsMenu;
  },
};
