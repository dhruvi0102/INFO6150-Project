import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useRef,
} from "react";
import { useParams, useHistory } from "react-router-dom";
import gsap from "gsap";
import axios from "../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreLoader from "../../shared/components/PreLoader/PreLoader";
import RentForm from "../components/RentForm";
import Layout from "../../shared/components/Layout/Layout";
import { AuthContext } from "../../shared/contexts/AuthContext";
import { MdCastle, MdBeachAccess,MdCabin } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";

const DetailRentPage = (props) => {
  const { userId } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState({});
  let tl = useRef();
  let title = useRef(null);
  let line = useRef(null);
  const history = useHistory();
  const RentalId = useParams().id;

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .from(title, 1.5, { scale: 0.5, opacity: 0 })
      .from(line, 2, { width: 0 }, 0.5);
  }, []);

  //Fetch single Rental element
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/fleet/${RentalId}`)
      .then((res) => {
        setIsLoading(false);
        setSelected(res.data.Rental);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [RentalId]);

  //Make an order
  const onOrderHandler = useCallback(
    (order) => {
      setIsLoading(true);
      axios
        .post("/orders", order, { "Content-Type": "application/json" })
        .then((res) => {
          setIsLoading(false);
          history.push(`/my-orders/${userId}`);
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error("Account is Suspended please contact the Administrator");
          console.log("Custom Error ", err.data);
        });
    },
    [history, userId]
  );
  

  let fixedPrice;
  if (selected.price) {
    fixedPrice = selected.price.toFixed(2);
  }

  let image;
  if (selected.image) {
    image = selected.image;
  }
  const styleme = {
    
    paddingtop: 10,
  };

  return (
    <Layout>
      <h1 ref={(el) => (title = el)} className="home-title">
        Rent a place, it has never been easier{" "}
      </h1>
      <p ref={(el) => (line = el)} className="line" />
      <div className="rent-page-wrapper">
        {isLoading ? (
          <PreLoader />
        ) : (
          <div className="item-rental" style={styleme}>
            <p className="name">
              {selected.name}
              <span> {selected.model}</span>
            </p>
            <div className="options">
              <p style={{ textTransform: "capitalize" }} className="rental">
                <span>
                  <MdCabin />
                </span>{" "}
                {selected.RentalType}
              </p>
              <p className="rental-type">
                <span>
                  <MdBeachAccess />
                </span>{" "}
                {selected.seats}
              </p>
              <p className="rental-type">
                <span>
                  <MdCastle />
                </span>{" "}
                {selected.gears}
              </p>
              <p className="rental-type">
                <span>
                  <GiTreehouse />
                </span>{" "}
                {selected.clima ? "yes" : "no"}
              </p>
            </div>
            <img src={image} alt="Rental" />
            <p className="price">
              Price - € <span>{fixedPrice}</span> /For a Day{" "}
            </p>
          </div>
        )}
        <RentForm RentalId={RentalId} onOrderHandler={onOrderHandler} />
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default DetailRentPage;
