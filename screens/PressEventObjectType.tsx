//!Press event object Type
//TODO Press event object Type
//*Press event object Type
//?Press event object Type
//@param Press event object Type

/**
 * This is multiline comment
 * Hi There this component is used to demo press event object type
 */

import React from "react";

const PressEventObjectType = () => {
  const extrnalURL = "/components/__tests__/Views/PressEventObjectType.html";

  return (
    <div>
      <a href={extrnalURL}> Click Me for more details...</a>; //TODO Need to use react navigation api

      <div className="markdown">
  <p>
    <code>PressEvent</code> object is returned in the callback as a result of
    user press interaction, for example <code>onPress</code> in
    <a href="/docs/button">Button</a> component.
  </p>
  <h2>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="example" />Example<a className="hash-link" href="#example" title="Direct link to heading">#</a>
  </h2>
  <div className="mdxCodeBlock_1daz">
    <div className="codeBlockContent_2es_">
      <div tabIndex={0} className="prism-code language-js codeBlock_27aQ thin-scrollbar">
        <div className="codeBlockLines_2rCb" style={{color: 'rgb(255, 255, 255)', background: 'rgb(40, 44, 52)'}}>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>{'{'}</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> changedTouches</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>[</span><span className="token maybe-class-name">PressEvent</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>]</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> identifier</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>1</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> locationX</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>8</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> locationY</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>4.5</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> pageX</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>24</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> pageY</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>49.5</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> target</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>1127</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> timestamp</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token number" style={{color: 'rgb(90, 155, 207)'}}>85131876.58868201</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>,</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain"> touches</span><span className="token operator" style={{color: 'rgb(252, 146, 158)'}}>:</span><span className="token plain"> </span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>[</span><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>]</span><span className="token plain" />
          </div>
          <div className="token-line" style={{color: 'rgb(255, 255, 255)', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial'}}>
            <span className="token plain" /><span className="token punctuation" style={{color: 'rgb(101, 123, 131)'}}>{'}'}</span>
          </div>
        </div>
      </div>
      <button type="button" aria-label="Copy code to clipboard" className="copyButton_2bml">
        Copy
      </button>
    </div>
  </div>
  <h2>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="keys-and-values" />Keys and values<a className="hash-link" href="#keys-and-values" title="Direct link to heading">#</a>
  </h2>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="changedtouches" /><code>changedTouches</code><a className="hash-link" href="#changedtouches" title="Direct link to heading">#</a>
  </h3>
  <p>Array of all PressEvents that have changed since the last event.</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>array of PressEvents</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="force-ios" /><code>force</code>
    <div className="label ios">iOS</div>
    <a className="hash-link" href="#force-ios" title="Direct link to heading">#</a>
  </h3>
  <p>
    Amount of force used during the 3D Touch press. Returns the float value in
    range from <code>0.0</code> to <code>1.0</code>.
  </p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>Yes</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="identifier" /><code>identifier</code><a className="hash-link" href="#identifier" title="Direct link to heading">#</a>
  </h3>
  <p>Unique numeric identifier assigned to the event.</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="locationx" /><code>locationX</code><a className="hash-link" href="#locationx" title="Direct link to heading">#</a>
  </h3>
  <p>
    Touch origin X coordinate inside touchable area (relative to the element).
  </p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="locationy" /><code>locationY</code><a className="hash-link" href="#locationy" title="Direct link to heading">#</a>
  </h3>
  <p>
    Touch origin Y coordinate inside touchable area (relative to the element).
  </p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="pagex" /><code>pageX</code><a className="hash-link" href="#pagex" title="Direct link to heading">#</a>
  </h3>
  <p>Touch origin X coordinate on the screen (relative to the root view).</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="pagey" /><code>pageY</code><a className="hash-link" href="#pagey" title="Direct link to heading">#</a>
  </h3>
  <p>Touch origin Y coordinate on the screen (relative to the root view).</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="target" /><code>target</code><a className="hash-link" href="#target" title="Direct link to heading">#</a>
  </h3>
  <p>The node id of the element receiving the PressEvent.</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number, <code>null</code>, <code>undefined</code></td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="timestamp" /><code>timestamp</code><a className="hash-link" href="#timestamp" title="Direct link to heading">#</a>
  </h3>
  <p>
    Timestamp value when a PressEvent occurred. Value is represented in
    milliseconds.
  </p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>number</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h3>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="touches" /><code>touches</code><a className="hash-link" href="#touches" title="Direct link to heading">#</a>
  </h3>
  <p>Array of all current PressEvents on the screen.</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Optional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>array of PressEvents</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>
  <h2>
    <a aria-hidden="true" tabIndex={-1} className="anchor enhancedAnchor_E4oP" id="used-by" />Used by<a className="hash-link" href="#used-by" title="Direct link to heading">#</a>
  </h2>
  <ul>
    <li>
      <a href="/docs/button"><code>Button</code></a>
    </li>
    <li>
      <a href="/docs/panresponder"><code>PanResponder</code></a>
    </li>
    <li>
      <a href="/docs/pressable"><code>Pressable</code></a>
    </li>
    <li>
      <a href="/docs/scrollview"><code>ScrollView</code></a>
    </li>
    <li>
      <a href="/docs/text"><code>Text</code></a>
    </li>
    <li>
      <a href="/docs/textinput"><code>TextInput</code></a>
    </li>
    <li>
      <a href="/docs/touchablenativefeedback"><code>TouchableHighlight</code></a>
    </li>
    <li>
      <a href="/docs/touchablewithoutfeedback"><code>TouchableOpacity</code></a>
    </li>
    <li>
      <a href="/docs/touchablenativefeedback"><code>TouchableNativeFeedback</code></a>
    </li>
    <li>
      <a href="/docs/touchablewithoutfeedback"><code>TouchableWithoutFeedback</code></a>
    </li>
    <li>
      <a href="/docs/view"><code>View</code></a>
    </li>
  </ul>
</div>

    </div>
  );
};
export default PressEventObjectType;
