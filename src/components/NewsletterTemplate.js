
function NewsletterTemplate({sendClickComponentEventToParent}) {
    let apple = require("../assets/apple.jpg");
    let banana = require("../assets/banana.jpg");
    const handleClickComponentEvent = (event) => {
        sendClickComponentEventToParent(event.target.dataset.key);
    }
    return (
    <div className="newsletter-page text-center d-flex flex-column align-items-center">
        <h1 data-key="1" className="my-2" onClick={handleClickComponentEvent}>Title</h1>
        <div data-key="2" className="d-flex my-3" onClick={handleClickComponentEvent}>
            <h2 data-key="2" className="bg-info p-2 mx-2 rounded-2">Subtitle 1</h2>
            <h2 data-key="2" className="p-2  mx-2">Subtitle 2</h2>
        </div>
        <div data-key="3" className="d-flex flex-row mx-5 my-4 text-start" onClick={handleClickComponentEvent}>
            <img data-key="3"className="img-thumbnail rounded-2 me-4" src={apple} alt="" style={{width: "40%"}}/>
            <span data-key="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        <div data-key="4" className="d-flex flex-row mx-5 my-4 text-start" onClick={handleClickComponentEvent}>
            <span data-key="4" className="me-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <img data-key="4" className="img-thumbnail rounded-2" src={apple} alt=""  style={{width: "40%"}}/>
        </div>
        <div data-key="5" className="d-flex flex-row mx-5 my-4  text-start" onClick={handleClickComponentEvent}>
            <span data-key="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        <div data-key="6" className="d-flex flex-row mx-5 my-4  text-start" onClick={handleClickComponentEvent}>
            <img data-key="6" className="img-thumbnail rounded-2" src={banana} alt="" />
        </div>
        <div data-key="7" className="d-flex flex-row mx-5 my-4" onClick={handleClickComponentEvent}>
            <a data-key="7" href="" className="me-5">
                <div data-key="7" className="btn btn-primary">Buy Now</div>
            </a>
        </div>
    </div>
    );
}

export default NewsletterTemplate;
