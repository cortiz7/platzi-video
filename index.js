import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const container = document.getElementById('app')

//ReactDOM(que voy a renderizar, donde lo hare)
render(<Playlist data={data} />, app);