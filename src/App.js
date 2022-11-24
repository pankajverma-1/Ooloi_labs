import './App.css';
import Table from './components/Table';
import tableTestData from './tableTestData.json';
import profile from './images/modal.jpg';
function App() {
  const firstTableConfig = [
    { path: 'name', name: 'Name', filter: true },
    { path: 'city', name: 'City', filter: true },
    { path: 'email', name: 'Email Address', filter: true },
    { path: 'joiningDate', name: 'Joining Date', filter: true },
    { path: 'role', name: 'Role', filter: true },
  ];
  const secondTableConfig = [
    { path: 'name', name: 'Name', filter: true },
    { path: 'email', name: 'Email Address', filter: false },
    { path: 'role', name: 'Role', filter: false },
  ];
  const thirdTableConfig = [
    { path: 'email', name: 'Email Address', filter: false },
    { path: 'joiningDate', name: 'Joining Date', filter: true },
    { path: 'role', name: 'Role', filter: true },
  ];

  const fourthTableConfig = [
    { path: 'name', name: 'Name', filter: false },
    { path: 'city', name: 'City', filter: true },
    { path: 'joiningDate', name: 'Joining Date', filter: false },
    { path: 'role', name: 'Role', filter: true },
  ];

  return (
    <div style={{ margin: '85px 96px' }} className="customFont">
      <Table
        width={'920px'}
        data={tableTestData}
        tableConfig={firstTableConfig}
      />
      <Table
        width={'570px'}
        data={tableTestData}
        tableConfig={secondTableConfig}
      />
      <Table
        width={'570px'}
        data={tableTestData}
        tableConfig={thirdTableConfig}
      />
      <Table
        width={'700px'}
        data={tableTestData}
        tableConfig={fourthTableConfig}
      />

      <div
        style={{
          fontWeight: 700,
          fontSize: '20px',
        }}
      >
        Download asset:
      </div>
      <img
        style={{
          width: '25px',
          height: '25px',
          objectFit: 'cover',
          marginRight: '5px',
          marginTop: '10px',
        }}
        className="rounded-circle"
        src={profile}
        alt="icon"
      />
    </div>
  );
}

export default App;
