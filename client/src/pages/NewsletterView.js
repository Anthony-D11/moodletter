import { useState, useEffect } from "react";
import NewsletterTemplate from "../components/NewsletterTemplate";
import axios from 'axios';

function NewsletterView({id}) {
    const base_url = process.env["REACT_APP_BACKEND_URL"];
    const newsletters_url = base_url + "/newsletters";
    const [content, setContent] = useState(null);

    useEffect(() => {
        axios.get(newsletters_url + `/get/${id}`).then((res) => {
            setContent(res.newsletter);
        })
    }, [])
    return (
        content === null ? <></>: <NewsletterTemplate title={content.title} subtitle={content.subtitle} imageText={content.imageText} textImage={content.textImage} text={content.text} image={content.image}/>
        
    );
}

export default NewsletterView;
