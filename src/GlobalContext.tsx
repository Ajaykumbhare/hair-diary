
import React from 'react';

const initialState = {
  month: "Jan",
  posts: {
    "posts": []
  },
  changeMonth: (month: string) => { }
}

const GlobalContext = React.createContext(initialState);

export default GlobalContext;