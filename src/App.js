import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App_child_div'>
        <header className='Header'>
          <h2 >Remine India Private Ltd. </h2>
          <ul>
            <li>HOME</li>
            <li>OBJECTIVES</li>
            <li>CONTACT</li>
          </ul>
        </header>
        <main>

          <div className='firstdivmain '>
            <img src="https://t4.ftcdn.net/jpg/05/55/32/99/360_F_555329972_7CNEDOvl34YykCyeoRe8dMbF5yNTcDRE.jpg" alt=""></img>
            <h2 style={{
              textAlign: "center"
            }}>Building <br />Sustainable Management</h2>
            <img src="https://t4.ftcdn.net/jpg/05/75/28/67/360_F_575286707_XWzAVa98BubEYQjAy2LsfRWXDCgc2gJT.jpg" alt=""></img>
          </div>
          <div className='seconddivmain '>
            <h2>Recycling E-Waste</h2>
            <div className='seconddivmain_childs'>
              <div className='seconddivmain_childs_common'>What is E-Waste?
                <p style={{
                  marginTop: "20px",
                  fontSize: "18px",
                  textAlign: "justify"
                }}>
                  Electronic waste (e-waste), is a generic term used to describe all types of old, end-of-life or discarded electrical and electronic equipment, such as household appliances; office information and communications equipment; entertainment and consumer electronic equipment</p>
              </div>
              <div className='seconddivmain_childs_common'>Why Recycle E-Waste?
                <p style={{
                  marginTop: "20px",
                  fontSize: "18px",
                  textAlign: "justify"
                }}>
                  The recycling of e-waste serves a lot of useful purposes. For instance, include protecting human and environmental health by keeping those devices out of landfills. Or recovering the parts within the devices that still have value, and providing manufacturers with recycled metals that can be used to make new products.</p></div>
              <div className='seconddivmain_childs_common'>Why us?
                <p style={{
                  marginTop: "20px",
                  fontSize: "18px",
                  textAlign: "justify"
                }}>
                   Remine is Empowering clean and Green Nation by recycling E-waste and Li Batteries.  </p></div>

            </div>
          </div>

        </main>
        <footer>All copyrights&copy; reserved</footer>
      </div>
    </div>
  );
}

export default App;
