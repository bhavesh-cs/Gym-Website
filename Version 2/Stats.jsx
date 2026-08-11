import "../styles/stats.css";

const stats = [
    {
        number: "500+",
        title: "Active Members",
    },
    {
        number: "15+",
        title: "Certified Trainers",
    },
    {
        number: "50+",
        title: "Gym Machines",
    },
    {
        number: "8+",
        title: "Years Experience",
    },
];

function Stats() {
    return (
        <section className="stats">
            {stats.map((item, index) => (
                <div className="stat-card" key={index}>
                    <h2>{item.number}</h2>
                    <p>{item.title}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;