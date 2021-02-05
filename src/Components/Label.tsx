/** @jsxImportSource @emotion/react */
import { FC, ReactElement } from 'react';

interface ILabelProps {
  color?: string;
  value: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  isCamelBold?: boolean;
  textAlign?: "left" | "center" | "right";
}

const Label: FC<ILabelProps> = (children: ILabelProps): ReactElement => {
  const styleProps = (Object.keys(children) as Array<keyof typeof children>).filter(x => x !== "value" && x !== "isCamelBold");

  const titleStyle = styleProps.map(props => ({
    [props]: children[props]
  }))

  const parentStyles = styleProps.filter(p => p === "textAlign" || p === "margin" || p === "padding" || p === "fontSize").map(props => ({
    [props]: children[props]
  }))

  return (
    <div css={parentStyles}>
      {children.isCamelBold ? (children.value.split(" ").map((s: string, i: number) => <span css={{ ...titleStyle, fontWeight: i % 2 === 0 ? "bold" : "normal" }}>{s + " "}</span>)) : <span css={titleStyle}>{children.value}</span>}
    </div >
  )
}

export default Label;