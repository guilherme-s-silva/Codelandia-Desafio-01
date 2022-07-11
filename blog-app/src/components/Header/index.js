import "./styles.css"
import SearchIcon from "../../assets/search-icon.svg";

export default function Header() {
    return (
        <div className="container-header">
            <div className="title-header">
                <p>Codelândia</p>
                <p>Blog</p>
            </div>
            <div className="input-header">
                <img src={SearchIcon} alt="Search"/>
                <input placeholder="Pesquisar no blog" /> 
            </div>
        </div>
    )
}