// // let username = "cagri";
// // console.log(username);
// // console.log(Math.ceil(Math.random()*100));



// // let myStory = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna eros, vestibulum at nunc at, fermentum volutpat arcu. Proin maximus augue nec ex dolor sollicitudin. Nulla pretium eget massa ornare dignissim. Nullam nisi ex, dolor quis diam eget, imperdiet molestie nibh. Morbi id efficitur magna. Etiam dolor purus id eros varius, et iaculis nisi venenatis. Nulla auctor orci ac orci dolor pulvinar. Aenean sed semper nisi. Duis dolor aliquam orci, et malesuada odio cursus ac.";

// // // -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
// // // 1- Yazdığınız hikayenin uzunluğunu yazdırın.
// // console.log(myStory.length);
// // // 2- Hikayenin toplam index sayısı kaçtır.
// // //480 0 sayılacaksa 481
// // // 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
// // console.log(myStory.indexOf(("dolor")));
// // console.log(myStory.lastIndexOf(("dolor")));
// // // 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
// // console.log(myStory.substring(0,14));
// // console.log(myStory.slice(0,14));
// // // 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)
// // console.log(myStory.substring(14));
// // console.log(myStory.slice(14));
// // // 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
// // console.log(myStory.substring(myStory.length-5));
// // console.log(myStory.slice(myStory.length-5));
// // // 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
// // console.log(myStory.substring(11, 21));
// // // 8- Son 5 karakter haric hikayenizi yazdırın.
// // console.log(myStory.substring(myStory, myStory.length-5));
// // // 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
// // console.log(myStory.includes("bilgeadam"));
// // // 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
// // console.log(myStory.replaceAll("i","ı"));
// // // 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
// // console.log(myStory.replace("a","e"));
// // // 12- Bütün metni büyük harfe çevirin.
// // console.log(myStory.toUpperCase());
// // // 13- Bütün metni küçük harfe çevirin.çağ
// // console.log(myStory.toLowerCase());
// // // 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
// // let isim = prompt("isim giriniz");
// // //   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
// // console.log(`hoşgeldin ${isim}` );
// // //   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
// // console.log(`benim adım ${isim}` );
// // // 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
// // //   a- Başındaki boşlukları kaldırın.
// // console.log(isim.trimStart(isim));
// // //   b- Sonundaki boşlukları kaldırın.
// // console.log(isim.trimEnd(isim));
// // //   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// // let yeniİsim = console.log(isim.trim(isim));
// // // 16- 14. sorudaki Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
// // if(isim==isim)
// //     {console.log(`BENİM Adım ${isim}` );
// // }
// // // 17- Ekrana, daha öncesinde bir değişkene atadığınız bir değeri yazdıran pop-up oluşturun.
// // if(isim==isim)
// //     {alert(isim);
// //         ;
// // }








// // // 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
// // let negatifSayi = -5
// // console.log(Math.abs(negatifSayi));

// // // 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
// // let ondalıkliSayi = 6.11113244523423423

// // console.log(Math.ceil(ondalıkliSayi));

// // // 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
// // let ondalıkliSayi1 = 8.9

// // console.log(Math.ceil(ondalıkliSayi1));
// // // 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
// // console.log(Math.max(6,15,-7,80,-35));

// // // 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
// // console.log(Math.min(6,15,-7,80,-35));

// // // 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
// // console.log(ondalıkliSayi.toFixed(3));

// // // 7-) bir sayının karekökünü bulun.
// // console.log(Math.sqrt(9));

// // // 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
// // console.log(Math.pow(3,2));

// // // 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
// // let sayi2 = 123.456789;
// // console.log(sayi2.toPrecision(6));

// // // 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
// // console.log(sayi2*1000000);

// // // 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)
// //  console.log(Math.ceil(Math.random()*100));











// // 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
// let sayi = -1;

// if (sayi > 0) {
//     console.log("sayi pozitif");

