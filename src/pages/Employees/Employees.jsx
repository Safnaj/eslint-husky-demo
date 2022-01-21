import React, { useState, useEffect } from 'react';
import Employee from '../../components/Employee';

function Employees () {
  const [loadData, setLoadData] = useState();
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=10')
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        setNameList((nameList) => responseData.results);
      });
  }, [loadData]);

  return (
		<>
			<div className='container mt-4'>
				{nameList.map((obj) => {
				  return (
						<Employee
							key={obj.email}
							name={obj.name.first}
							city={obj.location.city + ', ' + obj.location.state}
							email={obj.email}
							phone={obj.phone}
							birthday={obj.dob.date}
							avatar={obj.picture.medium}
						/>
				  );
				})}
			</div>
		</>
  );
}

export default Employees;
