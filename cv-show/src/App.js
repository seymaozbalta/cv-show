//import { Container, Row } from "reactstrap";
import CvItem from "./components/CvItem";

function App() {
  const informations = [
    {
      id: "i1",
      title: "Kişisel Bilgiler",
      personName: "Şeyma Özbalta",
      email: "seymaozbalta@gmail.com",
      born: "Trabzon",
      birthDay: "10.04.2000",
    },
    {
      id: "i2",
      title1: "Eğitim Bilgileri",
      university: "Trakya Üniversitesi",
      section: "Bilgisayar Mühendisliği",
    },
    {
      id: "i3",
      title2: "Beceriler",
      skill1: "Python",
      skill2: "JavaScript",
      skill3: "Java",
      skill4: "Android mobil uygulama geliştirme",
    },
    {
      id: "i4",
      title3: "Eğitimler",
      edu1: "Python Course-THK Uni",
      edu2: "Java Course: BTK",
      edu3: "Android mobile App Course: GDG",
      edu4: "Photoshop A1 Course",
    },
    {
      id: "i5",
      title4: "İlgi Alanları",
      interest1: "Bir şeyler hakkında yazı yazmak",
      interest2: "Voleybol oynamak",
      interest3:
        "Yöneylem araştırması gibi sayısal işlem içeren sorular çözmek",
      interest4: "Psikoloji kitapları okumak",
    },
  ];

  return (
    <div >
     
        <CvItem title={informations[0].title}
              personName={informations[0].personName}
              email={informations[0].email}
              born={informations[0].born}
              birthDay={informations[0].birthDay}
              title1={informations[1].title1}
              university={informations[1].university}
              section={informations[1].section}
              title2={informations[2].title2}
              skill1={informations[2].skill1}
              skill2={informations[2].skill2}
              skill3={informations[2].skill3}
              skill4={informations[2].skill4}
              title3={informations[3].title3}
              edu1={informations[3].edu1}
              edu2={informations[3].edu2}
              edu3={informations[3].edu3}
              edu4={informations[3].edu4}
              title4={informations[4].title4}
              interest1={informations[4].interest1}
              interest2={informations[4].interest2}
              interest3={informations[4].interest3}
              interest4={informations[4].interest4}

              />
        
     
    </div>
  );
}

export default App;
