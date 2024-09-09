import "./EstateinsWorld.css"

import image1 from "./../assets/pics/Eworld1.png"
import image2 from "./../assets/pics/Eworld2.png"
import image3 from "./../assets/pics/Eworld3.png"
import image4 from "./../assets/pics/Eworld4.png"
import image5 from "./../assets/pics/Eworld5.png"
import image6 from "./../assets/pics/Eworld6.png"
import stars from "./../assets/stars.svg";





function EstateinsWorld() {
    

    return (
        <div className="EstateinsWorlds">
            <div className="EstateinsWorld">
                <img src={image1} alt="Estate world pic" />
        </div>
        <div className="EstateinsWorld">
                <img src={image2} alt="Estate world pic" />
        </div>
        <div className="EstateinsWorld">
                <img src={image3} alt="Estate world pic" />
        </div>
        <div className="EstateinsWorld grid4">
                <img src={image4} alt="Estate world pic" />
                <img src={image4} alt="Estate world pic" />
       </div>
            <div className="EstateinsWorld">
                 <img src={stars} alt="star pic" />
                <div className="details">
                    <h3>Explore Estatein;s World</h3>
                    <p>Step inside the world of Estatein,
                        where professionalism meets warmth,
                        and expertise meets passion. Our
                        gallery offers a glimpse into our
                        team and workspaces, inviting you
                        to get to know us better.</p>
            </div>
        </div>
        <div className="EstateinsWorld">
                <img src={image6} alt="Estate world pic" />
        </div>
        </div>
    )
}

export default EstateinsWorld;