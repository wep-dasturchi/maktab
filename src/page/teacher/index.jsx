import React from "react";

const teachers = [
  {
    id: 1,
    name: "John Smith",
    subject: "Matematika",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    experience: "10",
    young: "40",
    gender: "erkak",
  },
  {
    id: 2,
    name: "Emily Johnson",
    subject: "Biologiya",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    experience: "5",
    young: "39",
    gender: "ayol",
  },
  {
    id: 3,
    name: "Michael Brown",
    subject: "Informatika",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    experience: "6",
    young: "38",
    gender: "erkak",
  },
  {
    id: 4,
    name: "John Smith",
    subject: "Fizika",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    experience: "14",
    young: "43",
    gender: "erkak",
  },
  {
    id: 5,
    name: "Emily Johnson",
    subject: "Ona tili",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    experience: "2",
    young: "33",
    gender: "ayol",
  },
  {
    id: 6,
    name: "Michael Brown",
    subject: "Kimyo",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    experience: "3",
    young: "37",
    gender: "erkak",
  },
];

const TeachersPage = () => {
  return (
    <div className="container">
      <div className="teachers-section">
        <h2 className="teacher-text">O‘qituvchilar</h2>
        <div className="teachers-gridd">
          {teachers.map((teacher, index) => (
            <div key={index} className="teacher-card">
              <img src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              <p>{teacher.subject}</p>
              <p>Yoshi {teacher.young}</p>
              <p>Ish tajriba {teacher.experience} yil</p>
              <p>Jinsi {teacher.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;
