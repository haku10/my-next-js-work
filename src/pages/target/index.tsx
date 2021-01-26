import Link from 'next/link';

const test = () => (
  <div>
    <h2>this page is Target</h2>
    <Link href="/">
      <a>About Page</a>
    </Link>
  </div>
);
export default test;
