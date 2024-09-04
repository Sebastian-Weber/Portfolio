import { useEffect, useState } from 'react';

// svgs
import swLogo from '/src/assets/icons/svg/swlogo.svg'

// documents
import resume from '/src/assets/documents/pdf/Sebastian_Weber_-_CV_-_UX-UI_Designer_and_Frontend_Developer_07-2024.pdf'


// --- images ---

// Logos
import RH_Logo from '/src/assets/logos/RH_Logo.png'
import RH_Logo_white from '/src/assets/logos/RH_Logo_weiss.png'
import BUW_Logo_white from '/src/assets/logos/Unilogo_schwarz_T3.png'
import WBS_Logo_red from '/src/assets/logos/WBSCS-Red-logo.webp'
import WBS_Logo_white from '/src/assets/logos/WBSCS-full-logo-white.webp'


// Taskify
import TaskifyExcalidraw from '/src/assets/images/png/Taskify/Taskify.excalidraw.png'
import TaskifyWIP from '/src/assets/images/png/Taskify/Taskify2.png'
import TaskifyFinal from '/src/assets/images/png/Taskify/Taskify.png'
import TaskifyConcept from '/src/assets/images/png/Taskify/Taskify5.png'
import TaskifyMacBookAir from '/src/assets/images/png/Taskify/Taskify_macbook_air_mockup_2023.png'

// HackerNews
import HackerNewsStyleExploration from '/src/assets/images/png/Hackernews/HackerNewsStyleExploration.png'
import HackerNewsVanillaCSS from '/src/assets/images/png/Hackernews/HackerNewsVanillaCSS.png' 
import HackerNewsDarkmode from '/src/assets/images/png/Hackernews/HackerNewsDarkmode.png'
import HackerNewsTailwindCSS from '/src/assets/images/png/Hackernews/HackerNewsTailwind.png'
import HackerNewsMacBookAir from '/src/assets/images/png/Hackernews/HackerNews_macbook_air_mockup_2023.png'


// PICAPI
import PICAPIWireframe from '/src/assets/images/png/PICAPI/PICAPI_wireframe.png'
import PICAPIDetailPage2 from '/src/assets/images/png/PICAPI/PICAPI_DetailPage_2.png'
import PICAPIWIPTopbar from '/src/assets/images/png/PICAPI/PICAPI_WIP_Topbar.png'
import PICAPIMacBookAir from '/src/assets/images/png/PICAPI/PICAPI_MacBookAir.png'


// PokéFight
import PokeFightLogin from '/src/assets/images/png/PokeFight/Pokefight_login.png'
import PokeFightArena from '/src/assets/images/png/PokeFight/Pokefight_arena.png'
import PokeFightPokedex from '/src/assets/images/png/PokeFight/PokeFight_Pokedex_2.png'
import PokeFightBattle from '/src/assets/images/png/PokeFight/PokeFight_battle.png'
import PokeFightMacBookAir from '/src/assets/images/png/PokeFight/PokeFight_MacBookAir.png'



// Elder Gym Bro App
import ElderGymBroWireframeDashboard from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Wireframe_Dashboard.png'
import ElderGymBroDashboard from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Dashboard.png'
import ElderGymBroWorkouts from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Workouts.png'
import ElderGymBroAppDemo from '/src/assets/images/gif/ElderGymBroApp/ElderGymBro_Demo.gif'



const aboutSection = [
  {
    introduction: 'I am a graduate UX designer with a total of +10 years of experience in Tech. I have a passion for everything related to UIs, frontend technologies and visual design in general. I am also interested in the history of information technology, especially its earliest ideas and concepts. After working mainly in native software development for 5 years, I recently started learning how to code frontends for the web.'
  },
];

const projectsSection = [
  {
    introduction: 'Transitioning from a UX/UI design background to web application development, I wanr to document the lessons and insights I have gained while working on different projects. My journey so far has taught me at least three valuable lessons. First, how to bring my designs to life through code, second, it has deepened my understanding of how design decisions directly impact user experience, and third, to always keep usability and aesthetics in mind when coding.' 
  },
];


const workCards = [
  {
    // associate at empower
    startDate: '09/2021 ',
    endDate: '09/2023',
    contract: 'Fulltime Associate',
    position: 'UX & UI Designer',
    company: 'empower GmbH',
    bullet1: '• Designed wireframes, mockups & prototypes for the company\'s software products.',
    bullet2: '• Developed ui guidelines for the implementation of ui elements in the company\'s products.',
    bullet3: '• Co-authored the company\'s ui style guide and implemented it in XAML.',
    bullet4: '• (Re)designed ui layouts, icons, marketing materials.',
    bullet5: '• Wrote a language guide on ux writing and ui copy.',
    tag1: 'Adobe XD',
    tag2: 'Adobe Illustrator',
    tag3: 'Adobe Photoshop',
    tag4: 'Visual Studio',
    tag5: 'XAML',
    tag6: 'UX Writing',
  },
  {
    // working student at empower
    startDate: '05/2019',
    endDate: '08/2021',
    contract: 'Working Student',
    position: 'UX & UI Designer',
    company: 'empower GmbH',
    bullet1: '• Created ux personas for the company\'s ux department.',
    bullet2: '• Crafted pixel-perfect icons in various sizes, formats and color schemes.',
    bullet3: '• Crafted and edited marketing materials, such as website and broschures, business cards, product mockups and (html) banners.',
    bullet4: '',
    tag1: 'Adobe XD',
    tag2: 'Adobe Illustrator',
    tag3: 'Adobe Photoshop',
    tag4: 'Visual Studio',
    tag5: 'XAML',
  },
];


