import {
  Panel,
  PanelBody,
  PanelRow,
  Notice,
  ResizableBox,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

import { registerSettingsPanel } from "/node_modules/wordpress-modern-settings-api/src/index.js";

const SettingsExample = () => {
  return (
    <>
      <Notice>This is a notice.</Notice>
      <Panel header="My panel">
        <Fragment key=".0">
          <PanelBody title="First section">
            <PanelRow>
              <div
                style={{
                  background: "#ddd",
                  height: 400,
                  width: "100%",
                }}
              >
                <ResizableBox
                  onResizeStop={function noRefCheck() {}}
                  size={{
                    height: 200,
                    width: 400,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      background: "#eee",
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    Resize
                  </div>
                </ResizableBox>
              </div>
            </PanelRow>
          </PanelBody>
          <PanelBody title="Second section">
            <PanelRow>
              <div
                style={{
                  background: "#ddd",
                  height: 100,
                  width: "100%",
                }}
              />
            </PanelRow>
          </PanelBody>
        </Fragment>
      </Panel>
    </>
  );
};

registerSettingsPanel(<SettingsExample />);
