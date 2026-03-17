'use client';

import { ReactNode, useEffect, useLayoutEffect } from 'react';
import hljs  from 'highlight.js';
import 'highlight.js/styles/github.css';
//import 'highlight.js/styles/default.min.css';
//import 'highlight.js/styles/stackoverflow-light.min.css';
//import 'highlight.js/styles/vs2015.min.css';


type DocumentProps = {
  children: ReactNode
};

export default function Document({children}: DocumentProps) {
  useEffect(() => {
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach((block)=>block.classList.remove('language-plaintext'));
    hljs.highlightAll();
  }, [children]);

  return(
    <div className='document-container'>
      {children}
    </div>
  )
}