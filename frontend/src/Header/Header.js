import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './Header.css';

export default function Header() {

  return (
    <AppBar position="static">
        <Toolbar>
            <h2 className="autoMargin">Blog Parser</h2>
        </Toolbar>
    </AppBar>
  );
}