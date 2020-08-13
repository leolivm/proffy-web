import React from "react";
import whatsapp from "../../assets/icons/whatsapp.svg";
import api from "../../services/api";
import "./styles.css";

const TeacherItem = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", { user_id: teacher.id });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.avatar} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          href={`http://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsapp} alt={whatsapp} />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
