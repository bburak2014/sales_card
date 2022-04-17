 import React, { useState, useEffect } from "react";

import "../Details.css";

function Details() {
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);
  const [Count3, setCount3] = useState(0);
  const [Open,setOpen] = useState(false)
  const [Open1,setOpen1] = useState(false)
  const [Open2,setOpen2] = useState(false)
  const [Total,setTotal] = useState(0)
  const [KDV,setKDV] = useState(0)
  const [Subtotal,setSubtotal] = useState(0)
  const [offer,setoffer] = useState(0)
  const [cargo,setcargo] = useState(9.9)
  const [realTotal,setrealTotal] = useState(0)
  const [inputValue, setInputValue] = useState(false);

  const styles = {
    opacityIn:{
      backgroundColor: "orange",
      color: "white",
      fontSize: "12px",
      opacity: "0.5",
      border: "1px solid orange",
    backgroundColor: "orange"
    },
    opacityOut:{
      backgroundColor: "orange",
      color: "white",
      fontSize: "12px",
      opacity: "1",
      border: "1px solid orange",
    backgroundColor: "orange"
    }
  };
 const increase1=()=>(
  setCount1(Count1+1),
  Count1>=0?setOpen(true):setOpen(false)
  
  
)
const decrease1=()=>(
  Count1>0?setCount1(Count1-1):setCount1(Count1),
  Count1>1?setOpen(true):setOpen(false)
)
const increase2=()=>(
  setCount2(Count2+1),
  Count2>=0?setOpen1(true):setOpen1(false)

)
const decrease2=()=>(
  Count2>0?setCount2(Count2-1):setCount2(Count2),
  Count2>1?setOpen1(true):setOpen1(false)

)
const increase3=()=>(
  setCount3(Count3+1),
  Count3>=0?setOpen2(true):setOpen2(false)

)
const decrease3=()=>(
  Count3>0?setCount3(Count3-1):setCount3(Count3),
  Count3>1?setOpen2(true):setOpen2(false)

)

  useEffect(() => {
   setTotal((Count1*15+Count2*12+Count3*11).toFixed(2))
   setKDV((Number(Subtotal*0.18)).toFixed(2))
   setSubtotal((Total-offer).toFixed(2))
   setoffer(Number(18.5).toFixed(2))
   
    setrealTotal((Number(Subtotal)+Number(KDV)).toFixed(2))
    Number(Total)>100?setInputValue(true):setInputValue(false)
});
useEffect(() => {
     if(Number(Total)>100){
      setcargo(0)
        
    }
    else {
      setcargo(9.99)
 
    }
      
},[inputValue==true])
 
  return (
    <>
      <div className="container d-none d-lg-block mt-5 mb-5">
        <div className="row    ">
          <div className="col-md-8 offset-md-0 text-center   ">
            <div className="card   mb-1">
              <div className="card-body" style={{ color: "orange" }}>
                <i className="fa-solid fa-truck"></i> Kargo Bedava
              </div>
            </div>
            <div className="card   mb-1">
              <div className="card-body row">
                <div className="col-3">
                  <img className="imgProduct" src="erik.jpeg" />
                </div>
                <div className="col-3">
                  <p className="ProductName">Erik</p>
                  <hr></hr>
                  <p className="ProductCode">Ürün kodu:1001</p>
                  <hr></hr>
                </div>
                <div className="col-md-3 mt-5">
                  <div className="row">
                    <div className="col-2">
                      {" "}
                      <button onClick={decrease1}  style={Open==false?styles.opacityIn:styles.opacityOut}>&mdash;</button>
                    </div>
                    <span className="col-4">
                    <span    >{Count1}</span>

                    </span>
                    <div className="col-3">
                      {" "}
                      <button onClick={increase1} className="btn1">
                        <i className="fa-solid fa-plus"></i>
                      </button>{" "}
                    </div>
                    <div className="col-3">
                      {" "}
                      <button className="btn2">
                        <i className="fa-solid fa-trash"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-3 mt-4 p-1">
                  <p className="TotalOld"><del>{(Count1*25).toFixed(2)} &#x20BA; 
</del></p> 
                  <span className="Total">{(Count1*15).toFixed(2)} &#x20BA; 
</span>
                </div>
              </div>
            </div>
            <div className="card   mb-1">
              <div className="card-body row">
                <div className="col-3">
                  <img className="imgProduct" src="üzüm.jpeg" />
                </div>
                <div className="col-3">
                  <p className="ProductName">Üzüm</p>
                  <hr></hr>
                  <p className="ProductCode">Ürün kodu:1002</p>
                  <hr></hr>
                </div>
                <div className="col-md-3 mt-5">
                  <div className="row">
                    <div className="col-2">
                      {" "}
                      <button onClick={decrease2} style={Open1==false?styles.opacityIn:styles.opacityOut} className="btnDisable">&mdash;</button>
                    </div>
                    <span className="col-4">
                    <span className="inpt"  type="text" >{Count2} </span>
                    </span>
                    <div className="col-3">
                      {" "}
                      <button onClick={increase2} className="btn1">
                        <i className="fa-solid fa-plus"></i>
                      </button>{" "}
                    </div>
                    <div className="col-3">
                      {" "}
                      <button className="btn2">
                        <i className="fa-solid fa-trash"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-3 mt-4 p-1">
                  <p className="TotalOld"><del>{(Count2*18).toFixed(2)} &#x20BA; 
</del></p> 
                  <span className="Total">{(Count2*14).toFixed(2)} &#x20BA; 
</span>
                </div>
              </div>
            </div>
            <div className="card   mb-1">
              <div className="card-body row">
                <div className="col-3">
                  <img className="imgProduct" src="şeftali.jpg" />
                </div>
                <div className="col-3">
                  <p className="ProductName">Şeftali</p>
                  <hr></hr>
                  <p className="ProductCode">Ürün kodu:1003</p>
                  <hr></hr>
                </div>
                <div className="col-md-3 mt-5">
                  <div className="row">
                    <div className="col-2">
                      {" "}
                      <button onClick={decrease3} style={Open2==false?styles.opacityIn:styles.opacityOut} className="btnDisable">&mdash;</button>
                    </div>
                    <span className="col-4">
                    <span className="inpt"  type="text" >{Count3}</span>
                    </span>
                    <div className="col-3">
                      {" "}
                      <button onClick={increase3} className="btn1">
                        <i className="fa-solid fa-plus"></i>
                      </button>{" "}
                    </div>
                    <div className="col-3">
                      {" "}
                      <button className="btn2">
                        <i className="fa-solid fa-trash"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-3 mt-4 p-1">
                  <p className="TotalOld"><del>{(Count3*14).toFixed(2)}&#x20BA; 
</del></p> 
                  <span className="Total">{(Count3*11).toFixed(2)} &#x20BA; 
</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 card  " style={{ marginLeft: "20px",borderRadius:"20px" }}>
            <h3 className="mt-3 mb-3" style={{textAlign:"center"}}>SİPARİŞ ÖZETİ</h3>
            <p ><span style={{float:"left"}}>Sepet Toplam</span><span style={{float:"right"}}>{Total}&#x20BA;</span></p>
            <p ><span style={{float:"left",color:"orange"}}>5 Al 4 Öde</span><span style={{float:"right",color:"orange"}}>-{offer} &#x20BA;</span></p>
            <p ><span style={{float:"left"}}>Ara Toplam</span><span style={{float:"right"}}>{Subtotal} &#x20BA;</span></p>
            <p ><span style={{float:"left"}}>KDV (18%)</span><span style={{float:"right"}}>{KDV} &#x20BA;</span></p>

            <p ><span style={{float:"left"}}>Kargo</span><span style={{float:"right"}}>{cargo} &#x20BA;</span></p>
            <p ><span style={{float:"left",color:"orange"}}>100 &#x20BA; Üzeri Kargo</span><span style={{float:"right",color:"orange"}}>-9.99 &#x20BA;</span></p>
            <p ><span style={{float:"left",fontWeight:"bold"}}>TOPLAM</span><span style={{float:"right",fontWeight:"bold"}}>{(Number(realTotal)+Number(cargo)).toFixed(2)} &#x20BA;</span></p>

           <div className="row">
             <div className="col-6"><button type="button" className="btn btn-outline-warning warningOut">Alışverişe Devamet</button></div>
             <div className="col-6"><button type="button" className="btn btn-warning warning">Alışverişi Tamamla</button></div>

           </div>



          </div>
        </div>
      </div>
      <div className="container-fluid d-block d-lg-none mt-5 mb-5">
        <div className="row    ">
        <div className="col-md-12 text-center   ">
            <div className="card   mb-1">
              <div className="card-body" style={{ color: "orange" }}>
                <i className="fa-solid fa-truck"></i> Kargo Bedava
              </div>
            </div>
            <div className="card   mb-1">
              <div className="card-body row">
              <div className="col-12 col-md-3  ">
                  <img className="imgProduct" src="erik.jpeg" />
                </div>
                <div className="col-12 col-md-3 mt-5">
                  <p className="ProductName">Erik</p>
                  <hr></hr>
                  <p className="ProductCode">Ürün kodu:1001</p>
                  <hr></hr>
                </div>
                <div className="col-12 col-md-3 mt-5">
                  <div className="row">
                    <div className="col-3">
                      {" "}
                      <button onClick={decrease1} style={Open==false?styles.opacityIn:styles.opacityOut}>&mdash;</button>
                    </div>
                    <span className="col-3">
                    <span className="inpt"  type="text"   >{Count1}</span>
                    </span>
                    <div className="col-3">
                      {" "}
                      <button onClick={increase1} className="btn1">
                        <i className="fa-solid fa-plus"></i>
                      </button>{" "}
                    </div>
                    <div className="col-3">
                      {" "}
                      <button className="btn2">
                        <i className="fa-solid fa-trash"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mt-4">
                  <p className="TotalOld"><del>{(Count1*25).toFixed(2)} &#x20BA; 
</del></p> 
                  <span className="Total">{(Count1*15).toFixed(2)} &#x20BA; 
</span>
                </div>
              </div>
            </div>
            <div className="card   mb-1">
              <div className="card-body row">
              <div className="col-12 col-md-3  ">
                  <img className="imgProduct" src="üzüm.jpeg" />
                </div>
                <div className="col-12 col-md-3 mt-5">
                  <p className="ProductName">Üzüm</p>
                  <hr></hr>
                  <p className="ProductCode">Ürün kodu:1002</p>
                  <hr></hr>
                </div>
                <div className="col-12 col-md-3 mt-5">
                  <div className="row">
                    <div className="col-3">
                      {" "}
                      <button onClick={decrease2} style={Open1==false?styles.opacityIn:styles.opacityOut} className="btnDisable">&mdash;</button>
                    </div>
                    <span className="col-3">
                    <span className="inpt"  type="text" >{Count2} </span>
                    </span>
                    <div className="col-3">
                      {" "}
                      <button onClick={increase2} className="btn1">
                        <i className="fa-solid fa-plus"></i>
                      </button>{" "}
                    </div>
                    <div className="col-3">
                      {" "}
                      <button className="btn2">
                        <i className="fa-solid fa-trash"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mt-4">
                  <p className="TotalOld"><del>{(Count2*18).toFixed(2)} &#x20BA; 
</del></p> 
                  <span className="Total">{(Count2*14).toFixed(2)} &#x20BA; 
</span>
                </div>
              </div>
            </div>
            <div className="card   mb-1">
              <div className="card-body row">
              <div className="col-12 col-md-3  ">
                  <img className="imgProduct" src="şeftali.jpg" />
                </div>
                <div className="col-12 col-md-3 mt-5">
                  <p className="ProductName">Şeftali</p>
                  <hr></hr>
                  <p className="ProductCode">Ürün kodu:1003</p>
                  <hr></hr>
                </div>
                <div className="col-12 col-md-3 mt-5">
                  <div className="row">
                    <div className="col-3">
                      {" "}
                      <button onClick={decrease3} style={Open2==false?styles.opacityIn:styles.opacityOut} className="btnDisable" >&mdash;</button>
                    </div>
                    <span className="col-3">
                    <span className="inpt"  type="text" >{Count3}</span>
                    </span>
                    <div className="col-3">
                      {" "}
                      <button onClick={increase3} className="btn1">
                        <i className="fa-solid fa-plus"></i>
                      </button>{" "}
                    </div>
                    <div className="col-3">
                      {" "}
                      <button className="btn2">
                        <i className="fa-solid fa-trash"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mt-4">
                  <p className="TotalOld"><del>{(Count1*14).toFixed(2)} &#x20BA; 
</del></p> 
                  <span className="Total">{(Count1*11).toFixed(2)} &#x20BA; 
</span>
                </div>
              </div>
            </div>
            <div className="   mb-1">
               
            <div className="col-12 card  " style={{ padding: "20px" }}>
            <h3 className="mt-3 mb-3" style={{textAlign:"center"}}>SİPARİŞ ÖZETİ</h3>
            <p ><span style={{float:"left"}}>Sepet Toplam</span><span style={{float:"right"}}>{Total}&#x20BA;</span></p>
            <p ><span style={{float:"left",color:"orange"}}>5 Al 4 Öde</span><span style={{float:"right",color:"orange"}}>-{offer} &#x20BA;</span></p>
            <p ><span style={{float:"left"}}>Ara Toplam</span><span style={{float:"right"}}>{Subtotal} &#x20BA;</span></p>
            <p ><span style={{float:"left"}}>KDV (18%)</span><span style={{float:"right"}}>{KDV} &#x20BA;</span></p>

            <p ><span style={{float:"left"}}>Kargo</span><span style={{float:"right"}}>{cargo} &#x20BA;</span></p>
            <p ><span style={{float:"left",color:"orange"}}>100 &#x20BA; Üzeri Kargo</span><span style={{float:"right",color:"orange"}}>-9.99 &#x20BA;</span></p>
            <p ><span style={{float:"left",fontWeight:"bold"}}>TOPLAM</span><span style={{float:"right",fontWeight:"bold"}}>{(Number(realTotal)+Number(cargo)).toFixed(2)} &#x20BA;</span></p>

           <div className="row">
             <div className="col-6"><button type="button" className="btn btn-outline-warning warningOut">Alışverişe Devamet</button></div>
             <div className="col-6"><button type="button" className="btn btn-warning warning">Alışverişi Tamamla</button></div>

           </div>



          </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
