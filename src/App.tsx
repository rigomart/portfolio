import { Layout } from "@layout";
import { About, Hero, Projects, Featured } from "@sections";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Featured />
      <Projects />
    </Layout>
  );
}

export default App;
