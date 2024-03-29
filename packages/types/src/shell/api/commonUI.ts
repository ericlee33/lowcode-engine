import React, { ReactElement } from 'react';
import { IPublicTypeContextMenuAction, IPublicTypeHelpTipConfig, IPublicTypeTipConfig, IPublicTypeTitleContent } from '../type';
import { Balloon, Breadcrumb, Button, Card, Checkbox, DatePicker, Dialog, Dropdown, Form, Icon, Input, Loading, Message, Overlay, Pagination, Radio, Search, Select, SplitButton, Step, Switch, Tab, Table, Tree, TreeSelect, Upload, Divider } from '@alifd/next';
import { IconProps } from '@alifd/next/types/icon';

export interface IPublicApiCommonUI {
  Balloon: typeof Balloon;
  Breadcrumb: typeof Breadcrumb;
  Button: typeof Button;
  Card: typeof Card;
  Checkbox: typeof Checkbox;
  DatePicker: typeof DatePicker;
  Dialog: typeof Dialog;
  Dropdown: typeof Dropdown;
  Form: typeof Form;
  Icon: typeof Icon;
  Input: typeof Input;
  Loading: typeof Loading;
  Message: typeof Message;
  Overlay: typeof Overlay;
  Pagination: typeof Pagination;
  Radio: typeof Radio;
  Search: typeof Search;
  Select: typeof Select;
  SplitButton: typeof SplitButton;
  Step: typeof Step;
  Switch: typeof Switch;
  Tab: typeof Tab;
  Table: typeof Table;
  Tree: typeof Tree;
  TreeSelect: typeof TreeSelect;
  Upload: typeof Upload;
  Divider: typeof Divider;

  /**
   * Title 组件
   */
  get Tip(): React.ComponentClass<IPublicTypeTipConfig>;

  /**
   * HelpTip 组件
   */
  get HelpTip(): React.VFC<{
    help: IPublicTypeHelpTipConfig;

    /**
     * 方向
     * @default 'top'
     */
    direction: IPublicTypeTipConfig['direction'];

    /**
     * 大小
     * @default 'small'
     */
    size: IconProps['size'];
  }>;

  /**
   * Tip 组件
   */
  get Title(): React.ComponentClass<{
    title: IPublicTypeTitleContent | undefined;
    match?: boolean;
    keywords?: string | null;
  }>;

  get ContextMenu(): ((props: {
    menus: IPublicTypeContextMenuAction[];
    children: React.ReactElement[] | React.ReactElement;
  }) => ReactElement) & {
    create(menus: IPublicTypeContextMenuAction[], event: MouseEvent | React.MouseEvent): void;
  };
}
