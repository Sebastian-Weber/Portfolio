import { useEffect, useState } from 'react';

// svgs
import swLogo from '/src/assets/icons/svg/swlogo.svg'

// documents
import resume from '/src/assets/documents/pdf/Resume.pdf'

// images


// Taskify
import TaskifyConcept from '/src/assets/images/png/Taskify/Taskify0.png'
import TaskifyExcalidraw from '/src/assets/images/png/Taskify/Taskify.excalidraw.png'
import TaskifyWIP from '/src/assets/images/png/Taskify/Taskify.wip.png'
import TaskifyFinal from '/src/assets/images/png/Taskify/Taskify.png'

// Hacker News
import HackerNews from '/src/assets/images/png/Hackernews/HackerNews.png' 

// PICAPI
import PICAPI from '/src/assets/images/png/PICAPI/PICAPI.png'

// PokéFight
import PokeFight from '/src/assets/images/png/PokeFight/Pokefight_arena.png'

// Elder Gym Bro App
import ElderGymBroAppHome from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Home.png'
import ElderGymBroAppDemo from '/src/assets/images/gif/ElderGymBroApp/ElderGymBro_Demo.gif'

const projectCards = [
  {
    // Taskify
    image1: TaskifyConcept,
    image2: TaskifyExcalidraw,
    image3: TaskifyWIP,
    image4: TaskifyFinal,
    heading: 'Taskify',
    subheading: 'Stay organized and focused with Taskify!',
    description: '"Taskify" is a to-do list app that was developed as a group project. It was the first project work in the curriculum that took us beyond basic web technologies like HTML and CSS and introduced me to Javascript and React.js. An interesting observation that I made while working on the project was that collaborative wireframing - we used Excalidraw to sketch out our wireframe concept - is not only an extremely valuable tool for UX designers, but it can also be a very helpful strategy for beginners in software development who first of all need to develop their personal mental model of how UIs work and how they translate into code. Wireframing allowed us not only to clearly outline and visualize our project idea, but also to take a structured approach to project management and plan the basis for a common code base. Our team consisted of inexperienced web developers, some of whom had only been familiar with HTML, CSS and JavaScript for a few weeks. "Taskify" is certainly not the gold standard of to-do lists, but the learning curve on this project was enormous and the result is more than decent given the lack of experience. I will always remember this little project as my introduction to the processes and technologies of web development.:)',
    linkNetlify: 'https://taskifyinreact.netlify.app/',
    linkGitHub: 'https://github.com/tarekelg/ToDoListReact',
  },
  {
    // Taskify
    image1: HackerNews,
    image2: HackerNews,
    image3: HackerNews,
    image4: HackerNews,
    heading: 'HackerNews',
    subheading: 'HackerNews is ...',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quae sunt, labore porro excepturi provident fugiat eveniet soluta illo odio reiciendis ipsa accusantium blanditiis. Natus magni debitis veniam aspernatur, aut fugit, sed quasi assumenda quos similique cum soluta ut corporis distinctio harum, possimus consequuntur eius esse. Sit labore rerum aliquid dignissimos illo aspernatur, consequatur asperiores error dolores quibusdam optio ipsam mollitia sed quod non praesentium voluptatem qui earum. Natus sequi vero ea eligendi, quia temporibus sit dicta, ducimus illo quos dolorum asperiores amet. Architecto sunt exercitationem fugit tenetur quos corrupti laborum sint magni expedita quia, sequi perspiciatis nemo quas?',
    linkNetlify: 'https://taskifyinreact.netlify.app/',
    linkGitHub: 'https://github.com/tarekelg/ToDoListReact',
  },
];









// Besucherzentrum
import Besucherzentrum from '/src/assets/images/png/Besucherzentrum/Entwurf_Besucherzentrum_Wirtschaftshof_Glienicke.png'
import BesucherzentrumEG from '/src/assets/images/png/Besucherzentrum/Entwurf_Besucherzentrum_Wirtschaftshof_Glienicke_EG.png'
import BesucherzentrumOG from '/src/assets/images/png/Besucherzentrum/Entwurf_Besucherzentrum_Wirtschaftshof_Glienicke_OG.png'

