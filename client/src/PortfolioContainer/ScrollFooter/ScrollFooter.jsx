
import ScrollService from "../../utils/ScrollService";
import './ScrollFooter.css'


export default function Footer(props) {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
        
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}