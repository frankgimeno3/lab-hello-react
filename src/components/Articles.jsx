import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';


function Articles() {
    return (
        <div className="App-lower">
            <div className="articlerow">
                <article>
                    <img src={icon1} alt="icon1" className="articleImages"/>
                    <h2>Declarative</h2>
                    <p>React makes it
                        painless to create
                        interactive UIs.
                    </p>
                </article>
                <article>
                    <img src={icon2} alt="icon2" className="articleImages"/>
                    <h2>Components</h2>
                    <p>Build encapsulated
                        components that
                        manage their state
                    </p>
                </article>
                <article>
                    <img src={icon3} alt="icon3" className="articleImages"/>
                    <h2>Single-way</h2>
                    <p>A set of immutable
                        values are passed to
                        the component's.
                    </p>
                </article>
                <article>
                    <img src={icon4} alt="icon4" className="articleImages"/>
                    <h2>JSX</h2>
                    <p>Statically-typed 
                        designed to run on
                        modern browsers.
                    </p>
                </article>
            </div>
        </div>
      
    );
  }
   
  export default Articles;