//FashionPlattform
import FashionPlattform from '/src/assets/images/png/FashionPlattform/FashionPlattform.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* SW TEMPLATE */}
      <div className="min-h-svh flex flex-col justify-center items-center bg-gray-950 text-gray-200">

        {/* top bar */}
        <div className="min-w-full flex flex-row sticky top-0 justify-between items-center bg-slate-900">

          {/* Logo */}
          <img src={swLogo} className="h-10 w-10 m-4 md:h-16 md:w-16 md:mx-12" alt="Sebastian Weber logo" />

          {/* hamburger menu*/}
          {/* <a href="" className="font-semibold text-gray-300">
  
              <div className='mx-4 md:mx-8'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="size-6">
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </div>
          </a> */}
        </div>

        {/* -- 1. Sebastian Weber --*/}
        {/* <div className="flex flex-col justify-center">
          <p className="bg-gradient-to-br from-white to-gray-400 bg-clip-text pb-1 text-center font-medium leading-tight text-transparent sm:text-lg md:text-3xl">
            Sebastian Weber
          </p>
          <p className="bg-gradient-to-br from-white to-gray-400 bg-clip-text pb-1 text-center font-medium leading-tight text-transparent sm:text-lg md:text-3xl">
          UX designer & frontend developer 
          </p>
        </div> */}

        {/* -- 1. Sebastian Weber */}
        <div className="p-4 flex flex-col justify-start items-start">

          <div class="justify-start">
            <div className="flex flex-row justify-start">
              <p class="px-4 font-normal text-2xl md:text-4xl">
                Sebastian Weber
              </p>
            </div>
            <div className="flex flex-row justify-start">
              <p className="px-4 font-extralight text-2xl md:text-4xl">
              UX designer & frontend developer 
              </p>
            </div>
            <br></br>

            {/* -- 2. Slogan --*/}
            <div className="flex flex-row justify-center mt-2">

              <div className='pr-1 pl-6 '>
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.136 0L6.768 1.44C6.192 1.984 5.664 2.576 5.184 3.216C4.704 3.856 4.32 4.464 4.032 5.04C3.776 5.584 3.648 6.064 3.648 6.48C3.648 6.8 3.76 7.104 3.984 7.392C4.24 7.68 4.528 7.952 4.848 8.208C5.2 8.464 5.488 8.752 5.712 9.072C5.968 9.392 6.096 9.76 6.096 10.176C6.096 10.976 5.824 11.648 5.28 12.192C4.768 12.736 4.096 13.008 3.264 13.008C2.432 13.008 1.68 12.64 1.008 11.904C0.336 11.168 0 10.208 0 9.024C0 8.16 0.192 7.264 0.576 6.336C0.96 5.376 1.536 4.368 2.304 3.312C3.072 2.256 4.016 1.152 5.136 0ZM14.976 0L16.608 1.44C16.032 1.984 15.504 2.576 15.024 3.216C14.544 3.856 14.16 4.464 13.872 5.04C13.616 5.584 13.488 6.064 13.488 6.48C13.488 6.8 13.6 7.104 13.824 7.392C14.08 7.68 14.368 7.952 14.688 8.208C15.04 8.464 15.328 8.752 15.552 9.072C15.808 9.392 15.936 9.76 15.936 10.176C15.936 10.976 15.664 11.648 15.12 12.192C14.608 12.736 13.936 13.008 13.104 13.008C12.272 13.008 11.52 12.64 10.848 11.904C10.176 11.168 9.84 10.208 9.84 9.024C9.84 8.16 10.032 7.264 10.416 6.336C10.8 5.376 11.376 4.368 12.144 3.312C12.912 2.256 13.856 1.152 14.976 0Z" 
                  fill="#d1d5db"/>
                </svg>
              </div>

              
              <p className="text-start font-extralight line-clamp-6 pb-1 leading-tight text-2xl md:text-4xl">
              I enjoy surrounding myself with technology building engaging digital experiences."
              </p>
              {/*<p className="bg-clip-text text-start line-clamp-3 pb-1 font-medium leading-tight sm:text-lg md:text-3xl">
              I enjoy surrounding myself with technology building engaging digital experiences."
              </p> */}

            </div>
          </div> 
          <br></br>


        {/* -- 3. Tech stack icons --*/}
          <div className="px-4">
            <div className="pt-2 flex flex-row justify-center ">

            {/* GitHub icon */}
            <div className='px-2'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C20.565 22.3463 24 17.7325 24 12.3035C24 5.50583 18.63 0 12 0Z" 
                fill="#d1d5db" class=" bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25"/>
              </svg>
            </div>

            {/* Codecademy icon */}
            <div className='px-2'>
              <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.8288 21.6752H22.8245C22.7068 21.6752 22.6117 21.7478 22.6117 21.8906V23.7872C22.6117 23.9049 22.6843 24 22.827 24H29.8301C29.9503 24 30.0454 23.9449 30.0454 23.7947V21.8981C30.0454 21.7666 29.9741 21.6903 29.8288 21.6903V21.6727V21.6752ZM20.6099 0.0613427C20.6299 0.105159 20.6475 0.146471 20.6688 0.21157V23.7346C20.6688 23.811 20.6437 23.8548 20.6224 23.8773C20.6018 23.9019 20.5759 23.9214 20.5466 23.9344C20.5173 23.9475 20.4855 23.9536 20.4534 23.9524H0.191572C0.144 23.9524 0.0976801 23.9524 0.0701385 23.9274C0.0475033 23.9058 0.0295884 23.8797 0.0175226 23.8509C0.00545685 23.822 -0.000498235 23.7909 3.26114e-05 23.7596V0.187784C3.26114e-05 0.09264 0.0501082 0.0200303 0.120214 0H20.4534C20.5035 0 20.5736 0.0212823 20.5974 0.0425645V0.0625948L20.6099 0.0613427ZM2.27597 21.4812C2.27597 21.5726 2.32354 21.6515 2.39615 21.6727H18.2238C18.2964 21.6489 18.344 21.5776 18.344 21.4799V2.48876C18.344 2.39737 18.2952 2.32101 18.2213 2.30098H2.3974C2.3273 2.32601 2.27722 2.39236 2.27722 2.48876L2.27347 21.4799L2.27597 21.4812ZM8.75325 10.9979C9.56698 10.9979 10.0227 11.2194 10.5009 11.7728C10.5735 11.8667 10.6924 11.8905 10.7888 11.8166L12.0833 10.6649C12.1772 10.6098 12.1559 10.4595 12.1083 10.3844C11.3134 9.42799 10.1629 8.82708 8.67814 8.82708C6.68763 8.82708 5.18536 9.82234 4.60324 11.5888C4.39667 12.2084 4.30278 12.9984 4.30278 14.0662C4.30278 15.1366 4.39667 15.9241 4.62201 16.545C5.20414 18.3302 6.70641 19.3054 8.69692 19.3054C10.1992 19.3054 11.3447 18.7045 12.1334 17.7831C12.1897 17.6905 12.2085 17.5765 12.1146 17.5002L10.8164 16.3547C10.725 16.2959 10.6123 16.2959 10.5359 16.3885C10.0477 16.9519 9.54069 17.2523 8.7157 17.2523C7.83186 17.2523 7.15709 16.8204 6.87542 15.9566C6.70516 15.4684 6.6676 14.8675 6.6676 14.1C6.6676 13.3301 6.72394 12.763 6.89294 12.2585C7.1934 11.4335 7.85189 10.9979 8.75325 10.9979Z" 
                fill="#d1d5db"/>
              </svg>
            </div>

            {/* LinkedIn icon */}
            <div className='px-2'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 24H2.66667C1.19391 24 0 22.8061 0 21.3333V2.66667C0 1.19391 1.19391 0 2.66667 0H21.3333C22.8061 0 24 1.19391 24 2.66667V21.3333C24 22.8061 22.8061 24 21.3333 24ZM17.1052 20.6667H20.6667V13.3504C20.6667 10.2548 18.9119 8.75807 16.4608 8.75807C14.0087 8.75807 12.9767 10.6676 12.9767 10.6676V9.11111H9.54444V20.6667H12.9767V14.6007C12.9767 12.9754 13.7249 12.0082 15.1569 12.0082C16.4733 12.0082 17.1052 12.9376 17.1052 14.6007V20.6667ZM3.33333 5.46567C3.33333 6.64322 4.28069 7.598 5.44978 7.598C6.61888 7.598 7.56567 6.64322 7.56567 5.46567C7.56567 4.28812 6.61888 3.33333 5.44978 3.33333C4.28069 3.33333 3.33333 4.28812 3.33333 5.46567ZM7.25647 20.6667H3.67752V9.11111H7.25647V20.6667Z"
                fill="#d1d5db"/>
              </svg>
            </div>

            {/* Behance icon */}
            <div className='px-2'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM9.8947 6.69987C9.46751 6.60867 8.99519 6.56259 8.47775 6.56259H3.35999V17.4384H8.63135C9.11135 17.4394 9.59039 17.378 10.055 17.256C10.5168 17.1341 10.9277 16.9469 11.2886 16.6925C11.6496 16.4391 11.9366 16.1117 12.1497 15.7104C12.3629 15.3092 12.4694 14.834 12.4694 14.2858C12.4694 13.6052 12.3043 13.0234 11.9741 12.5415C11.6438 12.0596 11.1437 11.7216 10.4736 11.5287C10.9603 11.2954 11.3289 10.9959 11.5776 10.6301C11.8262 10.2644 11.951 9.80739 11.951 9.25923C11.951 8.75139 11.8675 8.32515 11.6995 7.97955C11.5315 7.63395 11.2953 7.35747 10.991 7.14915C10.6867 6.94083 10.3219 6.79107 9.8947 6.69987ZM9.22463 10.6599C8.95007 10.8624 8.59967 10.9642 8.17343 10.9642L5.75231 10.9661V8.42211H7.99007C8.19743 8.42115 8.40383 8.43939 8.60735 8.47491C8.80511 8.51043 8.97983 8.57379 9.13247 8.66499C9.28511 8.75619 9.40703 8.88387 9.49823 9.04611C9.58943 9.20835 9.63551 9.41667 9.63551 9.67011C9.63647 10.1271 9.49919 10.4564 9.22463 10.6599ZM8.98079 15.5108C8.76095 15.5568 8.53631 15.5799 8.31071 15.5789L5.75231 15.5799V12.5943H8.35679C8.87423 12.5943 9.29086 12.7133 9.60575 12.9524C9.92063 13.1904 10.0781 13.5898 10.0781 14.1476C10.0781 14.4317 10.0291 14.666 9.93311 14.8484C9.83615 15.0308 9.70655 15.1757 9.54431 15.2823C9.38207 15.3888 9.19391 15.4647 8.98079 15.5108ZM16.8797 15.8228C16.2701 15.8228 15.8025 15.6653 15.4781 15.3504C15.1536 15.0365 14.976 14.5287 14.9462 13.8308H20.6275C20.6678 13.2212 20.6169 12.6375 20.4749 12.0788C20.3328 11.52 20.1014 11.0228 19.7817 10.586C19.4621 10.1492 19.0531 9.80163 18.5558 9.54243C18.0576 9.28323 17.4739 9.15363 16.8038 9.15363C16.2048 9.15363 15.6585 9.26019 15.1661 9.47331C14.6736 9.68643 14.2493 9.97827 13.8941 10.3488C13.5389 10.7194 13.2643 11.1581 13.0713 11.666C12.8784 12.1738 12.7824 12.722 12.7824 13.3104C12.7824 13.9191 12.8765 14.4778 13.0637 14.9856C13.2509 15.4935 13.5177 15.9293 13.8633 16.2951C14.2089 16.6608 14.6304 16.9431 15.1277 17.1408C15.6249 17.3386 16.1837 17.4375 16.8029 17.4375C17.6966 17.4375 18.4579 17.234 19.0877 16.8279C19.7174 16.4218 20.1849 15.7469 20.4893 14.8023H18.5856C18.5145 15.0461 18.3216 15.2775 18.0067 15.4954C17.6918 15.7133 17.3165 15.8228 16.8797 15.8228ZM16.7424 10.7818C17.2704 10.7818 17.664 10.9239 17.9232 11.208C18.1814 11.4922 18.3619 11.9088 18.4646 12.456H14.9462C14.9558 12.3044 14.9894 12.1316 15.0451 11.9386C15.1008 11.7456 15.1968 11.5632 15.3341 11.3904C15.4713 11.2176 15.6537 11.0736 15.8822 10.9565C16.1097 10.8404 16.3968 10.7818 16.7424 10.7818ZM18.9715 7.11459H14.5757V8.33379H18.9715V7.11459Z"
                fill="#d1d5db"/>
              </svg>
            </div>

            {/* Email icon */}
            <div className='px-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="size-9">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" fill="#d1d5db"/>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" fill="#d1d5db"/>
              </svg>
            </div>

          </div>

          </div>
              <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>

          <div class="flex flex-col justify-start items-start lg:w-8/12 ">   

          {/* -- 4. About section */}
          <div className= "p-4 ">
            <div className="flex flex-row justify-start">
              <p className="bg-clip-text pb-1 pl-2 text-start font-medium leading-tight sm:text-lg md:text-xl">
                _about 
              </p>
            </div>
            <div className="flex flex-row justify-start">
              <p className="py-10 font-light text-balance text-white/75 px-6 text-start leading-tight sm:text-lg md:text-base">
              I am a graduate UX designer with a total of +10 years of experience in various fields of Tech. I have a passion for everything related to UIs and frontend technologies and visual design in general. I am also interested in the history of information technology, especially its earliest ideas and concepts.
