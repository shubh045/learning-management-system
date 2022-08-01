import "./Empholiday.css";
import { PieChart, Pie, Cell } from "recharts";

const Empholiday = () => {
  const data = [
    { name: "Medical leave", leave: 20 },
    { name: "Casual leave", leave: 13 },
    { name: "Parental leave", leave: 30 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  return (
    <>
      <div className="home-page">
        <div className="piet">
          <div className="emph">
            <h3>Employees on Leave Today </h3>
            <br />
            <table className="tbl" id="tbl">
              <tr>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Reporting Manager</th>
              </tr>
              <tr>
                <th>Shubham</th>
                <th>HR</th>
                <th>Admin</th>
              </tr>
              <tr>
                <th>Shivansh</th>
                <th>Engineering Intern</th>
                <th>Anuj</th>
              </tr>
              <tr>
                <th>Sunny</th>
                <th>Engineering Intern</th>
                <th>Anuj</th>
              </tr>
            </table>
          </div>
          <div className="piec">
            <PieChart width={550} height={500}>
              <Pie data={data} dataKey="leave" outerRadius={200}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="leave-con">
              <p className="leaves">
                <div className="col-block m-leave"></div>Medical leave
              </p>
              <p className="leaves">
                <div className="col-block c-leave"></div>Casual leave
              </p>
              <p className="leaves">
                <div className="col-block p-leave"></div>Parental leave
              </p>
            </div>
          </div>
        </div>
        <div className="list-items">
          <div className="card">
            <ul className="card-list">
              <h3>Upcoming Events</h3>
              <li>Today is Shubham's Birthday</li>
              <li>Independence day celebration on 12 August</li>
              <li>Janamashtmi celebration on 18 August</li>
            </ul>
          </div>
          <div className="card">
            <ul className="card-list">
              <h3>Upcoming Holidyas</h3>

              <li>Muharram on 9 August</li>
              <li>Raksha Bandhan on 11 August</li>
              <li>Independence day on 15 August</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empholiday;
