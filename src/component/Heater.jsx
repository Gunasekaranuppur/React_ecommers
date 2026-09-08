import { Link } from "react-router-dom"

function Heater() {


  return (
    <>
    <section>
        <div className="container">
          <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
        </div>
    </section>
   
    </>
  )
}

export default Heater