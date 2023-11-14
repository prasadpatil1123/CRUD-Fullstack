import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container" style= {{width:600, height:600}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow" style= {{width:500, height:600}} >
          <h2 className="text-center m-4"> User Details</h2>

          <div className="card" style={{width:400, height:400}}>
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>

                <li className="list-group-item">
                  <b>UserName:</b>
                  {user.username}
                </li>

                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
