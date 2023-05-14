import img from './img/about-img.webp';
import styles from "./about.module.css";
function About(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">About Us</h1>
                    <div className="about-text">
                        <figure className={styles.figure}>
                            <img  src={img} alt="about" className={styles.img} />
                        </figure>
                        
                    </div>
                    <p>We are a solid company and always prioritize consumer convenience. We have a great mission to continue to innovate and develop in everything. If you are looking for a solid company, we are the answer you are looking for. We were established since 2019 and have served many domestic and foreign consumers.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        
                </div>
            </div>
        </div>
        

        




    )
}

export default About;