import React from "react";
import Jonicoco2 from "../images/Jonicoco2.jpeg";
import Portada from "../images/Portada.jpg";

const Resena = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-6 mt-2">
          <h1 className="mb-4">
            <span style={{ color: "#911625" }}>Nuestra </span>historia
          </h1>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            cupiditate corrupti suscipit, necessitatibus sit voluptatibus
            impedit repellendus eum eligendi deleniti veniam amet alias,
            corporis a saepe quisquam sed sapiente? Earum veniam laboriosam
            obcaecati dolorem veritatis magnam illum, at quis voluptatibus
            aliquam, quo quaerat illo nam provident alias aperiam quas incidunt.
            Molestias libero, deleniti culpa laboriosam cumque voluptate
            reiciendis exercitationem perspiciatis voluptatum dicta modi,
            adipisci fuga nesciunt eum suscipit placeat doloremque delectus
            autem vitae. Dolorem impedit odit, dolores veniam excepturi
            similique ut aliquam quidem deleniti assumenda ab ullam temporibus,
            delectus, aperiam voluptates quasi inventore consequatur totam ipsa.
            Provident natus cupiditate vel?
          </div>
          <div className="card mb-3  mt-5" style={{maxWidth: "1000px" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <img src={Jonicoco2} className="img-fluid rounded-start" style={{height: "350px" , width: "500px"}} alt="..." />
              </div>
              <div className="col-md-6 ">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-4">
          <div className="container">
            <img
              className="bordeado"
              src={Portada}
              style={{ width: "100%", height: "800px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resena;