After working mainly in native software development for 5 years, I have recently started learning how to code frontends for the web...
              </p>
            </div>
            <a>View Full Résumé src={resume}</a>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>

          {/* -- 4. Work experience section */}
          <div className="p-4 pt-12">
            <p className="bg-clip-text pb-1 pl-2 text-start font-medium leading-tight sm:text-lg md:text-xl">
              _work experience
            </p>
            <br></br>
            

            <div class="flex flex-col">
              <article class="flex flex-col justify-start px-6">
                <ul>
                  <div class="flex flex-col justify-start items-start">
                    <div class="flex flex-row">
                      <div class="p-2">09/2021 — 09/2023</div>
                      <hr class='flex flex-row'></hr>
                    </div>
                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>
                    <h2 class="p-2 font-light sm:text-md md:text-lg">Fulltime associate at empower GmbH Cologne </h2>
                    <h2 class="p-2 sm:text-md md:text-md">UX & UI Designer</h2>
                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    </p>

                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                      <ul>
                        <li>&#8226; Designed wireframes, mockups & prototypes for the copmpany's software products.</li>
                        <li>&#8226; Developed ui guidelines for the implementation of ui elements in the company's products.</li>
                        <li>&#8226; Co-authored the company's ui style guide
                        and implemented it in XAML</li>
                        <li>&#8226; (Re)designed ui layouts, icons, marketing materials.</li> 
                        <li>&#8226; Wrote a language guide on ux writing and ui copy.</li> 
                      </ul>
                    </p>
                  </div>
                </ul>
                <ul class="flex flex-wrap justify-start py-4">
                  <li class="rounded-full bg-purple-500/25 px-4 text-xs text-purple-300 py-1 m-1 hover:bg-purple-200/25">Adobe XD</li>
                  <li class="rounded-full bg-orange-500/25 px-4 text-xs text-orange-300 py-1 m-1 hover:bg-orange-200/25">Adobe Illustrator</li>
                  <li class="rounded-full bg-blue-500/25 px-4 text-xs text-blue-300 py-1 m-1 hover:bg-blue-200/25">Adobe Photoshop</li>
                  <li class="rounded-full bg-teal-500/25 text-xs text-teal-300 px-4 py-1 m-1 hover:bg-teal-200/25">Visual Studio</li>
                  <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">XAML</li>
                  <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">UX Writing</li>
                  <li class="rounded-full bg-yellow-500/25 text-xs text-yellow-300 px-4 py-1 m-1 hover:bg-yellow-200/25">Jira</li>
                </ul>
              </article>
            </div>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div class="flex flex-col">
              <article class="flex flex-col justify-start px-6">
                <ul>
                  <div class="flex flex-col justify-start items-start">
                    <div class="flex flex-row">
                      <div class="p-2">05/2019 — 08/2021</div>
                      <hr class='flex flex-row'></hr>
                    </div>
                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>
                    <h2 class="p-2 font-light sm:text-md md:text-lg">Working student at empower GmbH Cologne</h2>
                    <h2 class="p-2 sm:text-md md:text-md">UX & UI Designer</h2>
                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    </p>
                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                      <ul>
                        <li>&#8226; Created ux personas for the company's ux design department.</li>
                        <li>&#8226; Crafted pixel-perfect icons in different sizes, formats and color schemes.</li>
                        <li>&#8226; Created concepts for marketing materials, such as website and broschures, business cards, product mockups, (html) banners.</li>
                        <li>&#8226; Photo editing.</li>
                      </ul>
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
            </div>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>

          {/* -- 4. eduaction section */}
          <div className="p-4 pt-12">
            <p className="bg-clip-text pb-1 pl-2 text-start font-medium leading-tight sm:text-lg md:text-xl">
              _education
            </p>
            <br></br>

            <div class="flex flex-col">
              <article class="flex flex-col justify-start px-6">
                <ul>
                  <div class="flex flex-col justify-start items-start">
                    <div class="flex flex-row">
                      <div class="p-2">03/2024 — 07/2024</div>
                      <hr class='flex flex-row'></hr>
                    </div>
                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>
                    <h2 class="p-2 font-light sm:text-md md:text-lg">Continuing education at WBS Coding School Berlin </h2>
                    <h2 class="p-2 sm:text-md md:text-md">Fulltime web & app development bootcamp</h2>
                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    </p>

                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aperiam enim, dolor officiis voluptatem hic laudantium in eaque nihil deserunt id soluta harum, dolorem, sapiente beatae temporibus cumque consectetur iure. Quae eos possimus inventore eveniet corrupti nemo deserunt amet? Cumque, in! Explicabo fugit molestias doloribus. Maxime sit deleniti saepe alias sunt obcaecati neque eveniet eaque, ipsum vel vitae delectus consequuntur error accusamus ducimus libero repudiandae! Officia totam distinctio doloremque soluta aut aspernatur, est perferendis illo alias fugiat maxime, sint nam temporibus. Odit recusandae nostrum harum quisquam eligendi, ipsum dignissimos minima nihil est eos, dolore sunt officia consequatur dicta autem qui!
                    </p>
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
              <article class="flex flex-col justify-start px-6">
                <ul>
                  <div class="flex flex-col justify-start items-start">
                    <div class="flex flex-row">
                      <div class="p-2">03/2018 — 07/2021</div>
                      <hr class='flex flex-row'></hr>
                    </div>
                    <div class="flex flex-row">
                    <hr class='mx-auto'></hr>
                    </div>
                    <h2 class="text-start p-2 font-light sm:text-md md:text-lg">User Experience Design at Rheinische Hochschule Köln</h2>
                    <h2 class="p-2 sm:text-md md:text-md">Master of Arts</h2>
                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
                    </p>

                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
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
                    <h2 class="text-start p-2 font-light sm:text-md md:text-lg">Media Design & Design Technology / English Studies at University of Wuppertal</h2>
                    <h2 class="p-2 sm:text-md md:text-md">Bachelor of Arts</h2>
                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base"></p>

                    <p className="font-light text-white/75 px-2 text-start leading-tight sm:text-lg md:text-base">
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
            </div>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            

        {/* -- 4. Projects section */}
        <div className="p-4 pt-12">

          <div className="flex flex-row justify-start">
            <p className="bg-clip-text pb-1 pl-2 text-start font-medium leading-tight sm:text-lg md:text-xl">
            _projects
            </p>
          </div>
          <div className="flex flex-row justify-start">
            <p className="py-10 font-light text-white/75  px-6 text-start leading-tight sm:text-lg md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis obcaecati commodi nam rerum soluta, tenetur placeat repudiandae autem vero quisquam quaerat natus doloribus enim a, voluptatum quod sequi reiciendis repellendus labore. Error minus, enim aliquam aut accusantium beatae consequuntur aspernatur. Expedita dicta quis quisquam quae omnis nostrum debitis quia voluptatum nisi, nulla cum. Ipsa optio neque veniam consectetur, esse voluptatibus, sed fuga eveniet commodi molestias earum distinctio. Fugiat veniam quis aspernatur fugit. Ipsum voluptas ipsa laudantium recusandae omnis, expedita repudiandae quo modi veniam facilis harum aliquid iusto vitae earum, est deleniti quis maiores dolorum cumque illo totam et laborum.
            </p>
          </div>



        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        {/* -- 6. grid-flow-row auto-rows-max -- */}
        <div className="grid grid-flow-row auto-rows-max grid-cols-1">

          {projectCards.map((card, index) => (
          <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
            <div key={index} className="">
              <div className="p-2">
                <div className="flex flex-col items-start">
                  <div className="flex flex-wrap justify-start lg:flex-grow flex-1">
                    <div className="flex flex-col px-4 items-start">
                      <a class="text-indigo-300/90" href="https://taskifyinreact.netlify.app/">
                        <h2 className="text-xl underline font-semibold">{card.heading}</h2>
                      </a>
                      <br></br>
                    </div>  
                    <div className="flex flex-col px-4 items-start">



                      <div className="flex flex-wrap items-start">
                      <img class="h-32 md:h-36 lg:h-42 p-2" src={card.image1}></img>
                        <img class="h-32 md:h-36 lg:h-42 p-2" src={card.image2}></img>
                        <img class="h-32 md:h-36 lg:h-42 p-2" src={card.image3}></img>
                        <img class="h-32 md:h-36 lg:h-42 p-2" src={card.image4}></img>

                      </div>  
                      <br></br>

                      <p className="font-thin text-xl italic text-start text-balance text-white/75">{card.subheading}</p>
                      <br></br>
                      <p className="font-normal text-start text-balance text-white/75">{card.description}</p>
                      <br></br>

                      <div class="flex flex-row justify-start items-center ">
                        <a class="text-color-white pr-2 underline" src={card.linkNetlify}>
                          <h2 className="text-lg font-semibold">Netlify</h2>
                        </a>  
                        <br></br>
                        <a class="text-color-white pr-2 underline" src={card.linkGitHub}>
                          <h2 className="text-lg font-semibold">GitHub</h2>
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
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            

        {/* Taskify */}
          <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
            <div className="p-2 ">
              <div className="flex flex-col items-start">
                <div className="flex flex-row justify-center">

                    <div className="flex flex-col px-4 items-start">
                      <a class="text-indigo-300/90" href="https://taskifyinreact.netlify.app/">
                        <h2 className="text-xl underline font-semibold">Taskify</h2>
                      </a>
                      <br></br>
                      
                      <p className="font-thin text-xl italic text-start text-balance text-white/75">Stay organized and focused with Taskify!</p>
                      <br></br>
                      <p className="font-normal text-start text-balance text-white/75">
                      </p>
                      <br></br>
                      <div class="flex flex-row justify-start items-center ">
                        <a class="text-color-white pr-2 underline" href="https://taskifyinreact.netlify.app/">
                          <h2 className="text-lg font-semibold">Netlify</h2>
                        </a>  
                        <br></br>
                        <a class="text-color-white pr-2 underline" href="https://github.com/tarekelg/ToDoListReact">
                          <h2 className="text-lg font-semibold">GitHub</h2>
                        </a>
                      </div>
                    </div>
                <br></br>
                </div>
              </div>
            </div>
          </div>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          {/* Besucherzentrum Park Glienicke */}
          {/* <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
            <div className="p-2 ">
              <div className="flex flex-col items-start">
                <div className="flex flex-row justify-center">
                  <img class="h-32 md:h-36 lg:h-42" src={Besucherzentrum}></img>
                  <div className="flex flex-col px-4 items-start">
                    <h2 className="text-lg font-semibold">Besucherzentrum Park Glienicke</h2>
                    <br></br>
                    <p className="font-thin text-start text-balance text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minus voluptas laboriosam, aut blanditiis.</p>
                  </div>
                <br></br>
                </div>
              </div>
            </div>
          </div>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}

          {/* HackerNews */}
          <a class="text-color-white" href="https://github.com/Sebastian-Weber/HackerNews">
            <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
              <div className="p-2 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row justify-center">
                    <img class="h-32 md:h-36 lg:h-42" src={HackerNews}></img>
                    <div className="flex flex-col px-4 items-start">
                      <h2 className="text-lg font-semibold">HackerNews</h2>
                      <br></br>
                      <p className="font-thin text-start text-balance text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minus voluptas laboriosam, aut blanditiis.</p>
                    </div>
                  <br></br>
                  </div>
                </div>
              </div>
            </div>
          </a> 
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          {/* PICAPI */}
          <a class="text-color-white" href="https://github.com/Sebastian-Weber/HackerNews">
            <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
              <div className="p-2 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row justify-center">
                    <img class="h-32 md:h-36 lg:h-42" src={PICAPI}></img>
                    <div className="flex flex-col px-4 items-start">
                      <h2 className="text-lg font-semibold">PICAPI</h2>
                      <br></br>
                      <p className="font-thin text-start text-balance text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minus voluptas laboriosam, aut blanditiis.</p>
                    </div>
                  <br></br>
                  </div>
                </div>
              </div>
            </div>
          </a>  
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          {/* Pokéfight */}

            <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
              <div className="p-2 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row justify-center">
                    <img class="h-32 md:h-36 lg:h-42" src={PokeFight}></img>
                    <div className="flex flex-col px-4 items-start">
                      <a class="text-color-white" href="https://pokebattler.netlify.app/">
                        <h2 className="text-lg font-semibold">PokéFight (Netlify)</h2>
                      </a>  
                      <br></br>
                      <a class="text-color-white" href="https://github.com/EinKinddesWindes/PokemonBattle">
                        <h2 className="text-lg font-semibold">PokéFight (GitHub)</h2>
                      </a>  
                      <br></br>
                      <p className="font-thin text-start text-balance text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minus voluptas laboriosam, aut blanditiis.</p>
                    </div>
                  <br></br>
                  </div>
                </div>
              </div>
            </div>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          {/* Elder Gym Bro App */}
          <a class="text-color-white" href="https://github.com/Sebastian-Weber/HackerNews">
            <div className="m-w-40 m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform hover:bg-sky-950/50 hover:scale-105">
              <div className="p-2 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row justify-center">
                    <img class="h-32 md:h-36 lg:h-42" src={ElderGymBroAppHome}></img>
                    <img class="h-32 md:h-36 lg:h-42" src={ElderGymBroAppDemo}></img>
                    <div className="flex flex-col px-4 items-start">
                      <h2 className="text-lg font-semibold">Elder Gym Bro App</h2>
                      <br></br>
                      <p className="font-thin text-start text-balance text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minus voluptas laboriosam, aut blanditiis.</p>
                    </div>
                  <br></br>
                  </div>
                </div>
              </div>
            </div>
          </a>  
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        </div>

        {/* -- 4. Other works section */}
        <div className="p-4 pt-12">
          <div className="flex flex-row justify-start">
          <p className="bg-clip-text pb-1 pl-2 text-start font-medium leading-tight sm:text-lg md:text-xl">
            _other works
            </p>
          </div>
          <div className="flex flex-row justify-start">
            <p className="py-10 font-light text-white/75  px-6 text-start leading-tight sm:text-lg md:text-base">
             Concept & implementation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis obcaecati commodi nam rerum soluta, tenetur placeat repudiandae autem vero quisquam quaerat natus doloribus enim a, voluptatum quod sequi reiciendis repellendus labore. Error minus, enim aliquam aut accusantium beatae consequuntur aspernatur. Expedita dicta quis quisquam quae omnis nostrum debitis quia voluptatum nisi, nulla cum. Ipsa optio neque veniam consectetur, esse voluptatibus, sed fuga eveniet commodi molestias earum distinctio. Fugiat veniam quis aspernatur fugit. Ipsum voluptas ipsa laudantium recusandae omnis, expedita repudiandae quo modi veniam facilis harum aliquid iusto vitae earum, est deleniti quis maiores dolorum cumque illo totam et laborum.
            </p>
          </div>

          {/* --6. Wrap flex box with 3 cards in a row*/}
          <div className="flex flex-wrap justify-center">

            <div className="flex flex-wrap justify-center">
              <div className="m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <h2 className="py-2 text-lg font-semibold">Entwurf: Besucherzentrum</h2>
                </div>
                <div className="flex min-w-36 flex-col items-center justify-center">
                  <img src={Besucherzentrum}></img>
                </div>
                <div className="">
                  <div className="flex flex-col items-start">
                    <p className="py-1 font-thin text-start">Konzept für ein Besucherzetrum im Schlosspark Glienicke in Berlin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <h2 className="py-2 text-lg font-semibold">Entwurf: Besucherzentrum</h2>
                </div>
                <div className="flex min-w-36 flex-col items-center justify-center">
                  <img src={BesucherzentrumEG}></img>
                </div>
                <div className="">
                  <div className="flex flex-col items-start">
                    <p className="py-1 font-thin text-start">Konzept für ein Besucherzetrum im Schlosspark Glienicke in Berlin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <h2 className="py-2 text-lg font-semibold">Entwurf: Besucherzentrum</h2>
                </div>
                <div className="flex min-w-36 flex-col items-center justify-center">
                  <img src={BesucherzentrumOG}></img>
                </div>
                <div className="">
                  <div className="flex flex-col items-start">
                    <p className="py-1 font-thin text-start">Konzept für ein Besucherzetrum im Schlosspark Glienicke in Berlin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <a class="text-color-white" href="https://www.youtube.com/watch?v=nvSFsqbfqgo">
                    <h2 className="py-2 text-lg font-semibold">Animationsfilm: Fashion Plattform</h2>
                  </a>  
                </div>
                <div className="flex min-w-36 flex-col items-center justify-center">
                  <img src={FashionPlattform}></img>
                </div>
                <div className="">
                  <div className="flex flex-col items-start">
                    <p className="py-1 font-thin text-start">Animationsfilm zu einem Service-Design 
                      -Konzept für eine nutzerzentrierte Fashion Plattform</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        {/* --6. Wrap flex box for tiles*/}
        <div className="flex flex-wrap justify-center bg-green-900">
          {/* --7. Add content here-- */}

          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                    fill="#702848"
                    stroke="#702848"
                    strokeWidth="1.536"
                  />
                  <path
                    d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                    fill="#702848"
                    stroke="#702848"
                    strokeWidth="1.536"
                  />
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-semibold">Dummy Card 1</h2>
                  <p className="py-1 font-thin">3 cards in a flex-wrap box</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* my trophies tile */}
          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                    fill="#702848"
                    stroke="#702848"
                    strokeWidth="1.536"
                  />
                  <path
                    d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                    fill="#702848"
                    stroke="#702848"
                    strokeWidth="1.536"
                  />
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-semibold">Dummy Card 2</h2>
                  <p className="py-1 font-thin">3 cards in a flex-wrap box</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* my trophies tile */}
          <div className="flex flex-wrap justify-center">
            <div className="card glass m-2 w-80 cursor-pointer rounded-lg bg-gray-900 p-6 shadow-xl transition-transform lg:card-side hover:scale-110">
              <div className="flex min-w-36 flex-col items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                    fill="#702848"
                    stroke="#702848"
                    strokeWidth="1.536"
                  />
                  <path
                    d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                    fill="#702848"
                    stroke="#702848"
                    strokeWidth="1.536"
                  />
                </svg>
              </div>
              <div className="card-body">
                <div className="flex flex-col items-center">
                  <h2 className="card-title py-2 font-semibold">Dummy Card 3</h2>
                  <p className="py-1 font-thin">3 cards in a flex-wrap box</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* -- 5. grid-flow-row auto-rows-max -- */}
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 bg-blue-900">
          {/* Dummy Card 1 */}
          <div className="m-w-40 card glass m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform lg:card-side hover:scale-105">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold text-white">Dummy Card 2</h2>
                <p className="py-1 font-thin text-white">3 cards in a 2 cols grid</p>
              </div>
            </div>
          </div>

          {/* Dummy Card 2 */}
          <div className="m-w-40 card glass m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform lg:card-side hover:scale-105">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-titlefont-semibold py-2 text-white">Dummy Card 2</h2>
                <p className="py-1 font-thin text-white">3 cards in a 2 cols grid</p>
              </div>
            </div>
          </div>

          {/* Dummy Card 3 */}
          <div className="m-w-40 card glass m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform lg:card-side hover:scale-105">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold text-white">Dummy Card 2</h2>
                <p className="py-1 font-thin text-white">3 cards in a 2 cols grid</p>
              </div>
            </div>
          </div>

        </div>

        {/* -- 6. grid-flow-row auto-rows-max -- */}
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 bg-purple-900">
          {/* Dummy Card 3 */}
          <div className="m-w-40 card glass m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform lg:card-side hover:scale-105">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold text-white">Dummy Card 1</h2>
                <p className="py-1 font-thin text-white">3 cards in a 1 cols grid</p>
              </div>
            </div>
          </div>

           {/* Dummy Card 2 */}
           <div className="m-w-40 card glass m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform lg:card-side hover:scale-105">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold text-white">Dummy Card 2</h2>
                <p className="py-1 font-thin text-white">3 cards in a 1 cols grid</p>
              </div>
            </div>
          </div>

          {/* Dummy Card 3 */}
          <div className="m-w-40 card glass m-6 cursor-pointer rounded-lg bg-gray-900 p-4 shadow-xl transition-transform lg:card-side hover:scale-105">
            <div className="flex min-w-36 flex-col items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.8125 4.78125H42.2344V3.1875C42.2344 1.42481 40.8088 0 39.0469 0H11.9531C10.1912 0 8.76562 1.42481 8.76562 3.1875V4.78125H3.1875C1.42561 4.78125 0 6.20606 0 7.96875V14.3438C0 19.184 3.92461 23.1094 8.76562 23.1094H8.84212C9.57047 30.8064 15.5207 36.971 23.1094 38.0595V44.625H17.5312C15.7694 44.625 14.3438 46.0498 14.3438 47.8125V50.2031C14.3438 50.643 14.7 51 15.1406 51H35.8594C36.3 51 36.6562 50.643 36.6562 50.2031V47.8125C36.6562 46.0498 35.2306 44.625 33.4688 44.625H27.8906V38.0595C35.4793 36.971 41.4255 30.808 42.1539 23.1094H42.2344C47.0754 23.1094 51 19.184 51 14.3438V7.96875C51 6.20606 49.5744 4.78125 47.8125 4.78125ZM8.76562 18.3281C6.56466 18.3281 4.78125 16.5439 4.78125 14.3438V9.5625H8.76562V18.3281ZM1.59375 14.3438V7.96875C1.59375 7.0882 2.30775 6.375 3.1875 6.375H8.76562V7.96875H3.98438C3.5437 7.96875 3.1875 8.32416 3.1875 8.76562V14.3438C3.1875 17.4237 5.68491 19.9219 8.76562 19.9219V21.5156C4.80436 21.5156 1.59375 18.3042 1.59375 14.3438ZM33.4688 46.2188C34.3485 46.2188 35.0625 46.932 35.0625 47.8125V49.4062H15.9375V47.8125C15.9375 46.932 16.6515 46.2188 17.5312 46.2188H33.4688ZM24.7031 44.625V38.2086C24.9693 38.2213 25.2307 38.25 25.5 38.25C25.7693 38.25 26.0307 38.2213 26.2969 38.2086V44.625H24.7031ZM40.6406 21.5156C40.6406 29.8764 33.8616 36.6562 25.5 36.6562C17.1384 36.6562 10.3594 29.8764 10.3594 21.5156V3.1875C10.3594 2.30695 11.0734 1.59375 11.9531 1.59375H39.0469C39.9266 1.59375 40.6406 2.30695 40.6406 3.1875V21.5156ZM42.2344 9.5625H46.2188V14.3438C46.2188 16.5439 44.4353 18.3281 42.2344 18.3281V9.5625ZM49.4062 14.3438C49.4062 18.3042 46.1956 21.5156 42.2344 21.5156V19.9219C45.3151 19.9219 47.8125 17.4237 47.8125 14.3438V8.76562C47.8125 8.32416 47.4563 7.96875 47.0156 7.96875H42.2344V6.375H47.8125C48.6922 6.375 49.4062 7.0882 49.4062 7.96875V14.3438Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
                <path
                  d="M31.1957 15.4272L27.7619 14.9029L26.2192 11.6174C26.0877 11.3369 25.8064 11.1592 25.498 11.1592C25.1896 11.1592 24.9083 11.3377 24.7768 11.6174L23.2341 14.9029L19.8004 15.4272C19.5055 15.4735 19.2601 15.6783 19.1652 15.9619C19.0704 16.2456 19.1421 16.5572 19.3501 16.7716L21.8571 19.3431L21.2634 22.98C21.214 23.2812 21.3423 23.5841 21.5909 23.7602C21.8396 23.9363 22.1687 23.9538 22.4364 23.8072L25.4972 22.1154L28.558 23.8072C28.6799 23.8733 28.813 23.906 28.9453 23.906C29.1063 23.906 29.2672 23.8566 29.4043 23.7594C29.6529 23.5833 29.7812 23.2804 29.7318 22.9792L29.1381 19.3423L31.6451 16.7708C31.8539 16.5564 31.9256 16.2448 31.83 15.9611C31.7344 15.6775 31.4913 15.4735 31.1957 15.4272ZM27.7165 18.5175C27.5396 18.6992 27.4599 18.9526 27.5006 19.202L27.895 21.6158L25.8853 20.5041C25.765 20.438 25.6327 20.4045 25.4996 20.4045C25.3665 20.4045 25.2342 20.438 25.1139 20.5041L23.1042 21.6158L23.4987 19.202C23.5393 18.9526 23.4588 18.6984 23.2827 18.5175L21.5766 16.77L23.8979 16.4146C24.1601 16.3747 24.3856 16.2066 24.4987 15.9659L25.5004 13.8319L26.5021 15.9659C26.6152 16.2074 26.8407 16.3755 27.1029 16.4146L29.4242 16.77L27.7165 18.5175Z"
                  fill="#702848"
                  stroke="#702848"
                  strokeWidth="1.536"
                />
              </svg>
            </div>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title py-2 font-semibold text-white">Dummy Card 3</h2>
                <p className="py-1 font-thin text-white">3 cards in a 1 cols grid</p>
              </div>
            </div>
          </div>

        </div>

        </div>
      </div>

      </div> 
    </>
  )
}

export default App
