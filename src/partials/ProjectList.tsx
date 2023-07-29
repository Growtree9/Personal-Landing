import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Tavangar.ir"
        description="Tavangar is a rehabilitation service and I worked in
        the team as a supervisor and helper in the fullstack
        developer team. We used tools like Node, Next,
        MongoDB and Docker."
        link="https://tavangar.ir"
        img={{
          src: 'https://tavangar.ir/logo-wallpaper.png',
          alt: 'Tanvagar Project',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Express</Tags>
            <Tags color={ColorTags.SKY}>Mongodb</Tags>
            <Tags color={ColorTags.ROSE}>TailwindCSS</Tags>
          </>
        }
      />
      <Project
        name="Boookito.ir"
        description="Boookito is a cloud infrastructure for managing the
        libraries of Central Province University, where I
        work as a founder and team leader. In this service,
        we used tools such as Node, PostgreSQL, Golang,
        Nginx, and Next and we maintain this service every
        day."
        link="https://boookito.ir"
        img={{ src: 'https://boookito.ir/logo.svg', alt: 'Boookito Project' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>NestJS</Tags>
            <Tags color={ColorTags.YELLOW}>PostgreSQL</Tags>
            <Tags color={ColorTags.BLUE}>TailwindCSS</Tags>

          </>
        }
      />
      <Project
        name="Ravens.ir"
        description="RavensAi is a powerful image search engine that detects images in the shortest possible time
        And we use golang docker nodejs mongodb milvus Angular to have a relatively stable service."
        link="https://ravens.ir"
        img={{ src: 'https://avatars.githubusercontent.com/u/130699256?s=200&v=4', alt: 'Ravens Project' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Golang</Tags>
            <Tags color={ColorTags.INDIGO}>Mongodb</Tags>
            <Tags color={ColorTags.ROSE}>Node</Tags>
            <Tags color={ColorTags.NEUTRAL}>Milvus</Tags>
            <Tags color={ColorTags.TEAL}>Angular</Tags>


          </>
        }
      />

<Project
        name="Migmigo.ir"
        description="This is a landing page written with Astro js and Tailwind Css for the Iranian browser called MigMigo. We used many tools for this project and it is a very complex project."
        link="https://migmigo.ir"
        img={{ src: 'https://migmigo.ir/images/logo-3.svg', alt: 'Migmigo Project' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>AstroJS</Tags>
            <Tags color={ColorTags.INDIGO}>Cpp</Tags>
            <Tags color={ColorTags.EMERALD}>Node</Tags>
            <Tags color={ColorTags.CYAN}>Golang</Tags>
            <Tags color={ColorTags.GREEN}>Cassandra</Tags>


          </>
        }
      />



<Project
        name="Logobaaz.ir"
        description="There is a big project with artificial intelligence that gives companies and individuals the power to design their own logo with AI."
        link="https://logobaaz.ir/"
        img={{ src: 'https://logobaaz.ir/logo.svg', alt: 'Logobaaz Project' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>NextJs</Tags>
            <Tags color={ColorTags.EMERALD}>Node</Tags>
            <Tags color={ColorTags.ROSE}>Python</Tags>
            <Tags color={ColorTags.NEUTRAL}>Gpt4</Tags>
            <Tags color={ColorTags.ORANGE}>Golang</Tags>
            <Tags color={ColorTags.CYAN}>Tailwind</Tags>


          </>
        }
      />





<Project
        name="Parszaminpergas.com"
        description="Parszaminpergas Company is one of the largest, oldest and proudest broadcasting companies in the province, with the power of having a large transportation fleet and qualified and experienced human resources."
        link="https://Parszaminpergas.com"
        img={{ src: '/assets/images/Parszamin-removebg-preview.png', alt: 'ParszaminPergas Project' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Php</Tags>
            <Tags color={ColorTags.INDIGO}>Mysql</Tags>
            <Tags color={ColorTags.ROSE}>Bootstrap</Tags>
            <Tags color={ColorTags.NEUTRAL}>Ngingx</Tags>


          </>
        }
      />





<Project
        name="Taatfilms.com"
        description="Taat Films is a company based in Tehran Iran. The company was established on 2012 and the main goal was producing and distributing short films and independent feature film."
        link="https://taatfilms.com"
        img={{ src: '/assets/images/Logo-scaled-removebg-preview.png', alt: 'Taatfilms Project' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Php</Tags>
            <Tags color={ColorTags.INDIGO}>Mysql</Tags>
            <Tags color={ColorTags.ROSE}>Bootstrap</Tags>
            <Tags color={ColorTags.NEUTRAL}>Ngingx</Tags>


          </>
        }
      />








      
    </div>
    
  </Section>
);

export { ProjectList };
