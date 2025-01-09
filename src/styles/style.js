/* 
Color Pallete:
  Crash Site:
    Color     -  Hex Code   -  Tailwind
    Yellow    >  #EEC643    >  sunburst
    Dark Blue >  #011638    >  midnight
    Blue      >  #0D21A1    >  royal
    Black     >  #141414    >  obsidian
    White     >  #EEF0F2    >  frost
  Dark Mode:
    Color     -  Hex Code   -  Tailwind
    White     >  #EAF6FF    >  glacier 
    Baby Blue >  #009FFD    >  skyline
    Grey      >  #444140    >  charcoal
    Orange    >  #FFA400    >  tangerine
    Mat Black >  #1E1E24    >  onyx
*/

export const theme = {
  // Text
  heading: {
    default: "text-3xl mt-6 font-Pixelify transition-colors duration-500",
    home: "text-frost text-7xl mt-20 mx-4 font-Pixelify transition-colors duration-500",
  },
  subheading: {
    default: "text-frost text-lg font-Pixelify transition-all duration-500",
    home: "text-sunburst text-xl my-2 mx-4 font-Pixelify transition-all duration-500",
    card: "font-bold text-xl mb-2 text-sunburst transition-all duration-500",
    nav: "text-sunburst text-2xl font-Pixelify transition-all duration-500",
  },
  bodyText: {
    default: "text-frost text-lg font-Pixelify transition-all duration-500",
    card: "text-frost text-auto text-[13px] font-Pixelify transition-all duration-500",
  },
  // Containers
  card: {
    projects: "min-w-sm max-w-2xl box-border transition-all overflow-hidden mx-4 my-6 hover:shadow-xl hover:border-solid hover:border-frost hover:border-2",
  },
  container: {
    default: "p-3 p m-4 border-[1px] border-frost transition-all duration-500",
    img: "p-3 transition-all duration-500",
    nav: "sticky p-2 justify-between items-center flex top-0 right-0 left-0 transition-all duration-500",
    footer: "items-center text-frost text-base font-Pixelify p-2 grid  grid-cols-2 transition-all duration-500",
    socialsLogos: "p-2",
    description: "text-frost mx-4 mb-6 flex ",
  },
  button: {
    default: "flex w-fit p-3 rounded mb-2 place-items-center inline-block py-1 text-base font-Pixelify transition-all duration-500",
    largeButton: "flex justify-center gap-2  place-items-center  inline-block bg-sunburst py-1 text-sm font-bold text-midnight transition-all duration-500"
  }, 
  navMenu: {
    burger: "bg-sunburst transition-all duration-300 ease-in-out transform h-1 w-7",
    offScreen: "h-screen w-full max-w-[450px] fixed top-0 flex flex-col space-y-9 items-center justify-center text-center text-3xl transition-all ease-in-out duration-300 off-screen-menu",
  },
  // Colors
  lightMode: {
    heading: "text-frost",
    subheading: "text-frost",
    bodyText: "text-frost",
    background: "bg-midnight",

  }, 
  darkMode: {
    
  },
}