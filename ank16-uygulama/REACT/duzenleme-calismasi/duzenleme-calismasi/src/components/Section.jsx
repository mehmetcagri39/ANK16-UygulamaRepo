import React, { useState } from 'react';

const Section = () => {
  const [notlar, setNot] = useState([]);
  const [yeniNot, setYeniNot] = useState('');
  const [duzenlenmisNot, setDuzenlenmisNot] = useState(null);
  const [duzenlenmisText, setDuzenlenmisText] = useState('');

  const notEkle = () => {
    if (yeniNot.trim() !== '') {
      setNot([...notlar, { id: Date.now(), text: yeniNot }]);
      setYeniNot('');
    }
  };

  const deleteNot = (id) => {
    setNot(notlar.filter(not => not.id !== id));
  };

  const duzenle = (not) => {
    setDuzenlenmisNot(not);
    setDuzenlenmisText(not.text);
  };

  const duzenlemeyiKaydet = (id) => {
    setNot(notlar.map(not => (not.id === id ? { ...not, text: duzenlenmisText } : not)));
    setDuzenlenmisNot(null);
    setDuzenlenmisText('');
  };

  return (
    <section>
      <h2>Yeni Not Ekle</h2>
      <input
        type="text"
        value={yeniNot}
        onChange={(e) => setYeniNot(e.target.value)}
      />
      <button onClick={notEkle}>Ekle</button>
      <div>
        <h3>Notlarım</h3>
        {notlar.map(not => (
          <div key={not.id}>
            {duzenlenmisNot && duzenlenmisNot.id === not.id ? (
              <>
                <input
                  type="text"
                  value={duzenlenmisText}
                  onChange={(e) => setDuzenlenmisText(e.target.value)}
                />
                <button onClick={() => duzenlemeyiKaydet(not.id)}>Kaydet</button>
              </>
            ) : (
              <>
                <p>{not.text}</p>
                <button onClick={() => duzenle(not)}>Düzenle</button>
                <button onClick={() => deleteNot(not.id)}>Sil</button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
