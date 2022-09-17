import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getData as getFeatured } from './api/featured';
import { getData as getProjects } from './api/projects';

import { Layout } from 'layout';
import { About, Hero, Featured, Projects, Contact } from 'sections';
import { IProject, IFeaturedProject } from 'types';

type Props = {
  projects: IProject[];
  featuredProjects: IFeaturedProject[];
};

const Home: NextPage<Props> = ({ projects, featuredProjects }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <Featured projects={featuredProjects} />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: featuredProjects } = await getFeatured();
  const { data: projects } = await getProjects();

  return {
    props: {
      projects,
      featuredProjects,
    },
    revalidate: 86400, // 1d
  };
};

export default Home;
