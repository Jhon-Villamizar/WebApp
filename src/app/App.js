import React, { Component } from 'react'

class App extends Component {

    constructor() {
        super();

    }



    render() {
        return (
            <div>
                {/**Navigation */}
                <nav className="navbar-expand-lg navbar navbar-dark bg-dark mb-5">
                    <a className="navbar-brand"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="30px" /></a>
                    <a className="navbar-brand"><img src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png" width="30px" /></a>
                    <a className="navbar-brand"><img src="https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png" width="30px" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/**Body */}
                <div className="container">
                    <div className="text-center mb-3">
                        <h1>Web App</h1>
                        <h3>NodeJS, ReactJS & Sass</h3>
                    </div>
                    <div className="row">

                    </div>
                </div>

            </div>
        )
    }
}

export default App;
