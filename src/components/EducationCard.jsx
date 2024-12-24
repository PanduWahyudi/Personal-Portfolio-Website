const EducationCard = ({ tittle, grade, description }) => {
  return (
    <div className="bg-white shadow-md rounded text-dark p-4 space-y-3 md:p-8 md:space-y-6 ">
      <p className="font-bold text-2xl max-w-[374px] md:text-3xl ">{tittle}</p>
      <p className="text-base font-medium md:text-lg">{grade}</p>
      <p className="max-w-[368px]">{description}</p>
    </div>
  );
};

export default EducationCard;
