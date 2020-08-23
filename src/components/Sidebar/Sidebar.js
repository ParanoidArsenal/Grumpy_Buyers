import React, {useState, useRef, useEffect} from 'react';
import './Sidebar.css';

const Sidebar = ({ avatar, login, children}) => {

    useEffect(() => {
        function handleResize() {
          if(window.innerWidth >=700){
            const container = usersContainerRef.current;
            container.classList.remove('is-open');
          }
            
        }
        window.addEventListener('resize', handleResize)
      })


    const usersContainerRef = useRef(null);

    const showUserSidebar = () => {
        const container = usersContainerRef.current;
        container.classList.toggle('is-open');
    };

    return(
        <>
        <div className = 'sidebar-container' ref = {usersContainerRef}>
            <div className = 'thumbnail'>
                <img src={avatar} />
            </div>
                <nav>
                    {children}
                </nav>
            <footer>
                <span> Copyright © 2020 </span>

            </footer>
        </div>
        <button className= 'sidebarToggler' onClick ={(event) => showUserSidebar()}>
        <span>≡</span>
        </button>
        </>
    );
    
};
export {Sidebar};