import { GearIcon } from "@/components/icons";
import { Switch } from "@/components/switch";
import { Input } from "@/components/input";
import { Card } from "@/components/card";

import ExportImport from "./ExportImport";
import classnames from "classnames/bind";
import { SettingsProps } from "./types";
import * as style from "./style.scss";
import React from "react";

import {
  mainCharacterParams,
  hideSpoilersParams,
} from "@/components/supportComponents";

const cx = classnames.bind(style);

function Settings(props: SettingsProps) {
  const [mainCharacterName, setMainCharacterName] = mainCharacterParams();
  const [hideSpoilers, setHideSpoilers] = hideSpoilersParams();
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <GearIcon
        onClick={() => setShow((p) => !p)}
        className={cx("rotate-icon")}
        size="medium"
      />
      <div className={cx("settings-container", { show })}>
        <Card head="Settings" color="primary">
          <div className={cx("input-row")}>
            <label>Character name:</label>
            <Input
              value={mainCharacterName}
              placeholder="Character name"
              onChange={setMainCharacterName}
            />
          </div>
          <div className={cx("input-row")}>
            <label>Hide spoilers:</label>
            <Switch value={hideSpoilers} onChange={setHideSpoilers} />
          </div>
          <ExportImport {...props} />
        </Card>
      </div>
    </div>
  );
}

export default Settings;
