import TodayDetails from "./TodayDetails";
const Cards = (props) => {
  const { day } = props;

  return (
    <li className=" flex column card">
      <TodayDetails today={day}  showDetails={false}/>
    </li>
  );
};

export default Cards;