// } else if (sayi < 0) {
//     console.log("sayi negatif.");
// }
// else {
//     console.log("sayi sıfır.");
// }
// // 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
// let sayi1 = 1
// let sayi2 = -2
// if (sayi1 > sayi2) {
//     console.log("sayi1 büyük");

// } else if (sayi1 < sayi2) {
//     console.log("sayi2 büyükj.");
// }
// else {
//     console.log("iki sayı eşit.");
// }

// // 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
// let kelime = "kayak";
// let kelimeReversed = "";

// for (let i = kelime.length - 1; i >= 0; i--) {
//     kelimeReversed += kelime[i];
// }
// console.log(kelimeReversed)

// if (kelimeReversed == kelime) {
//     console.log("bu kelime palindromdur")

//         ;
// }
// else {
//     console.log("bu kelime palindrom değildir")

// }

// // 4- VKI Hesabı
// //Kullanıcıdan boy,kilo,yaş,cinsiyet
// //VKI = kilo/(boy/100)**2
// //18,5 düşükse zayıf
// //18,5 ile 24,9 arası normal
// //25 ile 29,9 arası kilolu
// //30 ile 34,9 arası obez
// //35 üstü ise aşırı obez
// //Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.

// //50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
// //60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!

// const boy = prompt("Boyunuzu girin");
// const kilo = prompt("kilonuzu girin");
// const yaş = prompt("yaşınızı girin");
// const cinsiyet = prompt("cinsiyetinizi girin");

// const VKI = (kilo / ((boy / 100) ** 2));

// if (VKI < 18.5) {
//     console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre zayıfsınız.`);
// } else if (VKI >= 18.5 && VKI <= 24.9) {
//     console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre normal kilonuzdasınız.`);
// } else if (VKI >= 25 && VKI <= 29.9) {
//     console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre kilolusunuz.`);
// } else if (VKI >= 30 && VKI <= 34.9) {
//     console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre obezsiniz.`);
// } else if (VKI >= 35) {
//     // Öncelikle cinsiyet ve yaşa bağlı özel durumları kontrol edelim
//     if (cinsiyet == "erkek" && yaş >= 50) {
//         console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre aşırı obezsiniz. Bol bol yürüyüş yapmalısınız!`);
//     } else if (cinsiyet == "kadın" && yaş >= 60) {
//         console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre aşırı obezsiniz. Sebze tüketimini arttırmalısınız!`);
//     } else {
//         console.log(`VKI değeriniz = ${VKI} ve bu değerlere göre aşırı obezsiniz.`);
//     }
// }

// // 5- Hesap Makinesi
// // Kullanıcıdan iki sayı ve bir işlem türü (+, -, *, /) girmesini isteyin. Girilen işlem türüne göre iki sayı üzerinde matematiksel işlem gerçekleştirin ve sonucu gösterin. Eğer kullanıcı geçersiz bir işlem türü girerse, hata mesajı verin.

// const hesapla = (a,b,işaret) =>{
//     if(işaret === "topla"){
//         return a+b;
//     }
//     else if(işaret === "çıkar"){
//         return a-b;
//     }
//     else if(işaret === "çarp"){
//         return a*b;
//     }
//     else if(işaret === "böl"){
//         return a/b;
//     }
//     else{
//         console.log("Hatalı işlem");
//     }
// }

// // Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

// let ay = prompt("ay giriniz");

// switch (ay) {
//     case "ocak":
//         console.log(`${ay} 31 gündür`);
//         break;

//     case "şubat":
//         console.log(`${ay} 28 gündür`);
//         break;

//     case "mart":
//         console.log(`${ay} 31 gündür`);
//         break;

//     case "nisan":
//         console.log(`${ay} 30 gündür`);
//         break;

//     case "mayıs":
//         console.log(`${ay} 31 gündür`);
//         break;

//     case "haziran":
//         console.log(`${ay} 30 gündür`);
//         break;

//     case "temmuz":
//         console.log(`${ay} 31 gündür`);
//         break;

//     case "ağustos":
//         console.log(`${ay} 31 gündür`);
//         break;

