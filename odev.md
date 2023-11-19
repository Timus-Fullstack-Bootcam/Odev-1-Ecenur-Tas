1- JavaScript, 1995 yılında Brendan Eich tarafından geliştirilmiş ilk adı 'Mocha' olan ve o zamanlar web tarayıcısı olan Netscape Navigator için tasarlanan bir betik dilidir. JavaScript sonradan LiveScript olarak biliniyordu ve 1997'de JavaScript olarak adlandırıldı. JavaScript web sitelerinin dinamik olmasına katkı sağlar. Client ve server taraflı çalışabilir.

1995-1997: ECMA-262 standardı haline geldi. Bu dönemde, JavaScript'in kullanım amacı, web sayfalarına etkileşimli öğeler eklemekti.

Mozilla ve Netscape Sonrası: Netscape, JavaScript'i ECMA'ya devrettikten sonra, Mozilla Foundation JavaScript'i Firefox tarayıcısı için geliştirmeye devam etti. 

Günümüz: Google'ın V8 motorunun oluşturulması, JavaScript'in tarayıcı dışında da çalışabilmesini sağladı. Ryan Dahl Node.js'i yayınladı. Node.js, JavaScript'in tarayıcı dışında kullanılmasını sağlayan açık kaynaklı bir JavaScript çalışma zamanı ortamıdır. Bu sayede JavaScript, mobil uygulamalardan masaüstü uygulamalara ve backend sunuculara kadar birçok alanda kullanılabilecek popüler bir dil haline geldi.

2- Java, OOP bir programlama dilidir. Hem sunucu tarafında hem de istemci tarafında kullanılabilir. Genellikle büyük ölçekli uygulamalar, mobil uygulamalar, işletim sistemleri ve ağ uygulamaları gibi çeşitli alanlarda kullanılır.

JavaScript ise ilk olarak tarayıcılarda web sayfalarını etkileşimli hale getirmek için oluşturulmuş bir tarayıcı tarafı betik dilidir. Ancak günümüzde, sunucu taraflı geliştirme (Node.js gibi) ve mobil uygulamalar gibi çeşitli alanlarda da kullanılır.

Java ve JavaScript arasındaki temel farklar ise:

- Java, genel amaçlı bir dildir, JavaScript ise web geliştirme için tasarlanmıştır.
- Java, sunucu tarafında veya istemci tarafında kullanılabilir, JavaScript ise yalnızca istemci tarafında kullanılabilir.
-Java, derlenmesi gereken statik tipli bir dildir, JavaScript ise yorumlanan dinamik tipli bir dildir.
- Java, bir e-ticaret sitesi veya bir kurumsal uygulama gibi karmaşık bir web uygulaması oluşturmak için kullanılabilir. JavaScript ise bir web sitesine etkileşimli bir menü veya bir kaydırma özelliği eklemek için kullanılabilir.

3- JavaScript'te iki farklı veri türü vardır:

- Primitive Data Types (İlkel Veri Tipi):
  Değişmez... 
  String, Number, Boolean, BıgInt, Null

- Non-primitive Data Type (İlkel Olmayan(Referans) Veri Tipi)
  Değiştirilebir ...
  Object, Functions, Array

4- null, object dir çünkü typeof sonucu bir object döndürür. 

undefined ise, değişken var ama bir değer verilmemiştir.

5- NaN, hesaplamalarda yapılan bir hatayı belirtir.
Örnek, alert("ece")/2; //NaN döner. sayı değil

6- eğer tek satırı yorum satırı olarak alacaksam ; // ile.
eğer birden fazla satırı yorum satırı olarak alacaksam ; /* */  ile kullanırım.

7- Global Değişken, 
   her yerden erişilmesi gereken değerleri saklamak için kullanılır fakat tanımlanan fonksiyonların dışında belirtilmelidir. herhangi bir fonksiyon içinde değiştirilebilirler. Hatalar ve karışıklıklarla karşılaşma olasılığı çok yüksek o yüzden local değişkenleri kullanmak tavsiye edilir.

8- this,
Çağrıldığı nesneyi belirtir. Değeri ise çağrıldığı yere göre değişir. 
Örnek:  ![buradaki this ise listItems[x] i temsil eder](image.png)

9- ==, eğer iki değer de aynı tipte ise, değişkenlerin tiplerini eşitler. Değerler eşitse true döndürür, değilse false döndürür. Örnek:        null==undefined    "  true  "
   === , değerlerin ve veri tiplerinin aynı olup olmadığını kontrol eder. Örnek: null===undefined   " false   "
 
10- let | var  | const 
--------------------- | ---------------------- | ---------------------------
 Blok kapsamlı element   Standart bir değişken tanımlamada kullanırız   Sabit değişken tanımlamada kullanırız(blok kapsamı dahilindedir)
 --------------------- | ---------------------- | ---------------------------
 değişken tekrar oluşturulmaz   aynı değişken tanımlamalarında en son değişkenin tuttuğu veri geçerlidir   aynı değişken isminden tekrar oluşturamazsın.
 --------------------- | ---------------------- | ---------------------------
 ister ilk değer ata ister atama   ilk değer atamazsak undefined döner  ilk değer atamak zorundayız 

11- Arrow fonksiyon, contructor olarak kullanılamazlar.
Normal fonksiyon,

12-
13-
14-
15-
16-
17-
18-
19-
20-
