import '../components/Project.css'
import project_theme from '../assets/project.jpg'
function Project(){
    const projectData=[
        {
            p_no:1,
            p_name:"e-commerce",
            p_desc:"loremjhgfkuytfkuktvghjcfyhdvhyhbhgkuvyfbjhgdfvftncfthdvng"
        },
        {
            p_no:2,
            p_name:"e-commerce",
            p_desc:"loremjhgfkuytfkuktvghjcfyhdvhyhbhgkuvyfbjhgdfvftncfthdvng"
        },
        {
            p_no:3,
            p_name:"e-commerce",
            p_desc:"loremjhgfkuytfkuktvghjcfyhdvhyhbhgkuvyfbjhgdfvftncfthdvng"
        },
        {
            p_no:4,
            p_name:"e-commerce",
            p_desc:"loremjhgfkuytfkuktvghjcfyhdvhyhbhgkuvyfbjhgdfvftncfthdvng"
        },
    ]
    return(
       <div className='project-container'>
        <div className="project-logo">
            <h2>Project</h2>
        </div>
        <div className="project-img">
            <img src={project_theme} alt="" />
        </div>
        <div className="project-contain">
            {projectData.map((projectData,index)=>(
            <div key={index} className='projects'>
                <h2 className='pro-no'>{projectData.p_no}</h2>
                <h2 className='pro-name'>{projectData.p_name}</h2>
                <h2 className='pro-desc'>{projectData.p_desc}</h2>
            </div>
            ))}
        </div>
       </div>
    );
}
export default Project;