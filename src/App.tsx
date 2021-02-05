import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { Tiles } from "./Components/Tiles";
import GlobalContext from "./GlobalContext";
import { fetchData } from "./fetch"

function App() {
  const [month, setMonth] = useState("Jan")
  const [posts, setPosts] = useState({
    "posts": []
  });

  useEffect(() => {
    const reqObject = {
      "requestobjects": [
        {
          "posts": {
            "operationtype": "read",
            "id": {
              "return": true
            },
            "userid": {
              "searchvalues": ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
              "return": true
            },
            "iscalendarentry": {
              "searchvalues": ["true"],
              "return": true
            },
            "media": {
              "return": true
            },
            "rating": {
              "return": true
            },
            "text": {
              "return": true
            },
            "privacy": {
              "searchvalues": [
                18
              ],
              "return": true
            },
            "typeofday": {
              "return": true
            },
            "calendardatetime": {
              "return": true,
              "sort": "descending"
            },
            "maxitemcount": "50",
            "continuationtoken": null
          }
        }
      ]
    }
    fetchData(`https://devapi.quinn.care/graph`, "POST", JSON.stringify(reqObject))
      .then((res) => res.responseobjects?.length > 0 && setPosts({
        posts: res.responseobjects[0].posts
      }))
  }, [])


  const changeMonth = (m: string) => setMonth(m);

  return (
    <GlobalContext.Provider value={{ month, changeMonth, posts }}>
      <div className="App">
        <Header />
        <Tiles />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
