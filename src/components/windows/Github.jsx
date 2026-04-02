import { useState } from 'react'

import githubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import "./github.scss"

function Github({ windowName, setWindowState }) {

    const techColors = {
        "React.js": { bg: "#61dafb20", color: "#61dafb" },
        "Next.js": { bg: "#00000020", color: "#ffffff" },
        "Redux": { bg: "#764abc20", color: "#764abc" },
        "Context API": { bg: "#61dafb20", color: "#61dafb" },
        "React Router": { bg: "#ca424520", color: "#ca4245" },

        
        "JavaScript (ES6+)": { bg: "#f7df1e20", color: "#f7df1e" },
        "JavaScript (ES6)": { bg: "#f7df1e20", color: "#f7df1e" },
        "Node.js": { bg: "#3c873a20", color: "#3c873a" },
        "Express.js": { bg: "#44444420", color: "#cccccc" },

        
        "HTML5": { bg: "#e34c2620", color: "#e34c26" },
        "CSS3": { bg: "#264de420", color: "#264de4" },
        "SCSS": { bg: "#cd679920", color: "#cd6799" },
        "Tailwind CSS": { bg: "#38bdf820", color: "#38bdf8" },

    
        "MongoDB": { bg: "#4db33d20", color: "#4db33d" },
        "MySQL": { bg: "#00758f20", color: "#00758f" },
        "Firebase": { bg: "#ffca2820", color: "#ffca28" },

        
        "MERN Stack": { bg: "#61dafb20", color: "#61dafb" },
        "MEAN Stack": { bg: "#dd003120", color: "#dd0031" },
        "Full Stack": { bg: "#8e44ad20", color: "#8e44ad" },
        "REST API": { bg: "#00bcd420", color: "#00bcd4" },
        "GraphQL": { bg: "#e1009820", color: "#e10098" },
        "API Integration": { bg: "#00bcd420", color: "#00bcd4" },

        "UI/UX Design": { bg: "#9b59b620", color: "#9b59b6" },
        "Responsive Design": { bg: "#3498db20", color: "#3498db" },
        "Dynamic UI": { bg: "#16a08520", color: "#16a085" },
        "Interactive UI": { bg: "#1abc9c20", color: "#1abc9c" },

        
        "State Management": { bg: "#8e44ad20", color: "#8e44ad" },
        "Dynamic Routing": { bg: "#27ae6020", color: "#27ae60" },
        "DOM Manipulation": { bg: "#f39c1220", color: "#f39c12" },
        "Event Handling": { bg: "#d3540020", color: "#d35400" },
        "Productivity Tools": { bg: "#2ecc7120", color: "#2ecc71" }
    };

    const getTechStyle = (tag) => {
        if (tag.toLowerCase().includes("react")) return { bg: "#61dafb20", color: "#61dafb" };
        if (tag.toLowerCase().includes("js")) return { bg: "#f7df1e20", color: "#f7df1e" };
        if (tag.toLowerCase().includes("html")) return { bg: "#e34c2620", color: "#e34c26" };
        if (tag.toLowerCase().includes("css")) return { bg: "#264de420", color: "#264de4" };
        if (tag.toLowerCase().includes("api")) return { bg: "#00bcd420", color: "#00bcd4" };
        if (tag.toLowerCase().includes("design")) return { bg: "#9b59b620", color: "#9b59b6" };
        if (tag.toLowerCase().includes("stack")) return { bg: "#8e44ad20", color: "#8e44ad" };

        return techColors[tag] || { bg: "#ffffff10", color: "#ccc" };
    };

    const [hoverId, setHoverId] = useState(null);
    const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
        return <div className="card">
            <img src={data.image} alt="" />
            <span>
                <h1>{data.title}</h1>
                <p>{data.description}</p>

                <div className="tags">
                    {data.tags.map((tag, i) => {
                        const style = getTechStyle(tag);
                        return (
                            <p
                                key={i}
                                className="tag"
                                style={{
                                    backgroundColor: style.bg,
                                    color: style.color,
                                    "--tag-color": style.color
                                }}> {tag}</p>
                        )
                    }


                    )}
                </div>

                <div
                    className="urls"


                >
                    <a href={data.repoLink}
                        target="_blank">
                        <i className="ri-folder-2-line"></i>
                    </a>

                    {data.demoLink && (
                        <a href={data.demoLink}
                         rel="noopener noreferrer"
                            target="_blank"
                            onMouseEnter={() => setHoverId(data.id)}
                            onMouseLeave={() => setHoverId(null)}>
                            <i className={hoverId === data.id ? "ri-eye-line" : "ri-eye-close-fill"}></i>
                        </a>
                    )}
                </div>
            </span>
        </div>
    }
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="cards">
                {githubData.map(project => {
                    return <GitCard data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github