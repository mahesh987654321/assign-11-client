import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebaseInit";
const Regester = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handelButton = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form onSubmit={handelButton} class="requires-validation">
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                    <div class="valid-feedback">Username field is valid!</div>
                    <div class="invalid-feedback">
                      Username field cannot be blank!
                    </div>
                  </div>

                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      required
                    />
                    <div class="valid-feedback">Email field is valid!</div>
                    <div class="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>

                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <div class="valid-feedback">Password field is valid!</div>
                    <div class="invalid-feedback">
                      Password field cannot be blank!
                    </div>
                  </div>

                  <div class="form-button mt-3">
                    <button id="submit" type="submit" class="btn btn-primary">
                      Register
                    </button>
                    <Link to={"/login"}>Already have a Account </Link>
                  </div>
                  <div>
                    <p>Social</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
