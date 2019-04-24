import React, { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
    title: string
    children?: ReactNode
}

const Layout: React.SFC<LayoutProps> = ({ title, children }) => (
    <div className="App">
        <Navigation />
        <header className="App-header">
            <h1>{title}</h1>
            {children}
        </header>
    </div>

);

export default Layout
