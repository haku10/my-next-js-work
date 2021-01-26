import Link from 'next/link';

const Named = () => (
  <div>
    <h2>Welcome to next.js by TypeScript</h2>
    <Link href="/target">
      <a>About Page</a>
    </Link>
  </div>
);
export default Named;
