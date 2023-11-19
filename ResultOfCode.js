// soru 1
// Bu kodun çıktısı nedir neden ?
 function job() {
    return new Promise(function(resolve, reject) {
    reject();
    });
    }
    let promise = job();
    promise
    .then(function() {
    console.log('Success 1');
    })
    .then(function() {
    console.log('Success 2');
    })
    .then(function() {
    console.log('Success 3');
    })
    .catch(function() {
    console.log('Error 1');
    })
    .then(function() {
    console.log('Success 4');
    });


/* çıktısı: Error 1
    Success 4  Çünkü, fonksiyon reject döndürüyor bu yüzden catch bloğu doğrudan çalışıyor  ve error alıyoruz. Sonra ise .then() ile devam ediyor

*/


// soru 2

// anlayamadım bunu o yüzden boş bıraktım...