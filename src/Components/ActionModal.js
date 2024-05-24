import React from 'react';

const ActionModal = ({name,description,photo,link,func, setName,setDesc,setPhoto,setLink, id}) => {
    return (
        <div className="modal fade" id={"exampleModal"+id} tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container mt-5 mb-5 d-flex justify-content-center">
                            <form className="card px-1 py-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Название"
                                                           value={name}
                                                           onChange={(e) => setName(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Описание"
                                                           value={description}
                                                           onChange={(e) => setDesc(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Фото url"
                                                           value={photo}
                                                           onChange={(e) => setPhoto(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="url"
                                                           value={link}
                                                           onChange={(e) => setLink(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button onClick={func} type='button' data-dismiss="modal"
                                                className="btn btn-primary btn-block">{func.name === 'create' ? 'Создать' : 'Обновить'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionModal;