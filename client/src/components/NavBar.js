import {Link} from 'react-router-dom'


function NavBar() {
    return(
      <nav className="navbar navbar-expand-lg sticky-top navbar-light" style={{ background: '#e3f2fd' }}>
      <div className="container">
          <div className="row w-100 align-items-center">
              <div className="col-6 col-md-auto"> {/* Use 'col-6' for small screens and 'col-md-auto' for medium screens */}
                  <Link className="navbar-brand fs-4" to="/">Food Tracker</Link>
              </div>
              <div className="col-6 col-md-auto text-end"> {/* Align content to right on small screens and center on medium screens */}
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              </div>
              <div className="col-md"> {/* Empty column to push the links to the right on medium screens */}
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end"> {/* Align links to right */}
                          <li className="nav-item mx-3">
                              <Link className="nav-link fs-5" to="/">Home</Link>
                          </li>
                          <li className="nav-item mx-3">
                              <Link className="nav-link fs-5" to="/addfood">Add Food Item</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </nav>
    )
}


export default NavBar