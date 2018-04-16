import React from 'react';

function ShowLoans(props) {

  return <div>
    <div className="row">
        <div className="col-md">
           {props.loan.id}
        </div>
        <div className="col-md">
           {props.loan.mini_balance}
        </div>
        <div className="col-md">
           {props.loan.colletaral}
        </div>
        <div className="col-md">
           {props.loan.requestedloan_id.id}
        </div>
        <div className="col-md">
           {props.loan.user_id.name}
        </div>
    </div>
  </div>;

}


export default function ApprovedLoans(props) {

  let loanList = _.map(props.loans, (nn) => <ShowLoans key={nn.id} loan={nn} />);

  return <div>
    <div className="row">
        <div className="col-md">
           Loan ID
        </div>
        <div className="col-md">
           Minimum Balance
        </div>
        <div className="col-md">
           Colletaral
        </div>
        <div className="col-md">
           Application Number
        </div>
        <div className="col-md">
           User ID
        </div>
    </div>
    { loanList }
    </div>;


}
