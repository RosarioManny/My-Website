import { Link } from "react-router-dom";
import { theme } from "/src/styles/style.js"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnterSite = () => {
  
  // useEffect(() => {
  //   const navigate = useNavigate()
  //   console.log("loading")
  //   navigate("/")
  // }, [])

  return(
    <>
      <section className="flex-col">
        <div className={`${theme.bodyText.home}`}>
          <div className="slides">
            </div>
            Incoming error
            <br/>
            Your next Developer...
        </div>
      </section>
    </>
  )
}

export default EnterSite