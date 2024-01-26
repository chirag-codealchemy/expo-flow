import * as React from "react";
import Svg, { SvgProps, G, Path, Text } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={1} {...props}>
    <G
      className="blocklyDraggable"
      data-category="motion"
      data-id="motion_movesteps"
      data-shapes="stack"
    >
      <Path
        fill="#4C97FF"
        stroke="#3373CC"
        d="M12 68a4 4 0 0 1 4-4h8c2 0 3 1 4 2l4 4c1 1 2 2 4 2h12c2 0 3-1 4-2l4-4c1-1 2-2 4-2h101.25a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H60c-2 0-3 1-4 2l-4 4c-1 1-2 2-4 2H36c-2 0-3-1-4-2l-4-4c-1-1-2-2-4-2h-8a4 4 0 0 1-4-4z"
        className="blocklyPath blocklyBlockBackground"
      />
      <G
        data-argument-type="text number"
        data-id="{a(QKqO[H^g4O;[+oZ*6"
        data-shapes="argument round"
      >
        <Path
          fill="#FFF"
          stroke="#3373CC"
          d="M84.625 72h8a16 16 0 0 1 0 32h-8a16 16 0 0 1 0-32z"
          className="blocklyPath blocklyBlockBackground"
        />
        <G
          className="blocklyEditableText"
          style={{
            cursor: "text",
          }}
        >
          <Text
            x={12}
            y={18}
            className="blocklyText"
            dominantBaseline="middle"
            dy={0}
            textAnchor="middle"
            transform="translate(76.625 72)"
          >
            {"10"}
          </Text>
        </G>
      </G>
      <Text
        x={20.313}
        y={2}
        className="blocklyText"
        dominantBaseline="middle"
        dy={0}
        textAnchor="middle"
        transform="translate(20 88)"
      >
        {"move"}
      </Text>
      <Text
        x={20.313}
        y={2}
        className="blocklyText"
        dominantBaseline="middle"
        dy={0}
        textAnchor="middle"
        transform="translate(116.625 88)"
      >
        {"steps"}
      </Text>
    </G>
  </Svg>
);
export default SvgComponent;
