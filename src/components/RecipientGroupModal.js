import Modal from 'react-bootstrap/Modal';
function RecipientGroupModal({id}) {
    let emailList = ["abc@gmail.com, abc12345@gmail.com, anthony@gmail.com"]

    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">Recipient Group</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column">
                            <input type="text" placeholder="Group name" />
                            <div className="d-flex flex-row">
                                <input type="text" placeholder="Recipient email"/>
                                <button className="btn btn-primary">Add</button>
                            </div>
                            <div>
                                {
                                    emailList.map((email, id) => {
                                        <div className="d-flex flex-row">
                                            <span>{email}</span>
                                            <button>Remove</button>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary">Save</button>
                        <button className="btn btn-secondary" data-bs-dismiss="modal"> Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipientGroupModal;



