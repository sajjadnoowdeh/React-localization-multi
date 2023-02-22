import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
function App() {
  // multi namespace ==>["home","common"]
  // namespace home
  // const {t,i18n} = useTranslation(["home"])
  //  namespce common
  const {t,i18n} = useTranslation(["common","home"])

  useEffect(()=>{
    // en
     if(localStorage.getItem('i18nestLng')?.length > 2){
      i18n.changeLanguage('en')
     }
  },[])

  // handlechnge with select option
  const hanldeChange = (e)=>{
    i18n.changeLanguage(e.target.value)
  }
  return (
    <Suspense fallback={'loading....'}>
      <div className="App">
        {/* {t("home")} */}
        {/* <p>{t("helloword")}</p> */}
        <h1>{t("yousuck")}</h1>
        <h2>{t("home:home")}</h2>
        <h3>{t("common:submit")}</h3>
      </div>

      <select 
        value={localStorage.getItem("i18nextLng")}
        onChange={hanldeChange}
      >
        <option value={'es'}>es</option>
        <option value={'en'}>en</option>
        <option value={'fr'}>fr</option>
        <option value={'fa_IR'}>fa_IR</option>
      </select>
    </Suspense>
  );
}

export default App;
