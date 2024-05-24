import React, {useEffect, useState} from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/reg.png';
import TindogImage from '../images/task10.png';
import WigglesImage from '../images/WigglesImage.png';
import ActionModal from "./ActionModal";

const Projects = ({user}) => {
    const [name, setName] = useState('')
    const [description, setDesc] = useState('')
    const [photo, setPhoto] = useState('')
    const [link, setLink] = useState('')
    const [projects, setProjects] = useState([])
    const [created, setCreated] = useState(false)
    const create = () => {
        let url = 'http://172.20.10.2:8787/api/project';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, description, photo, link})
        }).then(res => res.json()).then(data => {
            console.log(data)
            setCreated(!created)
        })
    }
    useEffect(() => {
        let url = 'http://172.20.10.2:8787/api/project';
        fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            setProjects(data.projects)
        })
    }, [created])
    return (
        <div>

            <h1 className='projectHeading'>Проекты</h1>
            <div>
                {user ?
                    <>
                        <div className='text-center'>
                            <button type="button" className="btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal1">
                                Создать проект
                            </button>

                        </div>
                    </>
                    : ''
                }

                <div>
                    <ActionModal name={name} description={description}
                                 setDesc={setDesc} setName={setName} setPhoto={setPhoto} setLink={setLink}
                                 photo={photo} link={link} func={create} id={'1'}/>

                </div>
            </div>
            <div className='project'>

                {projects?.map((project, index) => {
                    return <ProjectBox key={index} setCreated={setCreated} id={project._id} url={project.link}
                                       desc={project.description} user={user}
                                       projectPhoto={project.photo} projectName={project.name}/>
                })}
            </div>

        </div>
    )
}

export default Projects