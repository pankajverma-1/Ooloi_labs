import React, { useState } from 'react';
import icon from '../images/Arrow.png';
import profile from '../images/modal.jpg';

const Table = ({ data, tableConfig, width }) => {
  //set props to tableData
  const [tableData, setTableData] = useState(data);

  // set ascending and descending Order
  const [order, setOrder] = useState('ASC');

  // sorting function for joiningDate

  const dateCompare = (date1, date2) => {
    var day1 = date1.substr(0, 2);
    var month1 = date1.substr(3, 2);
    var year1 = date1.substr(6, 4);

    var day2 = date2.substr(0, 2);
    var month2 = date2.substr(3, 2);
    var year2 = date2.substr(6, 4);

    // Condition to check the year
    if (year1 < year2) return -1;
    if (year1 > year2) return 1;

    // Condition to check the month
    if (month1 < month2) return -1;
    if (month1 > month2) return 1;

    // Condition to check the day
    if (day1 < day2) return -1;
    if (day1 > day2) return 1;
  };

  // ascending and descending Sorting Function
  const sorting = (path) => {
    if (order === 'ASC') {
      const sorted = [...tableData].sort((a, b) =>
        path === 'name'
          ? a.person[path].toLowerCase() > b.person[path].toLowerCase()
            ? 1
            : -1
          : path === 'joiningDate'
          ? dateCompare(a.joiningDate, b.joiningDate)
          : a[path].toLowerCase() > b[path].toLowerCase()
          ? 1
          : -1
      );
      setTableData(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...tableData].sort((a, b) =>
        path === 'name'
          ? a.person[path].toLowerCase() < b.person[path].toLowerCase()
            ? 1
            : -1
          : path === 'joiningDate'
          ? dateCompare(b.joiningDate, a.joiningDate)
          : a[path].toLowerCase() < b[path].toLowerCase()
          ? 1
          : -1
      );
      setTableData(sorted);
      setOrder('ASC');
    }
  };

  return (
    <>
      <table className="table table-striped my-5 border" style={{ width }}>
        <thead>
          <tr>
            {/* table heading */}
            {tableConfig.map(({ path, name, filter }) => (
              <th scope="col" className=" border" key={path}>
                {name}
                {/* ascending and descending icon */}
                {filter ? (
                  <img
                    style={{ width: '11px', marginLeft: '5px' }}
                    src={icon}
                    alt="icon"
                    onClick={() => sorting(path)}
                  />
                ) : (
                  ''
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, i) => (
            <tr key={i}>
              {tableConfig.map(({ path }) =>
                path === 'name' ? (
                  <td className=" border" key={path}>
                    <img
                      style={{
                        width: '25px',
                        height: '25px',
                        objectFit: 'cover',
                        marginRight: '5px',
                      }}
                      className="rounded-circle"
                      src={profile}
                      alt="icon"
                    />
                    {rowData.person[path]}
                  </td>
                ) : path === 'email' ? (
                  <td
                    className=" border text-primary text-decoration-underline"
                    key={path}
                  >
                    {rowData[path]}
                  </td>
                ) : (
                  <td className=" border" key={path}>
                    {rowData[path]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
