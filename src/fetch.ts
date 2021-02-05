interface IFetch {
  method: "POST"|"GET";
  body?: string;
}

export const fetchData = async (url: string, method: "GET" | "POST", payload?: string) => {
  const args: IFetch = {
    method: method,
  }

  if (payload)
    args['body'] = payload;

  return fetch(url, {
    ...args,
    headers: {
      "Content-Type": "application/json"
    },
  }).then((res) => res.json())
}