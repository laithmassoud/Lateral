import React from "react";
import Cards from "./components/Cards/Cards";
import Search from './components/Search/Search'
import "./App.scss";
const API_KEY = process.env.REACT_APP_API_KEY;

function useAsyncHook(url) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState("false");

  React.useEffect(
    () => {
      async function fetchDate() {
        try {
          setLoading("true");
          const response = await fetch(
            `https://document-parser-api.lateral.io/?url=${url}`,
            {
              headers: {
                "content-type": "application/json",
                "subscription-key": API_KEY,
              },
            }
          );
          const json = await response.json();

          const responseBody = json.body;

          const responseSimilarArticle = await fetch(
            "https://news-api.lateral.io/documents/similar-to-text",
            {
              body: `{"text": ${JSON.stringify(responseBody)}}`,
              headers: {
                "content-type": "application/json",
                "subscription-key": API_KEY,
              },

              method: "POST",
              mode: "cors",
            }
          );
          const SimilerArticleJson = await responseSimilarArticle.json();

          setResult(SimilerArticleJson);

        } catch (error) {
          setLoading("null");
        }
      }

      if (url !== "") {
        fetchDate();
      }
    },
    [url]
  );

  return [result, loading];
}

function App() {
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [result, loading] = useAsyncHook(query);
  return (
    <div className="App">
      <h1>Lateral</h1>
      <h2>enter an URL in the input field </h2>

    <Search
      onSubmit={e => {
        e.preventDefault();
        setQuery(search);
      }}
      onChange={e => setSearch(e.target.value)}
    />
    {loading === "false"
      ? <h1>Search for Similar Articles</h1>
      : loading === "null"
        ? <h1>No result Found, try with another URL</h1>
        : <Cards result={result} />}
  </div>
  );
}
export default App;
