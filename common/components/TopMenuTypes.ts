export interface IMenuItem {
  id: number;
  name: string;
  subItems?: [
    {
      id: number;
      name: string;
    }
  ];
}

export interface ITopMenuStyles {
  menuWrapper?: React.CSSProperties;
  menuItemWrapper?: React.CSSProperties;
  menuItemSelected?: React.CSSProperties;
  subItemsWrapper?: React.CSSProperties;
}

export interface ITopMenuProps {
  menuData: IMenuItem[];
  classNames?: ITopMenuStyles;
  value?: number;
  position?: "fixed" | "absolute" | "relative" | "static";
  onSelect: (id: number) => void;
}
