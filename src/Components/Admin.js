import React, {useState} from 'react';


const Admin = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = (e) => {
        let url = 'http://172.20.10.2:8787/api/login';
        e.preventDefault();
        console.log(email, password)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.status === false) {
                setError(data.error)
            }
            if (data.status === true) {
                setError('')
                console.log(data.data)//iliyas.mukambet@narxoz.kz
                console.log(data.data.lastName)//iliyas.mukambet@narxoz.kz
                setUser(data.data)
                localStorage.setItem('user', JSON.stringify(data.data))
                // localStorage.setItem('user', data.data)
            }

        })
    }

    return (
        <div className={'ResumePage'}>
            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <form className="card px-1 py-4">
                    <div className="card-body">
                        {error && <div className="alert alert-danger text-center" role="alert">
                            {error} </div>}
                        <div className="row">

                            <div className="col-sm-12">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email" value={email}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="password" className="form-control" placeholder="Password"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button onClick={login} className="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admin