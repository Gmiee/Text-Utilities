import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> {props.title} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="https://github.com/Gmiee" target='_blank'>Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://bio.link/jimmyyy" target='_blank'>Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/" target='_blank'>LinkedIN</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/EmailExtractor" >Email Extractor</a>
        </li> */}
      </ul>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"  /> 

  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
    </div>
</div>
  </div>
</nav>
    </div>
  )
}

export default Navbar