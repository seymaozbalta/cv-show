import "./CvItem.css";

function CvItem(props) {
  //const expenseAmount=294.3;
  //<div className="cv-item__description"></div>
  return (
    <div>
      <div className="header">{props.title}</div>
      <div className="cv-item p">
        <p>
          {props.personName}
          <br />
          {props.email}
          <br />
          {props.born}
          <br />
          {props.birthDay}
          <br />
        </p>
      </div>

      <div className="header">{props.title1} </div>
      <div className="cv-item p">
        <p>
          {props.university}
          <br />
          {props.section}
        </p>
      </div>

      <div className="header">{props.title2}</div>
      <div>
        <div className="cv-item p">
          <p>
            {props.skill1}
            <br />
            {props.skill2}
            <br />
            {props.skill3}
            <br />
            {props.skill4}
          </p>
        </div>
      </div>

      <div className="header">{props.title3}</div>
      <div>
        <div className="cv-item p">
          <p>
            {props.edu1}
            <br />
            {props.edu2}
            <br />
            {props.edu3}
            <br />
            {props.edu4}
            <br />
          </p>
        </div>
      </div>

     
      <div className="header">{props.title4}</div>
      <div>
        <div className="cv-item p">
          <p>
            {props.interest1}
            <br />
            {props.interest2}
            <br />
            {props.interest3}
            <br />
            {props.interest4}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CvItem;
