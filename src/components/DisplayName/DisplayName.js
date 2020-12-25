import React, {useState, useEffect} from 'react';
import './DisplayName.css';

function DisplayName() {
  const [name, setName] = useState({firstName: 'name', lastName: 'surname'});
  const [title, setTitle] = useState('');

  useEffect(() => {
    setName({firstName: 'Ashish', lastName: 'Sheelavantar'})
    setTitle("Listing repository information page")
  },[setName, setTitle]);

  return (
    <div className="App">
      <h1>Title: {title}</h1>
      <h3>By: {name.firstName} {name.lastName}</h3>
    </div>
  );
}

export default DisplayName;
