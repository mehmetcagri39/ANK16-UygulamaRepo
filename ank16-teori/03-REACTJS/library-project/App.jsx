import React, { useEffect, useState } from "react";
import Navi from "./src/components/Navi";
import Forms from "./src/components/Forms";
import CardList from "./src/components/CardList";
import axios from "axios";

const App = () => {
  const companyName = "ANK-16";

  //const [stateAdi,stateMetodu] = useState(initialValue);
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [secilenKategori, setSecilenKategori] = useState("Tüm Kitaplar");
  const [secilenKitap, setSecilenKitap] = useState("");

  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      // Kitap Ekleme Bölümü
      //Frontend ekleme işlemi
      setKitaplar((prev) => [...prev, yeni]);
      //Backend ekleme işlemi
      const response = await axios.post(url, yeni);
    } else {
      //Kitap Düzenleme bölümü
      url += `/${secilenKitap.id}`;
      const response2 = await axios.put(url, yeni);
      setKitaplar((prev) =>
        prev.map((kitap) => {
          if (kitap.id === secilenKitap.id) {
            return { ...response2.data };
          } else {
            return { ...kitap };
          }
        })
      );
      setSecilenKitap("");
    }
  };

  const kitapSil = async (id) => {
    //Frontend silme işlemi
    setKitaplar((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );
    //Backend silme işlemi
    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); !! Tehlikeli !!
    const response = await axios.patch(url, { isDeleted: true });
  };

  // const kitaplariGetir = async () => {
  //   if (secilenKategori === "Tüm Kitaplar") {
  //     let url = "http://localhost:3005/kitaplar";
  //     const response = await fetch(url);
  //     const kitaplar = await response.json();
  //     setKitaplar(kitaplar);
  //   } else {
  //     const filtred = kitaplar.filter(
  //       (kitap) => kitap.kitapKategorisi === secilenKategori
  //     );
  //     setKitaplar(filtred);
  //   }
  // };

    //aşağıdaki kısım katogeriye göre kitaplarıo geitiyor.
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
      url+=`?kitapKategorisi=${secilenKategori}`
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  };

  const kategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  };

  const cardDuzenle = (id) => {
    setSecilenKitap(kitaplar.find((item) => item.id === id));
    console.log(kitaplar.find((item) => item.id === id));
  };

  useEffect(() => {
    kategorileriGetir();
  }, [])
  useEffect(() => {
    kitaplariGetir();
  }, [secilenKategori])
  //kitaplariGetir();

  return (
    <>
      <Navi
        navHead={companyName}
        kategoriler={kategoriler}
        setSecilenKategori={setSecilenKategori}
      />
      <Forms
        secilenKitap={secilenKitap}
        kitapEkle={kitapEkle}
        kitaplar={kitaplar}
      />
      <CardList
        kitaplar={kitaplar}
        kitapSil={kitapSil}
        secilenKategori={secilenKategori}
        cardDuzenle={cardDuzenle}
      />
      {companyName}
    </>
  );
};

export default App;
