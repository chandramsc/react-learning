import React from 'react';

const EditDashboardPage = (props) => {
    console.log(props);
    return (
        <div>
            Editting the expense with id of {props.match.params.id}
        </div>
    );
}

export default EditDashboardPage;