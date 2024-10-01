import { mainCharacterParams } from "@/components/supportComponents";
import { GearIcon } from "@/components/icons";
import { Input } from "@/components/input";
import { Card } from "@/components/card";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

function Settings() {
  const [mainCharacterName, setMainCharacterName] = mainCharacterParams();
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <GearIcon size="medium" onClick={() => setShow((p) => !p)} />
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
        </Card>
      </div>
    </div>
  );
}

export default Settings;
