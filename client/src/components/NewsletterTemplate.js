
function NewsletterTemplate({title, subtitle, imageText, textImage, text, image, sendClickComponentEventToParent}) {
    let apple = require("../assets/apple.jpg");
    let banana = require("../assets/banana.jpg");
    const handleClickComponentEvent = (event) => {
        sendClickComponentEventToParent(event.target.dataset.key);
    }
    return (
    <div className="newsletter-page text-center d-flex flex-column align-items-center">
        <h1 data-key="1" className="my-2" onClick={handleClickComponentEvent}>{title.text}</h1>
        <div data-key="2" className="d-flex my-3" onClick={handleClickComponentEvent}>
            <h2 data-key="2" className="bg-info p-2 mx-2 rounded-2">{subtitle.text_1}</h2>
            <h2 data-key="2" className="p-2  mx-2">{subtitle.text_2}</h2>
        </div>
        <div data-key="3" className="d-flex flex-row mx-5 my-4 text-start" onClick={handleClickComponentEvent}>
            <img data-key="3"className="img-thumbnail rounded-2 me-4" src={imageText.image} alt="" style={{width: "40%"}}/>
            <span data-key="3">{imageText.text}</span>
        </div>
        <div data-key="4" className="d-flex flex-row mx-5 my-4 text-start" onClick={handleClickComponentEvent}>
            <span data-key="4" className="me-4">{textImage.text}</span>
            <img data-key="4" className="img-thumbnail rounded-2" src={textImage.image} alt=""  style={{width: "40%"}}/>
        </div>
        <div data-key="5" className="d-flex flex-row mx-5 my-4  text-start" onClick={handleClickComponentEvent}>
            <span data-key="5">{text.text}</span>
        </div>
        <div data-key="6" className="d-flex flex-row mx-5 my-4  text-start" onClick={handleClickComponentEvent}>
            <img data-key="6" className="img-thumbnail rounded-2" src= {image.image}alt="" />
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
