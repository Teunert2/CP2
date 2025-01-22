  };

  return (
    <div className="header-container" {...storyblokEditable(blok)}>
      <div className="header-content">
        {/* Logo */}
        <img
          className="logo"
          src={blok.logo.filename}
          alt={blok.logo.alt || "Logo"}
        />
    
            {/* Navigation */}
        <nav className={`navigation ${menuOpen ? "menu-open" : ""}`}>
          <ul className="navigation-list">
            {/* About Us */}
            <li>
              <a href="/about-us" className="nav-link">
                {blok.heads}
              </a>
            </li>
     {/* Services Dropdown */}
            <li className="dropdown">
              <a href="#" className="nav-link">
                Services
              </a>
              <div className="dropdown-menu">
                <a href="/service-1" className="dropdown-item">
                  Service 1
                </a>
                <a href="/service-2" className="dropdown-item">
                  Service 2
                </a>
                <a href="/service-3" className="dropdown-item">
                  Service 3
                </a>
              </div>
            </li>