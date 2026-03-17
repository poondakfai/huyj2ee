'use client';

import { useRouter } from 'next/navigation';
import { KeyboardEvent, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchInput() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function onSearch(keyCode: string) {
    if (keyCode !== 'Enter') {
      return;
    }
    if (inputRef.current) {
      const param = new URLSearchParams('');
      param.set('q', inputRef.current.value);
      router.push(`/searchedblogs?${param.toString()}`);
      inputRef.current.value = '';
    }
  }

  return (
    <div className='search-container'>
      <input ref={inputRef} onKeyDown={(e: KeyboardEvent) => onSearch(e.key)} placeholder='Search blogs...' className='search-input' />
      <AiOutlineSearch onClick={(e) => onSearch('Enter')} className='search-button'/>
    </div>
  );
}