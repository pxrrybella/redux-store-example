import cinamoroll from '../img/cinamoroll.gif'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-container d-sm-flex">
                <section class="footer-first-section">
                    <h3>Kawaii Store</h3>
                    <p>This is a prototype.</p>
                    <h5>What is "Kawaii Store"?</h5>
                        <div class="d-sm-flex">
                            <img class="footer-gif" src={cinamoroll} alt="gif"/>
                            <span> 
                            <p>Kawaii Store is a personal practice project I did to practice 
                            my skills using Redux and React Hooks!
                            I also was inspired by Celine (you can visit her website <a href="https://swirl.neocities.org/">here </a>) as
                            I love her cute designs and websites' layout.
                            </p>
                            </span>
                        </div>
                </section>
                <section class="footer-second-section">
                    <p> °•. ✿ .•° </p>
                    <p>
                        Everything in here was achieved using React (Javascript, HTML, CSS - Bootstrap), React
                        Redux and React Redux Toolkit. <br/>
                        I did a course on how to use Redux Toolkit on LinkedIn Learning and ended up loving
                        the possibilities and wanted to try and use some of the features in a store-like site.
                    </p>
                        <a href="https://github.com/pxrrybella" class="btn btn-light btn-pink">Go to my GitHub profile.</a> 
                </section>
            </div>
        </footer>
    )
}

export default Footer;