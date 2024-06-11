import React from "react";
import "./features.css";
import screenshot1 from "../../assets/screenshot1.png";
import screenshot2 from "../../assets/screenshot2.png";
import screenshot3 from "../../assets/screenshot3.png";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import bell from "../../assets/bell.png";
import star from "../../assets/star.png";
import Image from "next/image";

function Features() {
  return (
    <div className="features">
      <div className="section normal">
        <Image src={screenshot1} alt="screenshot" />
        <div className="featuresection">
          <p className="title">Features</p>
          <h1 className="heading">Urify Premium</h1>
          <ul className="featuremenu">
            <li className="listhead">
              <Image src={icon1} alt="icon1" />
              <p>Budgeting Intervals</p>
            </li>
            <li>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </li>
            <li className="listhead">
              <Image src={icon2} alt="icon2" />
              <p>Budgeting Intervals</p>
            </li>
            <li>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </li>
            <li className="listhead">
              <Image src={icon3} alt="icon3" />
              <p>Budgeting Intervals</p>
            </li>
            <li>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </li>
          </ul>
        </div>
      </div>
      <div className="section reverse">
        <div className="advantagesection">
          <p className="title">Advantages</p>
          <h1 className="heading">Why choose Urify?</h1>
          <h2 className="semiheading">
            <Image src={bell} alt="bell" />
            Clever Notification
          </h2>
          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <Image src={screenshot2} alt="screenshot" />
      </div>
      <div className="section normal">
        <Image src={screenshot3} alt="screenshot" />
        <div className="advantagesection">
          <h2 className="semiheading">
            <Image src={star} alt="bell" />
            Fully Customizable
          </h2>
          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
