/** @jsxImportSource @emotion/react */
import { FC, ReactElement, useContext } from 'react';
import { css } from '@emotion/react';
import GlobalContext from "../GlobalContext";

export type codes = "CU" | "PR" | "HC" | "DC" | "C";

interface ITileProps {
  day: number;
  date: number;
  month: string;
  image?: string;
  rating?: number;
  codes?: codes[];
}

const tileStyle = css`
  text-align:center;
  div:last-child{
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  border: 1px solid gray;
  padding:10px;
`

const ratingStyle = css`
  &::before{
    content: "★";
    color: #8dc4f7;
  }
`

const grayRatingStyle = css`
  &::before{
    content: "★";
    color: gray;
  }
`

const pinkBG = css`
  background: #F4DFEB;
  border-radius: 50%;
  padding: calc(1px + (5 - 1) * ((100vw - 300px) / (1600 - 300)));
`
const creamBG = css`
  background: #FBE4E4;
  border-radius: 50%;
  padding: calc(1px + (5 - 1) * ((100vw - 300px) / (1600 - 300)));
`
const skyBG = css`
  background: #DDEDEA;
  border-radius: 50%;
  padding: calc(1px + (5 - 1) * ((100vw - 300px) / (1600 - 300)));
`
export const Tile: FC<ITileProps> = (props: ITileProps): ReactElement => {
  const { changeMonth } = useContext(GlobalContext);
  const isFirstTile = props.date === 1 && props.month === "Jan";
  let extraTiles = 0;
  if (isFirstTile) {
    extraTiles = Number(props.day);
  }

  const tileElement = (<div className="tile" css={tileStyle} style={props.day === 0 ? { background: "#F4F2F4" } : { background: "white" }} onWheel={() => changeMonth(props.month)} onMouseEnter={() => changeMonth(props.month)} onTouchMove={() => changeMonth(props.month)} >
    <div style={props.month && props.date === 1 ? { fontSize: "calc(12px + (24 - 12) * ((100vw - 300px) / (1600 - 300)))", fontWeight: 'bold' } : { fontWeight: 'bold' }} >
      <span>
        {props.date}
      </span>
      <span style={{ marginLeft: "5px" }}>
        {props.date === 1 ? props.month : ""}
      </span>
    </div>
    {
      props?.rating && (<div className="rating">
        <span css={1 <= props?.rating ? ratingStyle : grayRatingStyle} />
        <span css={2 <= props?.rating ? ratingStyle : grayRatingStyle} />
        <span css={3 <= props?.rating ? ratingStyle : grayRatingStyle} />
        <span css={4 <= props?.rating ? ratingStyle : grayRatingStyle} />
        <span css={5 <= props?.rating ? ratingStyle : grayRatingStyle} />
      </div>)
    }

    <div>
      {props.image ? <img src={props.image} alt="img" /> : ""}
    </div>
    <div>
      {props.codes?.map((x, i) => (<div key={i} css={(x === "CU" || x === "HC") ? pinkBG : x === "C" ? creamBG : skyBG}>
        <span>{x}</span>
      </div>))}
    </div>
  </div >)

  return (
    <>
      {isFirstTile ? [...Array(extraTiles + 1).keys()].map((_, i) =>
        31 - [...Array(extraTiles).keys()].length + i + 1 !== 32 ?
          (
            <div className="tile" css={tileStyle} style={i === 0 ? { background: "#F4F2F4" } : { background: "white" }} onWheel={() => changeMonth(props.month)} onMouseEnter={() => changeMonth(props.month)} onTouchMove={() => changeMonth(props.month)} >
              <div style={{ fontWeight: 'bold' }} >
                <span>
                  {31 - [...Array(extraTiles).keys()].length + i + 1}
                </span>
              </div>
            </div >

          ) : tileElement) : tileElement
      }
    </>

  )
};