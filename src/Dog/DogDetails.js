import { useState, useEffect } from "react";
import "./Dog.css";

function DogDetails() {
    const [dog, setDog] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentDescription, setNewComment] = useState("");
    const [dogId, setDogId] = useState("");

    const searchParams = new URLSearchParams(window.location.search);
    let breed = searchParams.get("breed");

    const [username, setUsername] = useState("");
    const [idUser, setIdUser] = useState("");
    useEffect(() => {
        setIdUser(localStorage.getItem("id"));
        if (idUser) {
            setUsername(localStorage.getItem("userName").slice(1, -1));
        }

        console.log(username);
        setDogId(dog.id);
    });

    useEffect(() => {
        fetch(`http://localhost:8081/dogs/byBreed/${breed}`)
            .then((response) => response.json())
            .then((data) => {
                setDog(data);
                setComments(data.comments);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleAddComm(e) {
        e.preventDefault();
        console.log(username);

        e.preventDefault();
        console.log(commentDescription);
        const addComment = {
            commentDescription,
        };

        fetch(`http://localhost:8081/comments/saveComment/${dogId}/${username}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addComment),
        });
        console.log("success");
        window.location.reload();
    }

    return (
        <div>

            <div className="text">
                <h1>{dog.breed}</h1>
                <h3>Details:</h3> <br />
                <p1>{dog.description}</p1>
                <i></i>
            </div>
            <h3>Comments</h3>
            <div className="comments">
                <div className="col-md-12"></div>
                <div className="row-md-3">
                    {comments.map((dogComment) => (
                        <div className="comment" key={dogComment.id}>
                            <li>
                                {dogComment.commentDescription}
                                <br />
                            </li>
                        </div>
                    ))}
                </div>
            </div>
            <form className="form_add_comment">
                <div className="row-md-3">
                    <div className="form-control">
                        <input
                            placeholder="Add a comment..."
                            id="description"
                            type="text"
                            size="lg"
                            required
                            value={commentDescription}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>
                    <button onClick={handleAddComm}>Add comment</button>
                </div>
            </form>

        </div>

    );
}

export default DogDetails;
