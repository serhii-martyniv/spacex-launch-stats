import React from 'react';

function MissionKey(props) {
    console.log(props.launches);
    return (
        <div className="my-3">
            <p>
                <span className="px-3 mr-2 bg-success"/> = Success
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger"/> = Fail
            </p>

            <p>Total of launches: {props.launches.length}</p>
        </div>
    );
}

export default MissionKey;