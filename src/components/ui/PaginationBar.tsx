import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

type PaginationBarProps = {
  urlPrefix: string,
  pageCount: number,
  page: number
};

export default function PaginationBar({ urlPrefix, pageCount, page } : PaginationBarProps) {
  return pageCount <= 1 ?
      null
      :
      (
        page === 1 ?
          (
            <div className='more-blog'>
              <Link href={urlPrefix + '?page=' + (page + 1)} title='Next page'><AiOutlineRight /></Link>
            </div>
          )
          :
          (
            page === pageCount ?
              (
                <div className='more-blog'>
                  <Link href={urlPrefix + '?page=' + (page - 1)} title='Previous page'><AiOutlineLeft /></Link>
                </div>
              )
              :
              (
                <div className='more-blog'>
                  <Link href={urlPrefix + '?page=' + (page - 1)} title='Previous page'><AiOutlineLeft /></Link>
                  &nbsp;
                  <Link href={urlPrefix + '?page=' + (page + 1)} title='Next page'><AiOutlineRight /></Link>
                </div>
              )
          )
      );
}