
const Card = ({ name, Role, regNo, leader, removeMember, imageSrc }) => {
  return (
    <div
      className="relative w-96 h-48 rounded-3xl overflow-hidden shadow-lg mx-4 my-4 flex items-center"
      style={{ backgroundColor: '#141B2B' }} // Light blue color
    >
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-2">
        <div className="">
          {/* <Image className="w-1/2 h-1/2 flex self-center" fill src={imageSrc} /> */}
          <p className="font-bold text-lg mb-1 text-white">{name}  [{regNo}] - {Role==0?'Leader':'Member'}</p>
        </div>

        {leader ? 
          <div>
            {Role=='1' && 
            <button className="bg-red-500 text-white px-3 py-1 rounded-full" 
              onClick={()=>{removeMember()}} > Remove </button>
            }
          </div>
          :
          null
        }
      </div>
    </div>
  );
};

export default Card;
