/** @jsxImportSource @emotion/react */
import { FC, ReactElement, useContext } from 'react';
import { Tile } from "./Tile";
import { css } from '@emotion/react';
import { getYearCalendar } from "../utilities/date";
import { codes } from "./Tile";
import GlobalContext from "../GlobalContext";

interface IPosts {
  date: [number, number];
  codes: codes[];
  image: string;
  rating: number;
}

const tileContainer = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: "holiday workday workday workday workday workday workday";
  padding: 20px;
  margin-top:60px;
  padding-top:0;
  font-size: calc(8px + (14 - 8) * ((100vw - 300px) / (1600 - 300)));
  @media (min-width:320px){
    img{
      width:60px;
      height:80px;
    }
    .tile{
      min-width:60px;
      min-height:130px;
    }
  }

  @media (min-width:481px){
    img{
      width:80px;
      height:100px;
    }
    .tile{
      min-width:80px;
      min-height:150px;
    }
  }

  @media (min-width:641px){
    img{
      width:100px;
      height:125px;
    }
    .tile{
      min-width:100px;
      min-height:175px;
    }
  }

  @media (min-width:961px){
    img{
      width:125px;
      height:156px;
    }
    .tile{
      min-width:125px;
      min-height:206px;
    }
  }

  @media (min-width:1025px){
    img{
      width:150px;  
      height:187px;
    }
    .tile{
      min-width:150px;  
      min-height:227px;
    }
  }

  @media (min-width:1281px){
    img{
      width:175px;
      height:218px;
    }
    .tile{
      min-width:175px;
      min-height:268px;
    }
  }
`

export const Tiles: FC = (): ReactElement => {
  const dateData = getYearCalendar(2021);
  const { posts } = useContext(GlobalContext);

  const months: string[] = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  interface IPost {
    media: {
      mediaurl: string;
    }[];
    rating: number;
    typeofday: string[];
    calendardatetime: string;
  }

  const p: IPosts[] = posts.posts.map((x: IPost) => ({
    date: [new Date(x.calendardatetime).getDate(), new Date(x.calendardatetime).getMonth()],
    codes: x.typeofday.map(x => x === "deep conditioning" ? "DC" : x === "hair cut" ? "CU" : x === "protein treatment" ? "PR" : "C"),
    image: x.media[0].mediaurl,
    rating: x.rating,
  }))

  console.log(dateData);

  return (
    <div css={tileContainer}>
      {
        dateData.map((m, monthIndex) => m.map((day: any, i: number) => <Tile key={i} {...p.find(x => x.date[0] === i + 1 && x.date[1] === monthIndex)} month={months[monthIndex]} date={i + 1} day={day[i + 1]} />))
      }
    </div >
  )
}