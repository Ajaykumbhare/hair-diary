/** @jsxImportSource @emotion/react */
import { FC, ReactElement, useContext } from 'react';
import Label from "./Label";
import GlobalContext from "../GlobalContext";
import backArrow from "../svg/back.svg";

export const Header: FC = (): ReactElement => {
  const { month } = useContext(GlobalContext);
  return (
    <div css={{
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      background: "white",
    }}>
      <div css={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr 2fr"
      }}>
        <img src={backArrow} alt="backArrow" width="25px" style={{ padding: "5px", marginLeft: "15px" }} />
        <Label fontWeight="bold" value="hair diary" fontSize="25px" />
        <Label fontWeight="bold" value={month + " 2021"} isCamelBold={true} textAlign="right" margin="0 20px 0 0" fontSize="25px" />
      </div >
      <div css={{
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gridTemplateAreas: "holiday workday workday workday workday workday workday",
        padding: "0px 20px 0 20px",
        textAlign: "center",
        fontWeight: "bold",
        fontsize: "12px",
      }}>
        <div className="tile">S</div>
        <div className="tile">M</div>
        <div className="tile">T</div>
        <div className="tile">W</div>
        <div className="tile">T</div>
        <div className="tile">F</div>
        <div className="tile">S</div>
      </div>
    </div >
  )
}