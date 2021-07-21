/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import React, { useEffect, useState } from "react";
import { TopMenu } from "../../common/components/TopMenu/TopMenu";
import {
  IMenuItem,
  ITopMenuStyles,
} from "../../common/components/TopMenu/TopMenuTypes";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

const API_URL = "http://www.mocky.io/v2/5d3fec2b33000062009d27bc";

export default function Home(props: Props): JSX.Element {
  const [menuData, setMenuData] = useState<IMenuItem[]>([]);

  //test object for styling TopMenu
  const customStyles: ITopMenuStyles = {
    menuWrapper: {
      outline: "1px solid red",
      width: "40vw",
    },
    menuItemWrapper: {
      margin: "1vw",
      cursor: "pointer",
    },
    menuItemSelected: {
      outline: "1px solid red",
    },
    subItemsWrapper: {
      marginLeft: "3vw",
      display: "flex",
      flexDirection: "column",
    },
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((menuItems: IMenuItem[]) => {
        setMenuData(menuItems);
      });
  }, []);

  const onSelect = (id: number) => {
    console.log(id);
  };

  return <TopMenu menuData={menuData} onSelect={onSelect} />;
}
