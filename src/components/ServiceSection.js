import React from 'react'

export default ({ title, values }) => {
  let content = 'Coming soon.';
  if (Object.values(values).length > 0) {
    content = Object.keys(values).map(val => (
      <a href={values[val]} target="_blank" rel="noopener noreferrer">{val}</a>
    ));
  }

  return (
    <div className="container">
      <h2 className="header">{title}</h2>
      { content }
    </div>
  );
};
