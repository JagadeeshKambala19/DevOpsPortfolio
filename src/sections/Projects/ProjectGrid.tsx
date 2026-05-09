import ProjectCard from "./ProjectCard";

import dataLakeImg from "./projectimages/DataLake.png";
import portfolioImg from "./projectimages/Portfolio.png";
import secureVPCImg from "./projectimages/SecureVPC.png";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-12 gap-4 auto-rows-fr">
      <ProjectCard
        className="col-span-12 md:col-span-4"
        title="Dockerized Full-Stack Task Management Platform"
        description="Built a full-stack Task Management Platform using React, Node.js, Express.js, and MySQL with RESTful APIs, Docker-based containerization, and responsive task management workflows."
        link="https://github.com/JagadeeshKambala19/DuoTasks.git"
        tags={["Docker", "React", "Node.js", "Express.js", "MySQL"]}
        previewImage={secureVPCImg}
      />

      <ProjectCard
        className="col-span-12 md:col-span-4"
        title="Jagadeesh Kambala — Portfolio"
        description="A thoughtfully crafted portfolio project demonstrating my technical skills, real-world projects, and the use of AI to elevate visual design and usability."
        link="https://github.com/JagadeeshKambala/MyPortfolio.git"
        tags={["React", "UI", "TypeScript", "TailwindCSS"]}
        previewImage={portfolioImg}
      />

      <ProjectCard
        className="col-span-12 md:col-span-4"
        title="AWS Native Microservices Platform with ECS Fargate, Terraform, and CI/CD"
        description="Orchestrated a production-ready E-commerce Platform on AWS using microservices with Docker, ECS Fargate, and complete CI/CD pipelines, infrastructure automation through Terraform, and monitoring with Prometheus and Grafana."
        link="https://github.com/JagadeeshKambala19/MicroCartPlatform.git"
        tags={["AWS ECS Fargate", "Terraform", "CI/CD", "Docker"]}
        previewImage={dataLakeImg}
      />
    </div>
  );
}
