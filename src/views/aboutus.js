import React from "react";
import HomeLayout from "../components/home-layout";
import travel from "../assets/images/poolside.jpg"
const Garelley=()=>{
    return(
        <HomeLayout>
            <div className="about-container">
                
            <h2 className="clip">More About </h2>
            <h1>Rwanda Booking Tours</h1>
            <div className="content">
                <div className="content1">
                    <p>We receive lots of enquiries from bloggers <br/>
                        and vloggers 
                        - which is totally awesome!<br/>
                        Social media has transformed 
                        travel<br/> and you are all amazing!
                        sing photos and <br/> videos
                         we send you of your trip or
                          any that you<br/> take yourself, 
                         just write your blog </p>

                </div>
                <div className="content2">
                <img src={travel}/>

</div>
            </div>

            <div className="content-abouts">
            <div className="content-about">
                <h3>Rwanda Booking foundation</h3>
                <p>rwanda bioking tours believes that the prosperity of business 
                    and society is inextricably linked and as such investing in society 
                    generates a positive multiplier effect that will benefit society,
                     the environment and the economy. To actualize this belief, 
                     rwanda bioking tours Foundation to deliver a positive
                      impact to society through social investment programs 
                      that create shared value for its stakeholders. 
                      The Foundation’s program approach is to work through implementing
                       partners to deliver the objectives of the Foundation by seeking to
                        leverage and complement resources, skills, experiences, knowledge and
                         track records of partner organizations in a catalytic and value-adding manner.
                     The Foundation is guided by the following:</p>
                     

<select name="cars" id="cars">
  <option value="volvo">all</option>
  <option value="saab">to day</option>
  <option value="mercedes">news</option>
  <option value="audi">others</option>
</select>
                     <h3>Our Dignity</h3>
                     <h4>our vison </h4>
                     <p>Our vision is to see communities whose physical, social and
                          economic environments are positively impacted as 
                          a result of our partnership.</p>
                          <h3>Our Mission</h3>
    
                     <p>Our vision is to see communities whose physical, social and
                          economic environments are positively impacted as 
                          a result of our partnership.</p>
                          <h3>Core Values</h3>
                          <ul>
                              <li>Trust</li>
                              <li>Integrity</li>
                              <li>Respect </li>
                              <li>Innovation</li>
                             </ul>
                            
                             


            </div>
            </div>
            

            </div>

        </HomeLayout>
    )
}
export default Garelley;