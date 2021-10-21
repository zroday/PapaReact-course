import React from 'react'

//BEM - Block Element Modifier
//BEM - Block Element modifier

function Header() {
    return (
        <div className='header'>
            <h1 className="header__title">This is the Header</h1>
            <h2 className="header__user">Admin is signed in</h2>
        </div>
    )
}

export default Header
