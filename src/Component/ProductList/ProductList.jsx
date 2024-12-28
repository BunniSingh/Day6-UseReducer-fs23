import style from './ProductList.module.css';
import Cards from './Cards/Cards';
import GrandTotal from './GrandTotal/GrandTotal';
const ProductList = ({ data, setsmartPhoneData, setCartLength }) => {
  let updateFun = (payload, id)=>{
    let copyData = [...data];
    let index = copyData.findIndex(ele=> ele.id === id);

    if(index === -1) return;  
    let copyObj = {...copyData[index]};

    if(payload === 'inc'){
      copyObj.count = copyObj.count + 1;
      copyObj.productTotalPrice = Number(copyObj.Price) * Number(copyObj.count);
      copyData.splice(index , 1 , copyObj)
    }else if(payload === 'dec'){
      if(copyObj.count > 1){
        copyObj.count = copyObj.count - 1;
        copyObj.productTotalPrice = Number(copyObj.Price) * Number(copyObj.count);
        copyData.splice(index, 1 , copyObj);
      }
      if(copyObj.count == 1){
        copyObj.productTotalPrice = copyObj.Price;
      }
    }else if(payload === 'del'){
     copyData.splice(index, 1);
    }
    setsmartPhoneData(copyData);
    setCartLength(copyData.length)
  }

  return (
    <div className={style.container}>
      <h1>Your Bag</h1>
      <div className={style['card-container']}>
        {
          data.map((ele, idx) => {
            return (
              <Cards key={ele.id} list={ele} updateFun={updateFun} />
            )
          })
        }
        <hr />
          <GrandTotal data = {data} setsmartPhoneData={setsmartPhoneData} setCartLength={setCartLength}/>
      </div>
    </div>
  )
}

export default ProductList