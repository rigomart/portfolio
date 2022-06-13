import { Layout } from "@layout";
import { About, Hero, Projects, Featured, Contact } from "@sections";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