//     case "eylül":
//         console.log(`${ay} 30 gündür`);
//         break;

//     case "ekim":
//         console.log(`${ay} 31 gündür`);
//         break;

//     case "kasım":
//         console.log(`${ay} 30 gündür`);
//         break;

//     case "aralık":
//         console.log(`${ay} 31 gündür`);        
//         break;

//     default:
//         break;


// }


// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin. 



// let araba = prompt("araba giriniz");
// let renk = prompt("renk giriniz");
// let stokDurumu="";

// switch (araba.toLowerCase) {
//     case "bmw":
//         switch (renk.toLowerCase) {
//             case "kırmızı":
//                  stokDurumu="var";
//                 console.log(stokDurumu);
//                 break;
//             case "mavi":
//                  stokDurumu="yok";
//                 console.log(stokDurumu);
//                 break;
//             case "yeşil":
//                  stokDurumu="var";
//                 console.log(stokDurumu);
//                 break;

//             default:
//                 break;
//         }
//         break;
//     case "mercedes":
//         switch (renk.toLowerCase) {
//             case "kırmızı":
//                  stokDurumu="yok";
//                 console.log(stokDurumu);
//                 break;
//             case "mavi":
//                  stokDurumu="yok";
//                 console.log(stokDurumu);
//                 break;
//             case "yeşil":
//                  stokDurumu="var";
//                 console.log(stokDurumu);
//                 break;

//             default:
//                 break;
//         }
//         break;

//     case "audi":
//         switch (renk.toLowerCase) {
//             case "kırmızı":
//                  stokDurumu="var";
//                 console.log(stokDurumu);
//                 break;
//             case "mavi":
//                  stokDurumu="yok";
//                 console.log(stokDurumu);
//                 break;
//             case "yeşil":
//                  stokDurumu="yok";
//                 console.log(stokDurumu);
//                 break;

//             default:
//                 break;
//         }
//         break;

//     default:
//         break;

// }

// // 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
// let myArray = ["Mehmet","Çelenk","26","true","Muz"," Portakal","Erik","Kayısı","Kiraz","Kavurma"];
// console.log(myArray);

// // 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
// myArray[0] = "Çağrı";
// console.log(myArray);

// // 3- dizinin uzunluğunu konsola yazdırın.
// console.log(myArray.length);

// // 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// let sonUzunluk = myArray.push("Çilek"); 
// console.log(myArray);
// console.log(sonUzunluk);

// // 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// let başUzunluk = myArray.unshift("Baykuş"); 
// console.log(myArray);
// console.log(başUzunluk);

// // 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// let sonSilinen = myArray.pop();
// console.log(myArray);
// console.log(sonSilinen);

// // 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// let başSilinen = myArray.shift();
// console.log(myArray);
// console.log(başSilinen);

// // 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
// let newArray = [sonUzunluk, başUzunluk, sonSilinen, başSilinen];
// console.log(newArray);

// // 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

// let birleşmiş1 = myArray.concat(newArray);
// console.log(birleşmiş1);

// let birleşmiş2 = [...myArray, ...newArray];
// console.log(birleşmiş2);

// // 10- myArray içerisinde eleman olarak "Veli" var mı ?
// console.log(myArray.includes("Veli"));

// // 11- myArray içersinide 4.elemandan itibaren patates var mı?
// console.log(myArray.includes("patates", 4));

// // 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
// console.log(myArray.indexOf("Muz"));

// // 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
// let degisken = newArray.slice(0, 3);
// console.log(degisken);

// // 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
// let degisken1 = degisken.splice(1, 1, "Kivi", "Üzüm");

// console.log(degisken);
// console.log(degisken1);

// // 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']
// degisken.splice(3, 1)
// console.log(degisken);
// degisken.splice(1, 1, "Ananas")
// console.log(degisken);
// degisken.splice(3, 0, "Armut")
// console.log(degisken);


// // 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

// console.log(degisken.toString());
// console.log(degisken.join(" + "));




// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangicSayi = parseInt(prompt("Başlangıç sayısı giriniz:"));
// let bitisSayi = parseInt(prompt("Bitiş sayısı giriniz:"));

// let toplam = 0;

// for (let i = baslangicSayi; i <= bitisSayi; i++) {
//     toplam += i;
// }

// console.log(toplam);


// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let ogrenciNot = new Array(5);
// let toplamNot = 0;
// let ortalama = 0;

// for (let index = 0; index < ogrenciNot.length; index++) {

//     ogrenciNot[index] = parseInt(prompt("Öğrencilerin notlarını giriniz:"));

//     toplamNot += ogrenciNot[index]

//     ortalama = toplamNot/5
//     if (ogrenciNot[index]<60) {
//         console.log(`${ogrenciNot[index]} alan öğrenci dersten geçememiştir.`)

//     }
//     else{console.log(`${ogrenciNot[index]} alan öğrenci dersten geçmiştir.`)}

// }
// console.log(`ortalama = ${ortalama}`);
// console.log(ogrenciNot);



// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.



// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.



// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

// const carpma = (sayi1, sayi2) => {
//     return sayi1 * sayi2;
// };

// console.log(carpma(3, 4));


// // 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.

// const kelimeSayisi = (cumle) => {
//     return cumle.split(' ').length;
// };

// console.log(kelimeSayisi("Bugün hava çok sıcak."));

// // 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

// function faktoriyel(n) {

//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * faktoriyel(n - 1);
// }
// console.log(faktoriyel(5));

// //dizi obje ve fonksiyonlar const ile tanımlanır

// // 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

// const asalCheck = function asal(m) {

//     for (let i = 3; i <= Math.sqrt(m); i += 2) {
//         if (m % i === 0) {
//             return false;
//         }
//     }
//     return true;

// };
// console.log(asalCheck(17));


// // 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
// let dizi = [2, 3, 4, 6, 7, 11, 322, 55];

// function enBüyükSayı(dizi) {

//     let kontrol = dizi[0];

//     for (let index = 1; index < dizi.length; index++) {

//         if (kontrol < dizi[index]) {

//             kontrol = dizi[index];
//         }

//     }
//     return kontrol;

// }
// console.log(enBüyükSayı(dizi));

// // 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

// function toplamSayılar(dizi) {

//     let toplam = dizi[0];

//     for (let index = 1; index < dizi.length; index++) {

//         toplam += dizi[index];

//     }
//     return toplam;

// }
// console.log(toplamSayılar(dizi));


// // 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
// let dizi1 = [2, 3, 4, 6, 7, 11, 322, 55];

// const enBüyükSayı1 = (dizi) => {

//     let kontrol1 = dizi1[0];

//     for (let index = 1; index < dizi1.length; index++) {

//         if (kontrol1 < dizi1[index]) {

//             kontrol1 = dizi1[index];
//         }

//     }
//     return kontrol1;


// }
// console.log(enBüyükSayı1(dizi1));

// const toplamSayılar1 = (dizi1) => {

//     let toplam1 = dizi1[0];

//     for (let index = 1; index < dizi1.length; index++) {

//         toplam1 += dizi1[index];

//     }
//     return toplam1;
// }
// console.log(toplamSayılar1(dizi));

// // Buradan itibaren yalnızca arrow function kullanıyoruz.

// // 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

// let ornekString = "Sanırım yağmur yağacak.";

// const tersineCevir = (ornekString) => {
//     return ornekString.split('').reverse().join('');
// }

// console.log(tersineCevir(ornekString));

// // 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.

// //-


// // 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

// const pozitifBolen = (sayi) => {
//     let bolenler = [];
//     for (let i = 1; i <= sayi; i++) {
//         if (sayi % i === 0) {
//             bolenler.push(i);
//         }
//     }
//     return bolenler;
// }

// let sayi = 24;
// console.log(`${sayi} sayısının pozitif bölenleri:`, pozitifBolen(sayi));

// // 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

