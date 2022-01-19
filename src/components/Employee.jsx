import React from 'react'

function Employee(props) {
    return (
        <div>
            <div className='employee row align-items-center shadow py-3 my-4'>
                <div className='col-2'>
                    <img
                        className='border rounded-circle'
                        src={props.avatar}
                        alt={props.name}
                        height='120'
                    ></img>
                </div>
                
                <div className='col-10'>
                    <h3>{props.name}</h3>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='my-2'><i className="fa fa-map-marker">&nbsp;</i>{props.city}</p>
                            <p className='my-2'><i className="fa fa-birthday-cake">&nbsp;</i>{new Intl.DateTimeFormat("en-GN").format(new Date(props.birthday))}</p>
                        </div>
                        <div className='col-6'>
                            <p className='my-2'><i className="fa fa-envelope">&nbsp;</i>{props.email}</p>
                            <p className='my-2'><i className="fa fa-phone">&nbsp;</i>{props.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee
