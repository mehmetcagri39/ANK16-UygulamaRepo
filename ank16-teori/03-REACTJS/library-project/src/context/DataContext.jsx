import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

//context oluşturulması
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.
export const DataProvider = ({ children }) => {
  //export yazılma sebebi dışarıda da kullanabilmek için
  
  const [state, dispatch] = useReducer (reducer,initialState);

  //yapıdaki tüm state, metod, ...etc. buraya taşınacak.
  const companyName = "ANK-16";
  const{secilenKitap,kitaplar,kitapAdi,kitapYazari,kitapKategorisi,kitapResmi,kitapAciklamasi,secilenKategori}=state

  //const [stateAdi,stateMetodu] = useState(initialValue);
 

  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      // Kitap Ekleme Bölümü
      //Frontend ekleme işlemi
      // setKitaplar((prev) => [...prev, yeni]);
      //case_12
      dispatch({type:"kitapEkle",yeni})
      //Backend ekleme işlemi

      const response = await axios.post(url, yeni);
    } else {
      //Kitap Düzenleme bölümü
      url += `/${secilenKitap.id}`;
      const response2 = await axios.put(url, yeni);
      // setKitaplar((prev) =>
      //   prev.map((kitap) => {
      //     if (kitap.id === secilenKitap.id) {
      //       return { ...response2.data };
      //     } else {
      //       return { ...kitap };
      //     }
      //   })
      // );
      // setSecilenKitap("");
    }//case_15
    dispatch({type:"kitapDuzenle",yeni});
  };

  const kitapSil = async (id) => {
    //Frontend silme işlemi
    // setKitaplar((prev) =>
    //   prev.filter((statedenGelen) => statedenGelen.id !== id)
    // );
    dispatch({type:"kitapSil",id})
    //Backend silme işlemi
    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); !! Tehlikeli !!
    const response = await axios.patch(url, { isDeleted: true });
  };

  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    // setKitaplar(kitaplar);
    //case_1
    dispatch({type:"kitaplariGetir", payload: kitaplar})
  };

  //aşağıdaki kısım katogeriye göre kitaplarıo geitiyor.
  // const kitaplariGetir = async () => {
  //   let url = "http://localhost:3005/kitaplar";
  //   if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
  //     url+=`?kitapKategorisi=${secilenKategori}`
  //   }
  //   const response = await fetch(url);
  //   const kitaplar = await response.json();
  //   setKitaplar(kitaplar);
  // };

  const kategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    // setKategoriler(kategoriler);
    //case_2
    dispatch({type:"kategorileriGetir",payload:kategoriler})
  };

  const cardDuzenle = (id) => {
    // setSecilenKitap(kitaplar.find((item) => item.id === id));
    //case_14
    dispatch({type:"cardDuzenle",id})
    // console.log(kitaplar.find((item) => item.id === id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("BilgeAdam Akademi");
    kitapEkle({
      // id: Math.floor(Math.random()*100000000), SAKIN YAPMA!!!!
      id: (Number(kitaplar[kitaplar.length - 1].id) + 1).toString(),
      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategorisi: kitapKategorisi,
      kitapSayfaSayisi: kitapSayfaSayisi,
      kitapResmi: kitapResmi,
      kitapAciklamasi: kitapAciklamasi,
    });
    // setKitapAdi("");
    // setKitapYazari("");
    // setKitapKategorisi("Kategori Seçiniz");
    // setKitapResmi("");
    // setKitapSayfaSayisi("");
    // setKitapAciklamasi("");
    //case_3
    dispatch({type:"resetForm"})
  };

  useEffect(() => {
    kategorileriGetir();
  }, []);

  useEffect(() => {
    kitaplariGetir();
  }, [secilenKategori]);

  // useEffect(() => {
  //   if (secilenKitap) {
  //     setKitapAdi(secilenKitap.kitapAdi);
  //     setKitapYazari(secilenKitap.kitapYazari);
  //     setKitapKategorisi(secilenKitap.kitapKategorisi);
  //     setKitapResmi(secilenKitap.kitapResmi);
  //     setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
  //     setKitapAciklamasi(secilenKitap.kitapAciklamasi);
  //   }
  // }, [secilenKitap]);

  return (
    <DataContext.Provider
      value={{
        companyName,
        handleSubmit,         
        kitapSil,
        cardDuzenle,
        state,
        dispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
