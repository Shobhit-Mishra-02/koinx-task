import "./About.css";
import profile from "/profile.jpg";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div className="container">
      <h1 className="container_heading">About Bitcoin</h1>
      <h4 className="about_question">What is Bitcoin?</h4>
      <p className="about_ans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        dolorum in culpa, officiis perferendis ipsum. Mollitia, soluta. Rerum
        ab, dolorum maiores labore, necessitatibus minus libero praesentium ex
        provident eius voluptas.
      </p>
      <h4 className="about_question">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </h4>
      <p className="about_ans">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        quidem autem excepturi fugiat accusamus nemo quasi? Dolorem repudiandae
        consectetur, perspiciatis velit, corporis, nobis nam unde impedit
        architecto atque similique. Ex nemo non iusto facilis commodi voluptas
        modi dolorem atque molestias ea tempore magnam excepturi nam deserunt,
        perferendis, quis facere officiis doloribus placeat! Sequi, dolor
        distinctio. At, nemo? Voluptate nihil dolor tempore? Neque odio enim,
        tempore alias commodi quibusdam! Officiis, hic!
      </p>
      <h3 className="about_subheading">Already Holding Bitcoin?</h3>
      <div>
        <div className="card">
          <div className="profile"></div>
          <div>
            <h3 className="card_heading">Calculate your profile</h3>
            <button className="card_btn">
              Check Now <GoArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