// const karakterSay = (ornekString1, karakter) => {
//     let sayac = 0;
//     for (let i = 0; i < ornekString1.length; i++) {
//         if (ornekString1[i] === karakter) {
//             sayac++;
//         }
//     }
//     return sayac;
// }

// let ornekString1 = "Sanırım yağmur yağacak.";
// let karakter = 'a';
// console.log(`${karakter} karakteri ${karakterSay(ornekString1, karakter)} kez tekrarlandı.`);

// // 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

// let sayiDizisi = [1, 2, 3, 4, 45, 6, 7, 8, 9];
// let diziToplam = 0;

// const sayiTopla = (sayiDizisi) => {

//     for (let index = 0; index < sayiDizisi.length; index++) {

//         diziToplam += sayiDizisi[index];
//     }
//     return diziToplam;

// }
// console.log(sayiTopla(sayiDizisi));


// Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// // ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.

// dizi1.forEach(sayi => 
//     console.log(sayi)
// );


// // 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.

// dizi3.forEach(sayi => {

//     if (sayi % 2 === 0) {
//         console.log(sayi);
//     }

//     // return(sayi);
// });
// // console.log(dizi3);

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.

// dizi.forEach(sayi => {
//     if (sayi) {
//         console.log(sayi * 2);
//     }
// });

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)

// let diziToplam = 0;

// dizi.forEach(sayi => {

//     diziToplam += sayi;

// });
// console.log(diziToplam);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.

// dizi.forEach((sayi, index) => {
//     if (index === dizi.length - 1) {

//         console.log(`Dizinin son elemanı : ${sayi}`);
//     }
//     else{
//         console.log(sayi);

//     }
// });

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

// let mapleme = dizi1.map(eleman => eleman.toUpperCase());
// console.log(mapleme);

// // 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.

// let rastgele = Math.ceil(Math.random() * 10 + 1);
// console.log(rastgele);

// let mapleme1 = dizi3.map(eleman => eleman + rastgele);
// console.log(mapleme1);


// // 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

// let mapleme2 = dizi1.map(eleman => eleman.split('').reverse().join(''));
// console.log(mapleme2);

// // 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

// let mapleme3 = dizi3.map(eleman => eleman.toString());
// console.log(mapleme3);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.

// let mapleme4 = dizi1.map(eleman => eleman.split('').reverse().join(''));
// console.log(mapleme4);



// let result = dizi1.map(string => {

//     let tersString = "";
//     for (let i = string.length - 1; i >= 0; i--) {

//         tersString += string[i];

//     }
//     return tersString;
// });

// console.log(result);

// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek

// const toplam = dizi.reduce((topla, sayi) => topla + (sayi + 2), 0);

// console.log(toplam);

// // 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

// const ilkCift = dizi.find(sayi => sayi % 2 === 0);

// console.log(ilkCift); 

// // 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

// const sonCift = dizi.findLast(sayi => sayi % 2 === 0);

// console.log(sonCift); 

// // 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek

// const negatif = dizi2.some(sayi => sayi < 0);

// console.log(negatif);

// // 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek

// const pozitif = dizi.every(sayi => sayi > 0);

// console.log(pozitif); 

// // 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek

// const sayiSirala = dizi3.sort((a, b) => a - b);

// console.log(sayiSirala); 



// // 1- myObject isimli boş bir nesne oluşturun.

// const myObject = {};

// // 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin

// myObject.isim = "Çağrı";
// myObject.yas = 26;
// myObject.cinsiyet = "Erkek";
// myObject.meslek = "Yazılım Geliştiricisi";

// console.log(myObject);

// // 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.

// delete myObject.cinsiyet;

// console.log(myObject);

// // 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

// const birBaskaDegisken = {...myObject}; ///spread opeeratörü

// console.log(birBaskaDegisken);


// // 5- nesnenizin anahtarlarını konsola yazdırın.

// console.log(Object.keys(birBaskaDegisken));

// // 6- nesnenizin değerlerini konsola yazdırın.

