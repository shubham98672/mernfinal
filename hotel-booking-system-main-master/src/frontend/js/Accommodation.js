import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../css/Accommodation.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/bed2.jpg";
import img2 from "../../assets/bed3.jpg";
import img3 from "../../assets/bed4.jpg";
import img4 from "../../assets/bed5.jpg";

const Accommodation = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adults = queryParams.get("adults");
  const kids = queryParams.get("kids");
  const checkInDate = queryParams.get("checkIn");
  const checkOutDate = queryParams.get("checkOut");
  const selectedValue1 = 600;
  const selectedValue2 = 650;
  const selectedValue3 = 550;
  const selectedValue4 = 700;
  const handleProceed = () => {
    // Use the Link component to navigate and pass data
    navigate(`/frm?selectedValue=${selectedValue4}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`);
  };
  

  return (
    <div>
      <Container>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
              Luxury Twin
            </h3>
          </div>
          <Col>
            <img src={img1} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Luxury Twin</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
            Spacious and elegantly designed, the Luxury Twin room offers two plush twin beds, modern amenities, and a cozy ambiance. Ideal for those seeking comfort with a touch of sophistication. Enjoy complimentary Wi-Fi, room service, and a minibar.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹800.00</del>
                  <br />
                  <div>	
                  ₹600.00</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹850.00</del>
                  <br />
                  <div>	
                  ₹770.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹1000.00</del>
                  <br />
                  <div>	
                  ₹900.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹1500.00</del>
                  <br />
                  <div>	
                  ₹1200.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <Link
              to={`/abc?selectedValue=${selectedValue1}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                	
 Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
              Delux
            </h3>
          </div>
          <Col>
            <img src={img2} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Delux</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
            The Deluxe Room combines style and comfort, featuring a king-sized bed, premium linens, and a serene atmosphere. Guests can indulge in luxury toiletries, a flat-screen TV, and a relaxing seating area, perfect for a tranquil stay.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <Link
              to={`/abc?selectedValue=${selectedValue2}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                	
 Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
             Panaromic Twin
            </h3>
          </div>
          <Col>
            <img src={img3} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Panoramic Twin</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
            With breathtaking views from large windows, the Panoramic Twin room offers two comfortable twin beds and all the modern conveniences. Ideal for travelers who want to wake up to stunning landscapes while enjoying a peaceful retreat.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <Link
              to={`/abc?selectedValue=${selectedValue3}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                	
 Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
              Panaromic
            </h3>
          </div>
          <Col>
            <img src={img4} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Panoramic</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
            This room boasts sweeping panoramic views, a luxurious king-sized bed, and high-end furnishings. Perfect for those looking to immerse themselves in both elegance and nature, with access to top-notch amenities and personalized services.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>	
                  ₹856.00</del>
                  <br />
                  <div>	
                  ₹616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <Link
              to={`/abc?selectedValue=${selectedValue4}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                	
 Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Accommodation;
