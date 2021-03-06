import { CurrentLinesStore } from "../stores";
import Line from "../entities/Line";
import Command from "./Command";

const About: Command = {
  action: () => {
    ["This is my personal github page! Because I am not really good at designing things, a friend of mine suggested to put together a commandline",
      "and the result is exactly what you are seeing here! This website is still a work in progress and there will be more commands in the future.",
      "Thanks for passing by and playing around with this!"].map(Line.out).forEach(CurrentLinesStore.addLine);
  }, description: "Shows information about this page", name: "about"
};

export default About;
