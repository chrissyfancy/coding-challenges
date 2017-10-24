import React from 'react';

const CompanyInformation = props => {
  return(
    <div>
      <h4>Company Information</h4>
      <div>Name: {props.company.name}</div>
      <div>Slogan: {props.company.catchPhrase}</div>
      <div>BS: {props.company.bs}</div>
    </div>
  )
}

export default CompanyInformation;