const educationCards = [
  {
    // Continuing education as Fullstack Web and App developer (bootcamp) at WBS Coding School (Remote & on campus in Berlin)
    startDate: '03/2024',
    endDate: '07/2024',
    logotype: WBS_Logo_white,
    degree: 'Certified Fullstack Web and App Developer',
    program: 'Fullstack Web and App Development Bootcamp',
    bullet1: '• Learned how to apply frontend, backend and middleware technologies for web and app development. ',
    tag1: 'VS Code',
    tag2: 'Figma',
    tag3: 'Project management',
    tag4: 'HTML',
    tag5: 'CSS',
    tag6: 'Javascript',
    tag7: 'React',
  },
  {
    // Master of Arts in User Experience Design
    startDate: '03/2018 ',
    endDate: '07/2021',
    logotype: RH_Logo_white,
    degree: 'Master of Arts',
    program: 'User Experience Design',
    bullet1: '• Researched user needs and scientifically and practically analyzed user experiences.',
    bullet2: '• Designed iterative concepts and for interactive services and products with focus on psychology, empathy, diversity and social responsibility.',
    bullet3: '• Created interfaces and interaction designs.',
    bullet4: '• Practiced pitches, self-presentation & visualization of design processes and results.',
    bullet5: '',
    tag1: 'UX Research',
    tag2: 'Market & competitors analyses',
    tag3: 'Design Thinking Workshops',
    tag4: 'Creativity techniques',
    tag5: 'Quantitative & qualitative research methods',
    tag6: 'Presentation skills',
    tag7: '...',
  },
  {
    // Bachelor of Arts in Media Design / Design technology & English Studies
    startDate: '10/2010',
    endDate: '06/2017 ',
    logotype: BUW_Logo_white,
    degree: 'Bachelor of Arts',
    program: 'Media Design / Design Technology & English Studies',
    bullet1: '• Studied the principles of different field of design, e.g. visual design, layout, typography, film and the history and theory of design.',
    bullet2: '• Created concepts for various media projects using a broad stack of media and design technologies.',
    tag1: 'Academic Writing',
    tag2: 'Business English',
    tag3: 'Technical English',
    tag4: '...',
    tag5: '...',
    tag6: '...',
    tag7: '...',
  },
];

