const ExperiencesCard = ({ src,title, role, duration, description }) => {
  return (
    <div className="bg-[#FFFDF9] shadow-lg rounded text-dark p-4 flex flex-col md:flex-row md:space-x-10 md:items-center">
      <div className="w-full sm:w-[246px] h-[180px] rounded-md overflow-hidden mb-4 md:mb-0 flex justify-center">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-contain max-w-full max-h-[180px]"
         
        />
      </div>
      <div className="space-y-3 md:space-y-4">
        <p className="font-bold text-2xl w-full  md:text-3xl md:max-w-[600px]">
          {title}
        </p>
        <div className="flex items-center space-x-4">
          <p className="py-1 px-3 rounded-xl bg-dark text-white font-semibold">
            {duration}
          </p>
          <p className="text-[#8695A4] md:text-xl">{role}</p>
        </div>
        <p className="md:max-w-[545px]">{description}</p>
      </div>
    </div>
  );
};

export default ExperiencesCard;
