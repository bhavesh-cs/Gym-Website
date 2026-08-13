function MembershipCard({ plan }) {

    return (

        <div className={`membership-card ${plan.popular ? "popular" : ""}`}>

            {plan.popular && (
                <div className="popular-badge">
                    Most Popular
                </div>
            )}

            <h3>{plan.name}</h3>

            <h2>
                {plan.price}
                <span>{plan.duration}</span>
            </h2>

            <ul>

                {plan.features.map((feature, index) => (

                    <li key={index}>
                        ✓ {feature}
                    </li>

                ))}

            </ul>

            <button>
                Join Now
            </button>

        </div>

    );

}

export default MembershipCard;