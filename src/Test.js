import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';

function Test() {

  const [state, setState] = useState({});


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://s3-us-west-1.amazonaws.com/gcodes-ext-logos/dev+test/member.json');
    const data = await response.json();
    console.log(data);
    setState(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Table
          responsive
          bordered
          style={{ border: '3px solid black'}}
        >
          <thead>
            <tr>
              <th className='border-3 text-warning text-bg-danger'>First Name</th>
              <th className='border-3 text-warning text-bg-danger'>Last Name</th>
              <th className='border-3 text-warning text-bg-danger'>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-3 text-bg-success'>{state.first_name}</td>
              <td className='border-3 text-bg-success'>{state.last_name}</td>
              <td className='border-3 text-bg-success'>{state.points}</td>
            </tr>
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default Test;
