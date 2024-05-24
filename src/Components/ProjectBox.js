import React, {useState} from 'react';
import {FaGithub} from "react-icons/fa";
import ActionModal from "./ActionModal";

const ProjectBox = ({id, projectPhoto, projectName, url, desc, setCreated, user}) => {

    const [name, setName] = useState(projectName)
    const [description, setDesc] = useState(desc)
    const [photo, setPhoto] = useState(projectPhoto)
    const [link, setLink] = useState(url)
    const deleteProject = async () => {
        const response = await fetch(`http://192.168.0.100:8787/api/project/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        setCreated(prev => !prev);
    }

    const updateProject = async () => {
        const response = await fetch(`http://192.168.0.100:8787/api/project/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, description, photo, link})
        });
        const data = await response.json();
        console.log(data);
        setCreated(prev => !prev);
    }
    return (
        <><ActionModal name={name} description={description}
                       setDesc={setDesc} setName={setName} setPhoto={setPhoto} setLink={setLink}
                       photo={photo} link={link} func={updateProject} id={id}/>
            <div className='projectBox'>

                <img className='projectPhoto' src={projectPhoto} alt="Project display"/>
                <div>
                    <br/>
                    <h3>{projectName}</h3>
                    <br/>
                    {desc ? desc.substr(0, 100) + '...' : ''}
                    <br/>

                    <a href={url ?? ''} target='_blank'>
                        <button className='projectbtn'><FaGithub/> Github</button>
                    </a>
                    {user ?
                        <>
                            <button className='deletebtn' onClick={deleteProject}>Удалить</button>
                            <div className='text-center'>
                                <button type="button" className="updatebtn" data-toggle="modal"
                                        data-target={'#exampleModal' + id}>
                                    Обнавить
                                </button>

                            </div>
                        </>
                        : ''
                    }


                </div>
            </div>
        </>
    )
}

export default ProjectBox