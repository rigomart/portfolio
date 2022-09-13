import { Layout } from 'layout';
import type { NextPage } from 'next';
import { About, Hero } from 'sections';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;
