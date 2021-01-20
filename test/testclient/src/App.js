import React from 'react';
import websiteDatabase from './data/website';
import MyDatabase from './data/mydata';

function App() {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  React.useEffect(() => {
    const results = websiteDatabase.filter((website) =>
      website.toLowerCase().includes(searchInput)
    );
    setSearchResults(results);
  }, [searchInput]);

  const [searchMyInput, setSearchMyInput] = React.useState('');
  const [searchMyResults, setSearchMyResults] = React.useState([]);
  const MyhandleChange = (event) => {
    setSearchMyInput(event.target.value);
  };
  React.useEffect(() => {
    const results = MyDatabase.filter((mywebsite) =>
      mywebsite.toLowerCase().includes(searchMyInput)
    );
    setSearchMyResults(results);
  }, [searchMyInput]);

  return (
    <div
      className="App"
      style={{
        margin: '1em',
      }}
    >
      <form>
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{ background: 'lightblue', marginBottom: '1em' }}
            >
              <div className="card-body">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={handleChange}
                ></input>
                {searchInput.length === 0 ? (
                  <div>
                    <br />
                    <h4>A mini browser to search website name</h4>
                  </div>
                ) : (
                  <ol>
                    {searchResults.map((item) => (
                      <li key={item}>
                        <a href={'https://' + item}>{item}</a>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ background: 'lightpink', marginBottom: '1em' }}
            >
              <div className="card-body">
                <input
                  className="form-control"
                  type="text"
                  placeholder="My Search..."
                  value={searchMyInput}
                  onChange={MyhandleChange}
                ></input>
                <div>
                  <br />
                  <h4>A mini browser to search my created website name</h4>
                </div>
                <ol>
                  {searchMyResults.map((myitem) => (
                    <li key={myitem}>
                      <a href={'https://' + myitem}>{myitem}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
