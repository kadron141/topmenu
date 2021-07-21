import * as React from "react";
import { IMenuItem, ITopMenuProps, ITopMenuStyles } from "./TopMenuTypes";

const styles: ITopMenuStyles = {
  menuWrapper: {
    outline: "1px solid gray",
    width: "20vw",
  },
  menuItemWrapper: {
    margin: "0.5vw",
    cursor: "pointer",
  },
  menuItemSelected: {
    outline: "1px solid gray",
  },
  subItemsWrapper: {
    marginLeft: "1vw",
    display: "flex",
    flexDirection: "column",
  },
};

export function TopMenu(props: ITopMenuProps): JSX.Element {
  const { position = "fixed", classNames = {} } = props;
  const [value, setValue] = React.useState<number>();

  React.useEffect(() => {
    setValue(props.value);
  }, [props]);

  const isSelected = (id: number) => {
    return value === id;
  };

  const onSelect = (id: number) => {
    setValue(id);
    props.onSelect(id);
  };

  const onFocusOut = () => {
    setValue(undefined);
  };

  const subItemsOption = (menuItem: IMenuItem) => {
    return (
      <div>
        <span style={classNames.menuItemSelected ?? styles.menuItemSelected}>
          {menuItem.name}
        </span>
        <div style={classNames.subItemsWrapper ?? styles.subItemsWrapper}>
          {menuItem.subItems &&
            menuItem.subItems.map((subItem) => {
              return <span key={subItem.id}>{subItem.name}</span>;
            })}
        </div>
      </div>
    );
  };

  return (
    <div
      tabIndex={0}
      onBlur={onFocusOut}
      style={{
        ...(classNames.menuWrapper ?? styles.menuWrapper),
        position: position,
      }}
    >
      {props.menuData.length &&
        props.menuData.map((menuItem) => {
          return (
            <div
              key={menuItem.id}
              style={classNames.menuItemWrapper ?? styles.menuItemWrapper}
              onClick={() => onSelect(menuItem.id)}
            >
              {isSelected(menuItem.id)
                ? subItemsOption(menuItem)
                : menuItem.name}
            </div>
          );
        })}
    </div>
  );
}
