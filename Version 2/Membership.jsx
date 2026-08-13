import "../styles/membership.css";

import memberships from "../data/memberships";

import MembershipCard from "./MembershipCard";

function Membership() {

    return (

        <section className="membership">

            <div className="membership-header">

                <span>MEMBERSHIP</span>

                <h2>
                    Choose Your Perfect Plan
                </h2>

                <p>
                    Flexible membership plans designed for every fitness goal.
                </p>

            </div>

            <div className="membership-grid">

                {memberships.map((plan) => (

                    <MembershipCard
                        key={plan.id}
                        plan={plan}
                    />

                ))}

            </div>

        </section>

    );

}

export default Membership;