const projectCards = [
  {
    // Taskify
    image1: TaskifyExcalidraw,
      image1Description: 'Wireframe',
    image2: TaskifyWIP,
      image2Description: 'Work in progress',
    image3: TaskifyConcept,
      image3Description: 'Work in progress',
    image4: TaskifyMacBookAir,
      image4Description: 'Mockup',
    heading: 'Taskify',
    subheading: 'Stay organized and focused with Taskify!',
    description: '"Taskify" is a to-do list app created during the WBS Coding School bootcamp, marking my first deep dive into JavaScript and React.js. Collaborating on this project, I discovered the power of collaborative wireframing using Excalidraw. It not only clarified our projects UX but also helped us, as beginners, build a shared understanding of how UIs work and translate into code. Despite our team of four being mostly new to web development, we successfully built a functional app using tools like Git, Slack and Trello. With Taskify we did not create a new gold standard ofor to-do-lists but the learning experience was invaluable and unforgettable!',
    linkNetlify: 'https://taskifyinreact.netlify.app/',
    linkGitHub: 'https://github.com/tarekelg/ToDoListReact',
  },
  {
    // HackerNews
    image1: HackerNewsStyleExploration,
      image1Description: 'Style exploration',
    image2: HackerNewsVanillaCSS,
      image2Description: 'Work in progress', 
    image3: HackerNewsTailwindCSS,
      image3Description: 'Work in progress', 
    image4: HackerNewsMacBookAir,
      image4Description: 'Mockup',
    heading: 'HackerNews',
    subheading: 'What\'s up in Tech? — The latest news fetched from Agolia API & styled with TailwindCSS',
    description: 'Coming from a design background, I\'ve always been more involved with front-end technologies than back-end technologies. Fetching data from an API and JSon files were things I had heard about, but had never done myself. While working on this HackerNews group project, I not only got my first taste of backend technologies, but also discovered npm packages for pre-built components like busy spinners and pagination. After using Bootstrap, I experimented with TailwindCSS and spent hours perfecting the layout and styling. The simplicity of TailwindCSS won me over, making it easier to write and maintain CSS, even with its limitations - well worth the tradeoffs from a UX designer\'s perspective.',
    linkNetlify: 'https://hackernewsfromagolia.netlify.app/',
    linkGitHub: 'https://github.com/Sebastian-Weber/HackerNews',
  },
  {
    // PICAPI
    image1: PICAPIWireframe,
      image1Description: 'Wireframe',
    image2: PICAPIWIPTopbar,
      image2Description: 'Work in progress',
    image3: PICAPIDetailPage2,
      image3Description: 'Details page',
    image4: PICAPIMacBookAir,
      image4Description: 'Mockup',
    heading: 'PICAPI',
    subheading: 'PICAPI — All your favorite APIs at your fingertips!',
    description: 'This group project was primarily focused on gaining practical experience in fetching data from both a headless CMS and a backend server. To accomplish this, we began by creating our own API collection, which we initially hosted on the Contentful platform, a popular headless CMS. After successfully setting up the API, we transferred the collection into a custom JSON file, which was then hosted on an Express server for greater flexibility and control over the backend processes. In addition, we enhanced the user interface by implementing an off-canvas sidebar, which was managed through the useState hook, a dedicated details page, pagination with npm\'s pagination library, the "slick slider carousel" for dynamic content display, a search bar using Daisy UI with an efficient search function, and clickable category tags to serve as filter options.',
    linkNetlify: 'https://picapi.netlify.app/',
    linkGitHub: 'https://github.com/Sebastian-Weber/Contentful_CMS_Rework',
  },
  {
    // PokeFight
    image1: PokeFightLogin,
      image1Description: 'Login',
    image2: PokeFightPokedex,
      image2Description: 'Pokedex ',
    image3: PokeFightBattle,
      image3Description: 'Arena (Concept)',
    image4: PokeFightMacBookAir,
      image4Description: 'Mockup',
    heading: 'PokeFight',
    subheading: 'PokeFight — Got to fetch them all!',
    description: '...',
    linkNetlify: 'https://pokebattler.netlify.app',
    linkGitHub: 'https://github.com/ReynkeDeVos/PokeBattle',
  },
  {
    // Elder Gym Bro App
    image1: ElderGymBroWireframeDashboard,
      image1Description: 'Figma prototype',
    image2: ElderGymBroDashboard,
      image2Description: 'Dashboard',
    image3: ElderGymBroWorkouts,
      image3Description: 'Workouts',
    image4: ElderGymBroAppDemo,
      image4Description: 'Mockup',  
    heading: 'ElderGymBro',
    subheading: 'Elder Gym Bro — Join the Cult!',
    description: '"Elder Gym Bro was the grand finale of my WBS Coding School bootcamp. This time we had the freedom to choose any topic we wanted to tackle as our final coding challenge. We decided to shake things up with a fitness app that was not only functional, but fun, and thus ElderGymBro was born! ElderGymBro is a Lovecraftian-themed fitness app for humans, blobs, and other abominations. For the first time, we took a mobile-first approach. Coming from a native software development background, it really made me realize the importance of responsiveness in UI layouts when developing for the web. I dove deep into experimenting with a variety of tools and frameworks such as SASS, DaisyUI, WindUI, and Material UI, each with their own unique strengths and challenges. Together, we worked hard to find the perfect balance between design aesthetics and usability, from the first wireframes in Figma to the final deployed MERN application. This project was an incredible learning experience full of valuable lessons, and we had the fantastic opportunity to present our work at the WBS Coding School Community Day in Berlin.',
    linkNetlify: 'https://eldergymbro.netlify.app/',
    linkGitHub: 'https://github.com/MichalWollny/ElderGymBroApp',
  },
];












// Besucherzentrum
import Besucherzentrum from '/src/assets/images/png/Besucherzentrum/Entwurf_Besucherzentrum_Wirtschaftshof_Glienicke.png'
import BesucherzentrumEG from '/src/assets/images/png/Besucherzentrum/Entwurf_Besucherzentrum_Wirtschaftshof_Glienicke_EG.png'
import BesucherzentrumOG from '/src/assets/images/png/Besucherzentrum/Entwurf_Besucherzentrum_Wirtschaftshof_Glienicke_OG.png'

//FashionPlattform
import FashionPlattform from '/src/assets/images/png/FashionPlattform/FashionPlattform.png'
import { GiCarDoor } from 'react-icons/gi';



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
        <html>
      {/* SW TEMPLATE */}
      <div class="min-h-svh flex flex-col justify-center items-center bg-gray-950">

        {/* sticky top bar */}
        <div class="min-w-full flex flex-row sticky top-0 justify-between items-center bg-slate-900">

          {/* Logo */}
          <img src={swLogo} class="h-10 w-10 m-4 md:h-16 md:w-16 md:mx-12" alt="Sebastian Weber logo" />

        </div>

        {/* -- inner layout grid */}
        <div class="flex flex-col lg:w-8/12 ">   

        {/* -- 4. info section */}
        <div class="p-4 pt-6">

        <div class="flex flex-row">
          <div class="flex flex-col justify-end items-end">
            <p class="font-normal text-2xl md:text-3xl xl:text-5xl">
               Sebastian&nbsp;
            </p>
            <p class="font-normal text-2xl md:text-3xl xl:text-5xl">
              Weber&nbsp; 
            </p>
          </div>
          <div class="flex flex-col justify-start">
            <p class="font-extralight text-2xl md:text-3xl xl:text-5xl">
              UX designer
            </p>
            <p class="font-extralight text-2xl md:text-3xl xl:text-5xl">
              frontend developer 
            </p>
          </div>
         </div> 
            <br></br>

          <div class="flex flex-row justify-end">

            {/* Email icon */}
            {/* <div class='flex flex-row pt-48 px-'>
              <div class="italic text-4xl font-thin text-cyan-900">Say hello ...</div>
            </div> */}

            <div class="flex flex-col justify-end items-end mt-2">
              <p class="text-right font-extralight px-4 leading-none pb-1 text-3xl md:text-4xl xl:text-5xl">
              crafting
              </p>
              <p class="text-right font-extralight px-4 leading-none pb-1 text-3xl md:text-4xl xl:text-5xl">
              engaging 
              </p>
              <p class="text-right font-extralight px-4 leading-none pb-1 text-3xl md:text-4xl xl:text-5xl">
              digital 
              </p>
              <p class="text-right font-extralight px-4 leading-none pb-1 text-3xl md:text-4xl xl:text-5xl">
              experiences 
              </p>
            </div>
          </div>

          <br></br>

          </div>

         {/* -- 4. About section */}
         <div class="p-4">
          	<div class="flex flex-row justify-start">
              <p class="p-4 bg-clip-text pb-1 -ml-4 text-start font-medium leading-tight sm:text-xl md:text-2xl xl:text-4xl">
                _about 
              </p>
            </div>



            {aboutSection.map((card, index) => (
                <div class="flex flex-col justify-center text-start items-center py-10 px-4 font-light text-balance text-white leading-tight sm:text-lg md:text-base">
                {card.introduction}
                </div>
            ))}


   
            <div class="flex flex-row justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <a class="mx-2 font-semibold" href={resume}>Dowload full CV</a>
            </div>
            <br></br>

            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>




