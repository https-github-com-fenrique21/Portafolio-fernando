import '../assets/css/navbar.css';
import facebook from '/iconos/facebook.svg';
import instagram from '/iconos/instagram.svg';
import github from '/iconos/github.svg';
import linklin from '/iconos/linkedin1.svg';
export function Navbar() {
  return (
    <div className="box">
      <div className="fnbox">
        <a
          href="https://www.facebook.com/fernando.diaz.1291421"
          target="_blank"
        >
          <img id="fid" src={facebook}></img>
        </a>
        <a href="https://www.instagram.com/fer_21d" target="_blank">
          <img id="fid" src={instagram}></img>
        </a>
        <a href="https://github.com/fenrique21" target="_blank">
          <img id="fid" src={github}></img>
        </a>
      </div>
    </div>
  );
}
