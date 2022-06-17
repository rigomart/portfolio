import { db } from "@config/firebase";
import { FeaturedProject } from "@typing/dataTypes";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const converter = {
  toFirestore: (data: FeaturedProject) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as FeaturedProject,
};

const useFeaturedProjects = () => {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const projectsCollectionRef = collection(db, "featured").withConverter(
    converter
  );

  useEffect(() => {
    const getFeaturedProjects = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Data could not be obtained");
      }
      setIsLoading(false);
    };

    getFeaturedProjects();
  }, []);

  return {
    projects,
    isLoading,
  };
};

export default useFeaturedProjects;
