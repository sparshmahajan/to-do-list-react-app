import './TodayDate.css';

const TodayDate = () => {
    const today = new Date();

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
  
    return (
        <div className="today">
            {today.toLocaleDateString("en-US", options)}
        </div>);
}

export default TodayDate;