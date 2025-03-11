type prop = {
    text?: string;
    styles?: string;
    onclick?: () => void;
  }
  const Button = ({text = "Get Started",styles, onclick}:prop) => {
    return (
      <button onClick={onclick} className={`w-fit md:whitespace-nowrap bg-accent-bright-blue text-white text-sm md:text-base lg:text-lg  py-3 rounded-sm font-open-sans xl:py-4 xl:text-lg
        shadow-xl cursor-pointer hover:opacity-80 md:w-fit md:px-12  ${styles}`}>
          {text}
      </button>
    )
  }
  
  export default Button