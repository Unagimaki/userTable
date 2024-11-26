import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { transformObjectToArray } from './helpers/transformObjectToArray';
import { TableItem } from './components/TableItem/TableItem';

function App() {
  const url = 'https://moneytree.extensi.one/api/analytics/getUTManalytics'
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(transformObjectToArray(res.data.utmMarks));         
      })
      .catch(err => {
        console.error('Ошибка при загрузке данных:', err);
      });
  }, []);

  return (
    <div className="App">
      <div className="table_header">
        <div>UTM mark</div>
        <div>users count</div>
        <div>Задание</div>
        <div>Count</div>
      </div>
      <div className="table_wrapper">
      {
        data &&
        data.map(item => {
          console.log(item)
          
          return <TableItem
            utm={item.utm}
            usersCount={item.usersCount}
            taskCount={item.tasksCompletionsCount}
          />
        })
      }
      </div>

    </div>
  );
}

export default App;
