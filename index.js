import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const container = document.getElementById('app')

//ReactDOM(que voy a renderizar, donde lo hare)
render(<Media type="video" title="Que es Responsive Design?" author="cortiz" image="./images/covers/responsive.jpg" />, app);