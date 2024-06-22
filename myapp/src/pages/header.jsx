import {Link} from "react-router-dom";
const Header =() =>{
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/025/743/270/non_2x/candle-logo-design-candle-branch-and-flame-logotype-feminine-logo-template-vector.jpg"
                    alt="love candles" width={180} /></Link>


              </div>
              <div className="col">
              <ul class="nav d-flex justify-content-end align-items-center">
  <li class="nav-item">
    <Link class="nav-link text-light" aria-current="page" to="/">Inicio</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-light" to="/blog">Blog</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-light" to="/productos">Productos</Link>
  </li>
</ul>

              </div>
            </div>
        </div>
    )
}
export default Header;