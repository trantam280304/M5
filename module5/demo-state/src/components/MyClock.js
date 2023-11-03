import useClock from "../hooks/useClock";

function MyClock() {
  const [time, ampm] = useClock();

  const clockStyle = {
    textAlign: "center", // Căn giữa nội dung theo chiều ngang
  };
  
  const btnStyle = {
    display: "inline-block", // Hiển thị phần tử là một khối inline
  };

  return (
    <div id="Clock-style" style={clockStyle}>
      {time}
      <span className="btn-center" style={btnStyle}>
        {ampm}
      </span>
    </div>
  );
}

export default MyClock;