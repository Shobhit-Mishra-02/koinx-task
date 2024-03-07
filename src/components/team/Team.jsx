import profile from "/profile.jpg";
import "./Team.css";

const Team = () => {
  return (
    <div className="container">
      <h2 className="team_heading">Team</h2>
      <p className="team_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        obcaecati quis, ullam at sed nisi laudantium ad neque asperiores dolorum
        reiciendis numquam fugit adipisci illum quia doloribus qui ipsum?
        Incidunt molestiae eaque quo provident, esse cumque est quia quidem,
        expedita facilis dignissimos delectus iste enim. Eveniet nobis quis
        culpa quae natus delectus, doloremque vitae atque et commodi sequi
        dolores
      </p>

      <div className="team_data">
        <div className="team_data__card">
          <div className="team_data__profile">
            <img src={profile} alt="profile" />
            <div className="team_data__card_info">
              <h3>John Doe</h3>
              <p>Designation here</p>
            </div>
          </div>
          <div className="team_data__card_desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
              natus illum harum quod eius, explicabo neque labore laborum soluta
              fugiat eveniet non odit maxime quia rem nisi qui, laudantium
              atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Saepe distinctio sunt maxime? Vero rerum deserunt sequi excepturi
            </p>
          </div>
        </div>
        <div className="team_data__card">
          <div className="team_data__profile">
            <img src={profile} alt="profile" />
            <div className="team_data__card_info">
              <h3>John Doe</h3>
              <p>Designation here</p>
            </div>
          </div>
          <div className="team_data__card_desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
              natus illum harum quod eius, explicabo neque labore laborum soluta
              fugiat eveniet non odit maxime quia rem nisi qui, laudantium
              atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Saepe distinctio sunt maxime? Vero rerum deserunt sequi excepturi
            </p>
          </div>
        </div>
        <div className="team_data__card">
          <div className="team_data__profile">
            <img src={profile} alt="profile" />
            <div className="team_data__card_info">
              <h3>John Doe</h3>
              <p>Designation here</p>
            </div>
          </div>
          <div className="team_data__card_desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
              natus illum harum quod eius, explicabo neque labore laborum soluta
              fugiat eveniet non odit maxime quia rem nisi qui, laudantium
              atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Saepe distinctio sunt maxime? Vero rerum deserunt sequi excepturi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
