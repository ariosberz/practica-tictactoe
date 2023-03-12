

const Square = (props) => {

  
    return (
    <button 
    className="w-20 h-20 p-0 -m-[1px] float-left
             bg-blue-100/50 hover:bg-gray-500/50 active:bg-gray-700/50
             border
             text-white text-2xl font-bold" 
    onClick={props.handleClick}
    >
        {props.value}
    </button>
     )
};

export default Square