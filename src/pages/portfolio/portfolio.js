import React from "react";
import plantmobile from "./plantmobile.JPEG"
import weatherdashboard from "./Weatherdashboard.JPEG"
import dailyplanner from "./Dailyplanner.JPEG"
import passwordgenerator from "./passwordgenerator.JPEG"
import cherrytree from "./cherrytreesite.JPEG"
import burgerapp from "./burgerapp.JPEG"
import Card from "../../components/Card"

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Plant Mobile',
      image: plantmobile,
      description: `A simple restaurant finding app geared towards those with vegetarian/vegan eating 
      lifestyles. This app collects restaurants around your desired location that offer options for you to enjoy.`,
      live: 'https://rwillowlevy.github.io/Project1/',
      github: 'https://github.com/rwillowlevy/Project1'
    },
    {
      id: 2,
      name: 'Weather dashboard',
      image: weatherdashboard,
      description: `A simple weather app that gets information from an API and showcases a five
      day weather forecast for your desired location of choice.`,
      live: 'https://rwillowlevy.github.io/Homework5/',
      github: 'https://github.com/rwillowlevy/Homework6'
    },
    {
      id: 3,
      name: 'Daily Planner',
      image: dailyplanner,
      description: `A simplistic planner for those with meetings, appointments, daily task, etc
      This planner goes light once that time has passed to keep you on top of your work.`,
      live: 'https://github.com/rwillowlevy/Homework5',
      github: 'https://rwillowlevy.github.io/Homework5/'
    },
    {
      id: 4,
      name: 'Cherry Tree',
      image: cherrytree,
      description: `A simple coronavirus tracking app to help keep you up to date with the current 
      statistics of the virus. We also implemented a tool where you can donate to local charities, 
      non profits, hospitals, etc to help support your local community.`,
      live: 'https://northwesternproject2.herokuap…',
      github: 'https://github.com/rwillowlevy/project2'
    },
    {
      id: 5,
      name: 'Burger App',
      image: burgerapp,
      description: `An app that lets you devour and uneat any burger of your choice. You pick you eat!.`,
      live: 'hhttps://peaceful-chamber-35001.herokuapp.com/',
      github: 'https://github.com/rwillowlevy/Burger'
    },
    {
      id: 6,
      name: 'Password Generator',
      image: passwordgenerator,
      description: `A simple password generator for those who can't come up with one on there own!.`,
      live: 'https://rwillowlevy.github.io/password-gen/',
      github: 'https://github.com/rwillowlevy/password-gen'
    }
  ]
  return (
    <>
      <div className="row mt-2 py-1 px-1">
        <h1>Portfolio</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <Card projects={projects}/>
      </div>

    </>
  );
}

export default Portfolio;