import Dashboard from '../../components/Dashboard';
import Header from '../../components/Header/Header';
import './style.css';
/* ↓↓↓ Zde z komponent poskládej svůj chytrý dům ↓↓↓ */
export const HomePage = () => {
  return (
  <div className="container">
   <Header title="Chytrý dům"/>
   <Dashboard data={data}/>
     <div className="lights">
       <div className="light">
         <div className="light__icon">
           <img src="./images/light-off.svg" />
         </div>
         <div className="light__name">Obývací pokoj</div>
       </div>
       <div className="light">
         <div className="light__icon">
           <img src="./images/light-on.svg" />
         </div>
         <div className="light__name">Ložnice</div>
       </div>
       <div className="light">
         <div className="light__icon">
           <img src="./images/light-on.svg" />
         </div>
         <div className="light__name">Kuchyň</div>
       </div>
       <div className="light">
         <div className="light__icon">
           <img src="./images/light-off.svg" />
         </div>
         <div className="light__name">Chodba</div>
       </div>
     </div>
     <div className="climate">
       <div className="climate__icon">
         <img src="./images/temp.svg" />
       </div>
       <div className="climate__content">
         <div className="climate__temperature">24&deg;C</div>
         <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
       </div>
       <div class="climate__controls">
         <button class="button">+</button>
         <button class="button">-</button>
       </div>
     </div>
     <div class="blinds">
       <div class="blinds__icon">
         <img src="./images/blinds-open.svg" />
       </div>
       <div class="blinds__name">Žaluzie</div>
       <div class="blinds__controls">
         <button class="button button--active">Otevřeno</button>
         <button class="button">Zavřeno</button>
       </div>
     </div>
     <div class="energy">
       <div class="energy__source">
         <div class="energy__icon">
           <img src="./images/electricity.svg" />
         </div>
         <div class="energy__consumption">
           <div class="energy__description">Elektřina</div>
           <div class="energy__value">36.7 kW</div>
         </div>
       </div>
       <div class="energy__source">
         <div class="energy__icon">
           <img src="./images/water.svg" />
         </div>
         <div class="energy__consumption">
           <div class="energy__description">Voda</div>
           <div class="energy__value">14.1 m<sup>3</sup></div>
         </div>
       </div>
     </div>
    </div>
  );
};
