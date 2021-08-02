import Link from '../components/Link';
import Layout from '../components/Layout';
import React from 'react';

type AboutProps = {
    desc: string;
};

const SampleEl = (props: AboutProps): React.ReactElement => {
    return (
        <>
            <h2>{props.desc}</h2>
        </>
    );
};

const AboutPage = (props: AboutProps): React.ReactElement => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1>About</h1>
        <SampleEl desc={'1234'} />
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
);

export default AboutPage;
