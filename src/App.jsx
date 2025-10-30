import "./index.css";
import React from "react"; 
import profile from "./data/profile";
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiUser, FiDownload } from "react-icons/fi";
import { MdSchool } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";

const iconMap = {
  phone: <FiPhone />,
  mail: <FiMail />,
  map: <FiMapPin />,
  birthday: <FiCalendar />,
  gender: <FiUser />,
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar-wrap">
        <img src={profile.avatar} alt="avatar" className="avatar" />
      </div>
      <h1 className="name">{profile.name}</h1>
      <p className="title">{profile.title}</p>

      <div className="block">
        <h3 className="block-title">Liên hệ</h3>
        <ul className="list">
          {profile.contacts.map((c, i) => (
            <li key={i} className="list-item">
              <span className="ico">{iconMap[c.icon]}</span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="block">
        <h3 className="block-title">Sở thích</h3>
        <ul className="list">
          {profile.hobbies.map((h, i) => (
            <li key={i} className="list-item">{h}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Section({ icon, title, children }) {
  return (
    <section className="section">
      <div className="section-head">
        <span className="section-ico">{icon}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function App() {
  const downloadPdf = () => window.print();

  return (
    <div className="page">
      <Sidebar />
      <main className="content">
        <div className="actions no-print">
          <button className="btn" onClick={downloadPdf}>
            <FiDownload /> Tải CV (PDF)
          </button>
        </div>

        <Section icon={<MdSchool />} title="Học vấn">
          <div className="edu">
            <div className="edu-time">{profile.education.time}</div>
            <div>
              <h3 className="edu-school">{profile.education.school}</h3>
              <p className="muted">{profile.education.major}</p>
              <p>{profile.education.desc}</p>
            </div>
          </div>
        </Section>

        <Section icon={<TbTargetArrow />} title="Mục tiêu nghề nghiệp">
          <p>{profile.objective}</p>
        </Section>

        <Section icon={<GiSkills />} title="Kĩ năng chuyên môn">
          <ul className="chips">
            {profile.skills.map((s, i) => (
              <li key={i} className="chip">{s}</li>
            ))}
          </ul>
        </Section>

        <Section icon={<GoProjectSymlink />} title="Dự án cá nhân">
          <ul className="proj">
            {profile.projects.map((p, i) => (
              <li key={i}><a href={p.url} target="_blank" rel="noreferrer">{p.url}</a></li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}
