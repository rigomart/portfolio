import { Loader, ProjectCard } from 'components';
import { Layout } from 'layout';

import type { NextPage } from 'next';
import { Hero } from 'sections';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