// console.log(Object.values(birBaskaDegisken));

// // 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.

// for (const key in birBaskaDegisken) {
//     console.log(key + ": " + birBaskaDegisken[key]);
// }


// // 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

// if ('isim' in myObject) {
//     console.log("Var");
// } else {
//     console.log("Yok");
// }

// // 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.

// Object.freeze(birBaskaDegisken);

// // 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.

// Object.seal(birBaskaDegisken);




// // aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
// /*(örn çıktı: 
// 05.01.2020 balata değişimi - 1700 TL
// 05.01.2020 yağ değişimi - 700 TL
// 05.01.2020 boya koruma - 700 TL
// ...
// ...
// ...
// 28.08.2022 seramik kaplama - 4500 TL
// )
// */

// const aracBilgileri = {
//     id: "audiA6_123",
//     model: "audiA6",
//     yil: 2019,
//     renk: "kırmızı",
//     servisKayitlari: [
//       {
//         id: "audiA6_123_1",
//         tarih: "05.01.2020",
//         km: 2500,
//         ucret: 3000,
//         detay: [
//           {
//             id: "audiA6_123_1_1",
//             aciklama: "balata değişimi",
//             ucret: 1700,
//           },
//           {
//             id: "audiA6_123_1_2",
//             aciklama: "yağ değişimi",
//             ucret: 700,
//           },
//           {
//             id: "audiA6_123_1_3",
//             aciklama: "boya koruma",
//             ucret: 600,
//           },
//         ],
//       },
//       {
//         id: "audiA6_123_2",
//         tarih: "25.06.2021",
//         km: 10500,
//         ucret: 5000,
//         detay: [
//           {
//             id: "audiA6_123_2_1",
//             aciklama: "balata değişimi",
//             ucret: 2700,
//           },
//           {
//             id: "audiA6_123_2_2",
//             aciklama: "yağ değişimi",
//             ucret: 1700,
//           },
//           {
//             id: "audiA6_123_2_3",
//             aciklama: "boya koruma",
//             ucret: 600,
//           },
//         ],
//       },
//       {
//         id: "audiA6_123_3",
//         tarih: "28.08.2022",
//         km: 25400,
//         ucret: 10000,
//         detay: [
//           {
//             id: "audiA6_123_3_1",
//             aciklama: "balata değişimi",
//             ucret: 3500,
//           },
//           {
//             id: "audiA6_123_3_2",
//             aciklama: "yağ değişimi",
//             ucret: 2000,
//           },
//           {
//             id: "audiA6_123_3_3",
//             aciklama: "seramik kaplama",
//             ucret: 4500,
//           },
//         ],
//       },
//     ],
//   };




//   //--++--




//   aracBilgileri.servisKayitlari.forEach(kayit => {kayit.detay.forEach(detay => {




//         console.log(`${kayit.tarih} ${detay.aciklama} - ${detay.ucret} TL`);




//     });



// });





//   // student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

//   const student = {};
//   student.isim = "Tuğrul";
//   student.yas = 21;
//   student.cinsiyet = "Erkek";

//   for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         console.log(student[key]);        
//     }
//   }




//   // İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

//   const ogrenciBilgileri =[
//       {
//         isim: "ogrenci1",
//         notlar:[ 30, 25, 80 ]
//       },
//       {
//         isim: "ogrenci2",
//         notlar:[ 40, 55, 93 ]
//       },
//       {
//         isim: "ogrenci3",
//         notlar:[ 90, 90, 85 ]
//       }
//     ];

    

//   for (const ogrenci of ogrenciBilgileri) {

//     let toplamNot = 0;

//     for (const not of ogrenci.notlar) {
//       toplamNot += not;
//     }

//     const ortalamaNot = toplamNot / ogrenci.notlar.length;
  
//     if (ortalamaNot >= 60) {
//       console.log(`${ogrenci.isim} dersi geçti.`);
//     } else {
//       console.log(`${ogrenci.isim} dersten kaldı.`);
//     }

//   }

  