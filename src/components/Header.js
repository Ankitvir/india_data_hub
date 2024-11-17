import React, { useState } from 'react';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Query:', searchQuery);
        // Implement search functionality here
    };

    return (
        <header style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#000000' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    style={{ padding: '8px', width: '200px' }}
                />
                <button type="submit" style={{ marginLeft: '5px', padding: '8px' }}>
                    Search
                </button>
            </form>
            
            {/* Menu */}
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0, }}>
                    <li><a href="/home" style={{ textDecoration: 'none', color: '#fff' }}>Home</a></li>
                    <li><a href="/about" style={{ textDecoration: 'none', color: '#fff' }}>About</a></li>
                    <li><a href="/contact" style={{ textDecoration: 'none', color: '#fff' }}>Contact</a></li>
                    <li>  <button onClick={()=>{
                    localStorage.removeItem("islogged")
                    window.location.reload();
                }}>Log Out</button></li>
                </ul>
              
            </nav>


        </header>
    );
};

export default Header;
