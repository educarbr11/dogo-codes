import * as React from "react";
// eslint-disable-next-line import/no-internal-modules
import css from "./styling/MainPanel.module.scss";

import { MakeCodeFrame } from "./MakecodeFrame";
import { SplitPane } from "./SplitPane";
import { RubricWorkspace } from "./RubricWorkspace";
import { ProjectWorkspace } from "./ProjectWorkspace";

interface IProps {}

export const MainPanel: React.FC<IProps> = () => {
    return (
        <div className={css["main-panel"]}>
            <SplitPane split={"vertical"} defaultSize={"80%"} primary={"left"}>
                {/* Left side */}
                <>
                    <RubricWorkspace />
                </>
                {/* Right side */}
                <>
                    <ProjectWorkspace />
                </>
            </SplitPane>
        </div>
    );
};