{/* -- 4. Projects section */}
<div class="p-4 pt-12">

<div class="flex flex-row justify-start">
  <p class="p-4 bg-clip-text pb-1 -ml-4 text-start font-medium leading-tight sm:text-xl md:text-2xl xl:text-4xl">
  _projects
  </p>
</div>

{projectsSection.map((card, index) => (
                <div class="flex flex-col justify-center text-start items-center py-6 px-4 font-light text-balance text-white leading-tight sm:text-lg md:text-base">
                {card.introduction}
                </div>
                        ))}
</div>

{/* -- Projects -- */}
{projectCards.map((card, index) => (
<div class="m-w-40 m-6 rounded-lg bg-gray-900 p-4 shadow-xl transition-transform ">
  <div key={index} class="">
    <div class="p-2">
      <div class="flex flex-col items-start">
        <div class="flex flex-wrap justify-start lg:flex-grow flex-1">
          <div class="flex flex-col px-4 items-start">
            <a class="flex flex-row pr-2 text-lg sm:text-xl md:text-2xl xl:text-2xl" href={card.linkNetlify}>
              <div class="font-semibold">{card.heading}</div>
                <div class="pl-1">
                  <svg class="pt-1 size-7 sm:size-8 md:size-9 xl:size-10" fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#d1d5db" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
              </div> 
            </a>
          <br></br>
          </div>  
          <div class="flex flex-col p-4 items-start">
            <div class="flex flex-wrap items-start">
              <div class="flex flex-col min-w-56 mx-4 justify-center items-center">
                <a href={card.image1} target="_blank">
                  <img class="h-32 md:h-36 lg:h-42 px-2 pb-1" src={card.image1}></img>
                </a>  
                <div class="font-thin pb-4">{card.image1Description}</div>
              </div>
              <div class="flex flex-col min-w-56 mx-4 justify-center items-center">
                <a href={card.image2} target="_blank">
                  <img class="h-32 md:h-36 lg:h-42 px-2 p-1" src={card.image2}></img>
                </a>
                <div class="font-thin pb-4">{card.image2Description}</div>
              </div>
              <div class="flex flex-col min-w-56 mx-4 justify-center items-center">
              <a href={card.image3} target="_blank">
                  <img class="h-32 md:h-36 lg:h-42 px-2 p-1" src={card.image3}></img>
                </a>
                <div class="font-thin pb-4">{card.image3Description}</div>
              </div>
              <div class="flex flex-col min-w-56 mx-4 justify-center items-center">
                <a href={card.image4} target="_blank">
                  <img class="h-32 md:h-36 lg:h-42 px-2 p-1" src={card.image4}></img>
                </a>
                <div class="font-thin pb-4">{card.image4Description}</div>
              </div>
            </div>  
            <br></br>
            <p class="font-thin text-xl italic text-start text-balance text-white/75">{card.subheading}</p>
            <br></br>
            <p class="font-normal text-start text-balance prose text-white/75">{card.description}</p>
            <br></br>
            <div class="flex flex-row">

              <a class="flex flex-row text-color-white pr-2 underline" href={card.linkNetlify}>
                <div class="text-lg font-semibold">Netlify</div>
                <div class="pl-1">
                  <svg class="pt-1" fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#d1d5db" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                 </div> 
              </a>

              <br></br>
              <a class="flex flex-row text-color-white pr-2 underline" href={card.linkGitHub}>
                <div class="text-lg font-semibold">GitHub</div>
                <div class="pl-1">
                  <svg class="pt-1" fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#d1d5db" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                 </div> 
              </a>
            </div>

          </div>
          <br></br>
        </div>
      </div>
    </div>     
  </div>
</div>
        ))}


        {/* -- 4. Work experience section */}
        <div class="p-4 pt-6">

          <div class="flex flex-row justify-start">
            <p class="p-4 bg-clip-text pb-1 -ml-4 text-start font-medium leading-tight sm:text-xl md:text-2xl xl:text-4xl">
               _work experience
            </p>
          </div>

        </div>

        {/* -- work experience grid */}

          {workCards.map((card, index) => (
          // responsive container
          <div class="px-6 my-2 w-full float-right">
            <ul>
              <div class="flex flex-col">
                <div class="flex flex-grow">
                    <div class="flex flex-col items-end w-full m-auto justify-end">
                      <div class="p-2">{card.startDate} — {card.endDate}</div>  
                      <div class="p-2 w-36 font-semibold xl:w-42">{card.company}</div>
                    </div>
                    </div>
                  <div class="flex flex-row justify-start">
                    <div class="flex flex-col justify-start items-start">
                    <div class="p-2 font-semibold sm:text-md md:text-md">{card.position}</div>
                    <div class="p-2 font-light italic sm:text-md md:text-lg">{card.contract}</div>
                  </div>
                  </div>
                  <p class="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base"></p>

                  <p class="font-light text-white/75 text-start leading-tight sm:text-lg md:text-base">
                    <ul class="px-2">
                      <li>{card.bullet1}</li>
                      <li>{card.bullet2}</li>
                      <li>{card.bullet3}</li>
                      <li>{card.bullet4}</li> 
                      <li>{card.bullet5}</li> 
                    </ul>
                  </p>
                </div>

              {/* <article class="flex flex-col justify-start">
              <ul class="flex flex-wrap justify-start pt-4">
                <li class="rounded-full bg-purple-500/25 px-4 text-xs text-purple-300 py-1 m-1 hover:bg-purple-200/25">{card.tag1}</li>
                <li class="rounded-full bg-orange-500/25 px-4 text-xs text-orange-300 py-1 m-1 hover:bg-orange-200/25">{card.tag2}</li>
                <li class="rounded-full bg-blue-500/25 px-4 text-xs text-blue-300 py-1 m-1 hover:bg-blue-200/25">{card.tag3}</li>
                <li class="rounded-full bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25">{card.tag4}</li>
                <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">{card.tag5}</li>
                <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">{card.tag6}</li>
                <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">{card.tag7}</li>
              </ul>
            </article> */}
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </ul>
          </div>
          
          ))}

          {/* -- 4. education section */}
          <div class="p-4 pt-12">
            <p class="p-4 bg-clip-text pb-1 -ml-4 text-start font-medium leading-tight sm:text-xl md:text-2xl xl:text-4xl">
              _education
            </p>
            <br></br>


            {educationCards.map((card, index) => (
          // responsive container
          <div class="">
            <ul>
              <div class="flex flex-col ">
                <div class="flex flex-grow">
                    <div class="flex flex-col items-end w-full m-auto justify-end">
                      <div class="p-2">{card.startDate} — {card.endDate}</div> 
                      <img class="p-2 w-36 font-semibold xl:w-42" src={card.logotype}></img>
                    </div>
                    </div>
                  <div class="px-4 my-2 flex flex-row justify-start">
                    <div class="flex flex-col justify-start items-start">
                      <div class="p-2 font-semibold sm:text-md md:text-md">{card.degree}</div>
                      <div class="p-2 font-light italic sm:text-md md:text-lg">{card.program}</div>
                    </div>
                  </div>
                  <p class="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base"></p>

                  <p class="px-4 my-2 font-light text-white/75 text-start leading-tight sm:text-lg md:text-base">
                    <ul class="px-2">
                      <li>{card.bullet1}</li>
                      <li>{card.bullet2}</li>
                      <li>{card.bullet3}</li>
                      <li>{card.bullet4}</li> 
                      <li>{card.bullet5}</li> 
                    </ul>
                  </p>
                </div>

              {/* <article class="px-4 my-2 flex flex-col justify-start">
              <ul class="flex flex-wrap justify-start pt-4">
                <li class="rounded-full bg-purple-500/25 px-4 text-xs text-purple-300 py-1 m-1 hover:bg-purple-200/25">{card.tag1}</li>
                <li class="rounded-full bg-orange-500/25 px-4 text-xs text-orange-300 py-1 m-1 hover:bg-orange-200/25">{card.tag2}</li>
                <li class="rounded-full bg-blue-500/25 px-4 text-xs text-blue-300 py-1 m-1 hover:bg-blue-200/25">{card.tag3}</li>
                <li class="rounded-full bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25">{card.tag4}</li>
                <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">{card.tag5}</li>
                <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">{card.tag6}</li>
                <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">{card.tag7}</li>
              </ul>
            </article> */}
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </ul>
            </div>
          
          ))}

                  {/* -- 3. Tech stack icons --*/}
        <div className="flex flex-col justify-center items-center px-4">
          <div className="pt-2 flex flex-row justify-center ">

            {/* GitHub icon */}
            <div className='px-2'>
              <a href="https://github.com/Sebastian-Weber"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C20.565 22.3463 24 17.7325 24 12.3035C24 5.50583 18.63 0 12 0Z" 
                  fill="#d1d5db" class=" bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25"/>
                </svg>
              </a>
            </div>

            {/* Codecademy icon */}
            <div className='px-2'>
              <a href="https://www.codecademy.com/profiles/Sebastian-Weber1708">
                <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.8288 21.6752H22.8245C22.7068 21.6752 22.6117 21.7478 22.6117 21.8906V23.7872C22.6117 23.9049 22.6843 24 22.827 24H29.8301C29.9503 24 30.0454 23.9449 30.0454 23.7947V21.8981C30.0454 21.7666 29.9741 21.6903 29.8288 21.6903V21.6727V21.6752ZM20.6099 0.0613427C20.6299 0.105159 20.6475 0.146471 20.6688 0.21157V23.7346C20.6688 23.811 20.6437 23.8548 20.6224 23.8773C20.6018 23.9019 20.5759 23.9214 20.5466 23.9344C20.5173 23.9475 20.4855 23.9536 20.4534 23.9524H0.191572C0.144 23.9524 0.0976801 23.9524 0.0701385 23.9274C0.0475033 23.9058 0.0295884 23.8797 0.0175226 23.8509C0.00545685 23.822 -0.000498235 23.7909 3.26114e-05 23.7596V0.187784C3.26114e-05 0.09264 0.0501082 0.0200303 0.120214 0H20.4534C20.5035 0 20.5736 0.0212823 20.5974 0.0425645V0.0625948L20.6099 0.0613427ZM2.27597 21.4812C2.27597 21.5726 2.32354 21.6515 2.39615 21.6727H18.2238C18.2964 21.6489 18.344 21.5776 18.344 21.4799V2.48876C18.344 2.39737 18.2952 2.32101 18.2213 2.30098H2.3974C2.3273 2.32601 2.27722 2.39236 2.27722 2.48876L2.27347 21.4799L2.27597 21.4812ZM8.75325 10.9979C9.56698 10.9979 10.0227 11.2194 10.5009 11.7728C10.5735 11.8667 10.6924 11.8905 10.7888 11.8166L12.0833 10.6649C12.1772 10.6098 12.1559 10.4595 12.1083 10.3844C11.3134 9.42799 10.1629 8.82708 8.67814 8.82708C6.68763 8.82708 5.18536 9.82234 4.60324 11.5888C4.39667 12.2084 4.30278 12.9984 4.30278 14.0662C4.30278 15.1366 4.39667 15.9241 4.62201 16.545C5.20414 18.3302 6.70641 19.3054 8.69692 19.3054C10.1992 19.3054 11.3447 18.7045 12.1334 17.7831C12.1897 17.6905 12.2085 17.5765 12.1146 17.5002L10.8164 16.3547C10.725 16.2959 10.6123 16.2959 10.5359 16.3885C10.0477 16.9519 9.54069 17.2523 8.7157 17.2523C7.83186 17.2523 7.15709 16.8204 6.87542 15.9566C6.70516 15.4684 6.6676 14.8675 6.6676 14.1C6.6676 13.3301 6.72394 12.763 6.89294 12.2585C7.1934 11.4335 7.85189 10.9979 8.75325 10.9979Z" 
                  fill="#d1d5db"/>
                </svg>
              </a>
            </div>

            {/* LinkedIn icon */}
            <div className='px-2'>
              <a href="https://www.linkedin.com/in/sebastian-weber1708/"> 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 24H2.66667C1.19391 24 0 22.8061 0 21.3333V2.66667C0 1.19391 1.19391 0 2.66667 0H21.3333C22.8061 0 24 1.19391 24 2.66667V21.3333C24 22.8061 22.8061 24 21.3333 24ZM17.1052 20.6667H20.6667V13.3504C20.6667 10.2548 18.9119 8.75807 16.4608 8.75807C14.0087 8.75807 12.9767 10.6676 12.9767 10.6676V9.11111H9.54444V20.6667H12.9767V14.6007C12.9767 12.9754 13.7249 12.0082 15.1569 12.0082C16.4733 12.0082 17.1052 12.9376 17.1052 14.6007V20.6667ZM3.33333 5.46567C3.33333 6.64322 4.28069 7.598 5.44978 7.598C6.61888 7.598 7.56567 6.64322 7.56567 5.46567C7.56567 4.28812 6.61888 3.33333 5.44978 3.33333C4.28069 3.33333 3.33333 4.28812 3.33333 5.46567ZM7.25647 20.6667H3.67752V9.11111H7.25647V20.6667Z"
                  fill="#d1d5db"/>
                </svg>
              </a>
            </div>

            {/* Behance icon */}
            <div className='px-2'>
              <a href="https://www.behance.net/sebastian-weber">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM9.8947 6.69987C9.46751 6.60867 8.99519 6.56259 8.47775 6.56259H3.35999V17.4384H8.63135C9.11135 17.4394 9.59039 17.378 10.055 17.256C10.5168 17.1341 10.9277 16.9469 11.2886 16.6925C11.6496 16.4391 11.9366 16.1117 12.1497 15.7104C12.3629 15.3092 12.4694 14.834 12.4694 14.2858C12.4694 13.6052 12.3043 13.0234 11.9741 12.5415C11.6438 12.0596 11.1437 11.7216 10.4736 11.5287C10.9603 11.2954 11.3289 10.9959 11.5776 10.6301C11.8262 10.2644 11.951 9.80739 11.951 9.25923C11.951 8.75139 11.8675 8.32515 11.6995 7.97955C11.5315 7.63395 11.2953 7.35747 10.991 7.14915C10.6867 6.94083 10.3219 6.79107 9.8947 6.69987ZM9.22463 10.6599C8.95007 10.8624 8.59967 10.9642 8.17343 10.9642L5.75231 10.9661V8.42211H7.99007C8.19743 8.42115 8.40383 8.43939 8.60735 8.47491C8.80511 8.51043 8.97983 8.57379 9.13247 8.66499C9.28511 8.75619 9.40703 8.88387 9.49823 9.04611C9.58943 9.20835 9.63551 9.41667 9.63551 9.67011C9.63647 10.1271 9.49919 10.4564 9.22463 10.6599ZM8.98079 15.5108C8.76095 15.5568 8.53631 15.5799 8.31071 15.5789L5.75231 15.5799V12.5943H8.35679C8.87423 12.5943 9.29086 12.7133 9.60575 12.9524C9.92063 13.1904 10.0781 13.5898 10.0781 14.1476C10.0781 14.4317 10.0291 14.666 9.93311 14.8484C9.83615 15.0308 9.70655 15.1757 9.54431 15.2823C9.38207 15.3888 9.19391 15.4647 8.98079 15.5108ZM16.8797 15.8228C16.2701 15.8228 15.8025 15.6653 15.4781 15.3504C15.1536 15.0365 14.976 14.5287 14.9462 13.8308H20.6275C20.6678 13.2212 20.6169 12.6375 20.4749 12.0788C20.3328 11.52 20.1014 11.0228 19.7817 10.586C19.4621 10.1492 19.0531 9.80163 18.5558 9.54243C18.0576 9.28323 17.4739 9.15363 16.8038 9.15363C16.2048 9.15363 15.6585 9.26019 15.1661 9.47331C14.6736 9.68643 14.2493 9.97827 13.8941 10.3488C13.5389 10.7194 13.2643 11.1581 13.0713 11.666C12.8784 12.1738 12.7824 12.722 12.7824 13.3104C12.7824 13.9191 12.8765 14.4778 13.0637 14.9856C13.2509 15.4935 13.5177 15.9293 13.8633 16.2951C14.2089 16.6608 14.6304 16.9431 15.1277 17.1408C15.6249 17.3386 16.1837 17.4375 16.8029 17.4375C17.6966 17.4375 18.4579 17.234 19.0877 16.8279C19.7174 16.4218 20.1849 15.7469 20.4893 14.8023H18.5856C18.5145 15.0461 18.3216 15.2775 18.0067 15.4954C17.6918 15.7133 17.3165 15.8228 16.8797 15.8228ZM16.7424 10.7818C17.2704 10.7818 17.664 10.9239 17.9232 11.208C18.1814 11.4922 18.3619 11.9088 18.4646 12.456H14.9462C14.9558 12.3044 14.9894 12.1316 15.0451 11.9386C15.1008 11.7456 15.1968 11.5632 15.3341 11.3904C15.4713 11.2176 15.6537 11.0736 15.8822 10.9565C16.1097 10.8404 16.3968 10.7818 16.7424 10.7818ZM18.9715 7.11459H14.5757V8.33379H18.9715V7.11459Z"
                  fill="#d1d5db"/>
                </svg>
               </a> 
            </div>

            {/* Email icon */}
            <div className='px-2'>
              <a href="mailto:sebastian.weber1708@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="size-9">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" fill="#d1d5db"/>
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" fill="#d1d5db"/>
                </svg>
              </a>
            </div>



        </div>
        <br></br>
        <div>© 2024 Sebastian Weber</div>
        <br></br>
        </div>

 














            {/* <div class="flex flex-col">
              <article class="flex flex-col justify-start px-4">
                <ul>
                  <div class="flex flex-col justify-start items-start">
                    <div class="flex flex-row">
                      <div class="py-2">03/2024 — 07/2024</div>
                      <hr class='flex flex-row'></hr>
                    </div>
                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>
                    <div class="py-2 font-light sm:text-md md:text-lg">Continuing education at WBS Coding School Berlin </div>
                    <div class="py-2 sm:text-md md:text-md">Fulltime web & app development bootcamp</div>
                    <p class="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    </p>

                    <div class="font-light text-balance text-white/75 pr-8 text-start leading-tight sm:text-lg md:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aperiam enim, dolor officiis voluptatem hic laudantium in eaque nihil deserunt id soluta harum, dolorem, sapiente beatae temporibus cumque consectetur iure. Quae eos possimus inventore eveniet corrupti nemo deserunt amet? Cumque, in! Explicabo fugit molestias doloribus. Maxime sit deleniti saepe alias sunt obcaecati neque eveniet eaque, ipsum vel vitae delectus consequuntur error accusamus ducimus libero repudiandae! Officia totam distinctio doloremque soluta aut aspernatur, est perferendis illo alias fugiat maxime, sint nam temporibus. Odit recusandae nostrum harum quisquam eligendi, ipsum dignissimos minima nihil est eos, dolore sunt officia consequatur dicta autem qui!
                    </div>
                  </div>
                </ul>
                <ul class="flex flex-wrap justify-start py-4">
                  <li class="rounded-full bg-orange-500/25 text-xs text-orange-300 px-4 py-1 m-1 hover:bg-orange-200/25">HTML5</li>
                  <li class="rounded-full bg-blue-500/25 text-xs text-blue-300 px-4 py-1 m-1 hover:bg-blue-200/25">CSS3</li>
                  <li class="rounded-full bg-sky-500/25 text-xs text-sky-300 px-4 py-1 m-1 hover:bg-sky-200/25">VS Code</li>
                  <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">Javascript</li>
                  <li class="rounded-full bg-indigo-500/25 text-xs text-indigo-300 px-4 py-1 m-1 hover:bg-indigo-200/25">React</li>
                  <li class="rounded-full bg-purple-500/25 px-4 text-xs text-purple-300 py-1 m-1 hover:bg-purple-200/25">Tailwind</li>
                  <li class="rounded-full bg-orange-500/25 text-xs text-orange-300 px-4 py-1 m-1 hover:bg-orange-200/25">Git</li>
                  <li class="rounded-full bg-purple-500/25 text-xs text-purple-300 px-4 py-1 m-1 hover:bg-purple-200/25">Bootstrap</li>
                  <li class="rounded-full bg-red-500/25 text-xs text-red-300 px-4 py-1 m-1 hover:bg-red-200/25">Figma</li>
                  <li class="rounded-full bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25">Node.js</li>
                  <li class="rounded-full bg-red-500/25 text-xs text-red-300 px-4 py-1 m-1 hover:bg-red-200/25">NPM</li>
                </ul>
              </article>
            </div>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div class="flex flex-col">

                <ul>
                  <div class="flex flex-col">

                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>


                    <p class="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    </p>
                    <div class="flex flex-row w-full justify-end items-end">
                      
                      <hr class='flex flex-row'></hr>
                    </div>
 
                    <div class='flex flex-row w-full justify-between items-end'>
                      <div>

                      <div class="flex flex-row w-full justify-between bg-red-600">

  
                    </div>
                    <div class="text-start p-2 font-semibold sm:text-md md:text-lg">User Experience Design</div>
                      <div class="flex flex-col px-4 w-full items-end bg-red-500">
                        <div class="p-2 flex flex-row">03/2018 — 07/2021</div>
                        <img class="w-36 xl:w-42" src={RH_Logo_white}></img>
                     </div>

                      <div class="p-2 font-semibold sm:text-md md:text-md">- Master of Arts -</div>
                        <ul>
                          <li>• Learned how to analyze user needs and user experiences with scientific and practical methods</li>
                          <li>• Designed concepts for interactive services and products with focus on psychology, empathy, diversity and social responsibility.</li>
                          <li>• Designed interfaces, interaction designs concepts and service designs. </li>
                          <li>• Practiced skills for self-presentation, visualization of design processes and results, and general presentation skills.</li> 
                        </ul>
                      </div>
                     


                     </div>

                    
                  </div>

                </ul>
                <ul class="flex flex-wrap justify-start py-4">
                  <li class="rounded-full bg-purple-500/25 px-4 text-xs text-purple-300 py-1 m-1 hover:bg-purple-200/25">Adobe XD</li>
                  <li class="rounded-full bg-orange-500/25 px-4 text-xs text-orange-300 py-1 m-1 hover:bg-orange-200/25">Adobe Illustrator</li>
                  <li class="rounded-full bg-blue-500/25 px-4 text-xs text-blue-300 py-1 m-1 hover:bg-blue-200/25">Adobe Photoshop</li>
                  <li class="rounded-full bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25">Visual Studio</li>
                  <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">XAML</li>
                </ul>
 
            </div>

            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div class="flex flex-col">
              <article class="flex flex-col justify-start px-6">
                <ul>
                  <div class="flex flex-col justify-start items-start">
                    <div class="flex flex-row">
                      <div class="p-2">10/2010 — 07/2017</div>
                      <hr class='flex flex-row'></hr>
                    </div>
                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>
                    <div class="text-start p-2 font-light sm:text-md md:text-lg">Media Design & Design Technology / English Studies at University of Wuppertal</div>
                    <div class="p-2 sm:text-md md:text-md">Bachelor of Arts</div>
                    <p class="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base"></p>

                    <p class="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aperiam enim, dolor officiis voluptatem hic laudantium in eaque nihil deserunt id soluta harum, dolorem, sapiente beatae temporibus cumque consectetur iure. Quae eos possimus inventore eveniet corrupti nemo deserunt amet? Cumque, in! Explicabo fugit molestias doloribus. Maxime sit deleniti saepe alias sunt obcaecati neque eveniet eaque, ipsum vel vitae delectus consequuntur error accusamus ducimus libero repudiandae! Officia totam distinctio doloremque soluta aut aspernatur, est perferendis illo alias fugiat maxime, sint nam temporibus. Odit recusandae nostrum harum quisquam eligendi, ipsum dignissimos minima nihil est eos, dolore sunt officia consequatur dicta autem qui!
                    </p>
                  </div>
                </ul>
                <ul class="flex flex-wrap justify-start py-4">
                  <li class="rounded-full bg-purple-500/25 px-4 text-xs text-purple-300 py-1 m-1 hover:bg-purple-200/25">Adobe XD</li>
                  <li class="rounded-full bg-orange-500/25 px-4 text-xs text-orange-300 py-1 m-1 hover:bg-orange-200/25">Adobe Illustrator</li>
                  <li class="rounded-full bg-blue-500/25 px-4 text-xs text-blue-300 py-1 m-1 hover:bg-blue-200/25">Adobe Photoshop</li>
                  <li class="rounded-full bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25">Visual Studio</li>
                  <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">XAML</li>
                </ul>
              </article>
            </div> */}


            


        </div>

 
      </div>

      </div> 
      </html>
    </>

  )
}

export default App
