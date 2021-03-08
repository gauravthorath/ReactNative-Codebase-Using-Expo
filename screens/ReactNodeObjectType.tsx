import React from "react";
import { View } from "../components/Themed";

export const ReactNodeObjectType = () => {
  return (
    <View>
      <header>
        <h1 className="docTitle_cWlf">React Node Object Type</h1>
      </header>
      <div className="markdown">
        <p>A React Node is one of the following types:</p>
        <ul>
          <li>Boolean (which is ignored)</li>
          <li>
            <code>null</code> or <code>undefined</code> (which is ignored)
          </li>
          <li>Number</li>
          <li>String</li>
          <li>A React element (result of JSX)</li>
          <li>An array of any of the above, possibly a nested one</li>
        </ul>
      </div>

      <div>
        ------------------------------------------------------------------------
      </div>
      <div>For more details refer react official web site </div>
      <a href="https://reactnative.dev/docs/react-node">
        https://reactnative.dev/docs/react-node
      </a>
    </View>
  );
};
