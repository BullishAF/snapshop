import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import HomeSearchForm from "../components/bookingSearchForm";

class Home extends React.Component {
  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Welcome"
      >
        <div className="home">
          <div className="splash-image">
            <div className="container">
              <div className="popover">
                <h1>The marketplace for short-term retail space rentals</h1>

                <HomeSearchForm size="large" />

                <div className="button-container">
                  <Link href="/listings">
                    <button className="btn btn-primary">Show listings</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="annotation">
            <p>
              <img src="static/stripe.svg" width="60" alt="stripe" />
              <a className="snapshopz" href="https://snapshopz.com">
               SnapShopz 
               </a>
              {" "}partners with{" "}
              <a className="stripe" href="https://stripe.com">
                Stripe
              </a>{" "}
              by using <a href="https://stripe.com/connect">Stripe Connect</a> for
              secure onboarding and payouts.{" "}
            </p>
          </div>
        </div>
        <style jsx>{`
          .home {
            width: 100%;
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;
            bottom: 0;
          }

          h1 {
            font-size: 20px;
            font-weight: 500;
            color: #5a00ff;
            width: 100%;
            margin-bottom: 30px;
          }

          .splash-image {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
            vertical-align: bottom;

            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0) 1%,
                #aaa9ab 100%
              ),
              url(https://images.unsplash.com/photo-1562280963-8a5475740a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)
                no-repeat;
            background-size: cover;
            background-position: center center;
          }

          .popover {
            padding: 30px;
            position: relative;
            width: 100%;

            background: #ffffff;
            border: 0;
            box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2),
              0 5px 15px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
          }

          @media (min-width: 768px) {
            .popover {
              padding: 15px;
              width: 500px;
              max-width: 500px;
            }
          }
          .booking-form {
            width: 80%;
            margin: 10px 0;
          }

          .button-container {
            display: flex;
            justify-content: flex-end;
          }

          .annotation {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 50px;
            min-height: 30px;

            background: #fff;
            text-align: center;
            font-size: 14px;
          }

          .annotation img,
          .annotation a,
          .annotation p {
            display: inline-block;
            margin: 0;
          }

          .annotation img {
            margin-right: 10px;
          }

          @media (min-width: 768px) {
            .annotation {
              max-width: 700px;
              margin-left: auto;
              margin-right: auto;
              bottom: 10px;
              border-radius: 60px;
              padding: 5px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
