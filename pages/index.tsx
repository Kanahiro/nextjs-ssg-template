import Link from '../components/Link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1 className="text-red-400 font-thin text-9xl">Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
);

export default IndexPage;
