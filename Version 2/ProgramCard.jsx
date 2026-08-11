function ProgramCard({ program }) {
    return (
        <div className="program-card">
            <img
                src={program.image}
                alt={program.title}
            />
            <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-info">
                    <span>{program.duration}</span>
                    <span> {program.level}</span>
                </div>
                <div className="program-footer">
                    <span>{program.trainer}</span>
                    <span>{program.rating}</span>
                </div>

                <button>
                    Learn More →
                </button>
            </div>
        </div>
    );
}

export default ProgramCard;