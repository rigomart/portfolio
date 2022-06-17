import { useEffect, useState } from "react";
import { db } from "@config/firebase";
import { Project } from "@typing/dataTypes";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

const converter = {
  toFirestore: (data: Project) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as Project,
};

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const projectsCollectionRef = collection(db, "projects").withConverter(
    converter
  );

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Data could not be obtained");
      }
      setIsLoading(false);
    };

    getProjects();
  }, []);

  return {
    projects,
    isLoading,
  };
};

export default useProjects;
